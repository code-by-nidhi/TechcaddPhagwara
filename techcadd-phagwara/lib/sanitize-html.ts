/**
 * Rich text from the CMS, made safe to put in the DOM.
 *
 * Why at all
 * ----------
 * The CMS stores what its TipTap editor produced as raw HTML, and the API
 * validates the *link* fields on a block but not the body — so `body` arrives
 * as whatever markup was in the editor. Rendering that with
 * `dangerouslySetInnerHTML` and no filter makes every CMS account a stored-XSS
 * vector on the public site: one compromised editor login, or one editor who
 * pasted formatted text from a page that carried an `onerror` with it, and the
 * script runs for every visitor.
 *
 * CMS editors are staff, so this is not the site's first line of defence. It is
 * the one that costs nothing and does not depend on all of them staying
 * uncompromised.
 *
 * How
 * ---
 * An allowlist, and — the part that matters — **nothing is passed through**.
 * Every tag is re-emitted from scratch with only the attributes named below,
 * each one re-quoted and re-escaped here. A sanitiser that edits markup in
 * place has to out-parse the browser to be correct; one that rebuilds it only
 * has to know what it is willing to write.
 *
 * The tag list is TipTap's StarterKit plus Link and Image, which is exactly
 * what the CMS's editor can produce. Anything else is unwrapped — its tags are
 * dropped and its text kept — rather than deleted, so an unexpected element
 * costs formatting rather than content.
 */

/** Tags kept, with their attributes. An empty list means "no attributes". */
const ALLOWED: Record<string, string[]> = {
  p: [],
  br: [],
  strong: [],
  b: [],
  em: [],
  i: [],
  u: [],
  s: [],
  code: [],
  pre: [],
  h1: [],
  h2: [],
  h3: [],
  h4: [],
  h5: [],
  h6: [],
  ul: [],
  ol: [],
  li: [],
  blockquote: [],
  hr: [],
  a: ['href', 'target', 'rel'],
  img: ['src', 'alt', 'width', 'height'],
}

/** Tags that never have a closing partner. */
const VOID = new Set(['br', 'hr', 'img'])

/**
 * Elements whose *content* is discarded along with them.
 *
 * Unwrapping a `<script>` would paste its source into the page as visible text,
 * which is not dangerous but is worse than dropping it. Same for style rules.
 */
const STRIP_WITH_CONTENT = ['script', 'style', 'iframe', 'object', 'embed', 'template']

const escapeText = (text: string): string =>
  text.replace(/</g, '&lt;').replace(/>/g, '&gt;')

const escapeAttr = (value: string): string =>
  value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

/**
 * A URL an href or src may hold.
 *
 * Same rule the CMS applies to the link fields it does validate: a path on this
 * site, or an absolute http(s) address. Everything else — `javascript:`,
 * `data:`, `vbscript:`, and the whitespace-and-entity tricks used to disguise
 * them — fails to match and the attribute is dropped, leaving the element
 * rendered but inert.
 */
function safeUrl(value: string): string | null {
  // Control characters and whitespace inside a scheme are how `java\nscript:`
  // gets past a naive check; they are meaningless in a real URL either way.
  const cleaned = value.replace(/[\u0000-\u0020\u00a0\u2000-\u200b\ufeff]/g, '')

  if (cleaned.startsWith('/') || cleaned.startsWith('#')) return cleaned
  if (/^https?:\/\//i.test(cleaned)) return cleaned
  if (/^mailto:[^\s@]+@[^\s@]+$/i.test(cleaned)) return cleaned

  return null
}

/** `href="x" target=y` → the pairs, quoted or not. */
function parseAttributes(source: string): Map<string, string> {
  const found = new Map<string, string>()
  const pattern = /([a-zA-Z_:][-a-zA-Z0-9_:.]*)\s*(?:=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'>]+)))?/g

  for (const match of source.matchAll(pattern)) {
    const name = match[1]?.toLowerCase()
    if (!name) continue
    found.set(name, match[2] ?? match[3] ?? match[4] ?? '')
  }

  return found
}

/** The attributes this tag is allowed to keep, rebuilt and re-escaped. */
function renderAttributes(tag: string, source: string): string {
  const allowed = ALLOWED[tag]
  if (!allowed || allowed.length === 0) return ''

  const parsed = parseAttributes(source)
  const out: string[] = []

  for (const name of allowed) {
    const raw = parsed.get(name)
    if (raw === undefined || raw === '') continue

    if (name === 'href' || name === 'src') {
      const url = safeUrl(raw)
      if (!url) continue
      out.push(`${name}="${escapeAttr(url)}"`)
      continue
    }

    if (name === 'width' || name === 'height') {
      // Numbers only. An attribute like width="100px" is invalid HTML anyway,
      // and this is the cheapest way to be sure nothing else rides along.
      if (!/^\d+$/.test(raw)) continue
      out.push(`${name}="${raw}"`)
      continue
    }

    if (name === 'target') {
      if (raw !== '_blank') continue
      out.push('target="_blank"')
      continue
    }

    out.push(`${name}="${escapeAttr(raw)}"`)
  }

  /*
    A new-tab link gets its own rel, always.

    `target="_blank"` without `noopener` hands the opened page a reference to
    this one through `window.opener`. Modern browsers imply it, but the site
    also runs behind older ones, and an editor's `rel` — if they set one at all
    — is not something to depend on for this.
  */
  if (tag === 'a' && out.some((attribute) => attribute === 'target="_blank"')) {
    const withoutRel = out.filter((attribute) => !attribute.startsWith('rel='))
    return withoutRel.length > 0
      ? ` ${withoutRel.join(' ')} rel="noopener noreferrer"`
      : ' rel="noopener noreferrer"'
  }

  return out.length > 0 ? ` ${out.join(' ')}` : ''
}

/**
 * Sanitised HTML, ready for `dangerouslySetInnerHTML`.
 *
 * Returns '' for anything falsy, so a caller can test the result rather than
 * testing the input and then testing the result.
 */
export function sanitizeHtml(html: string | undefined | null): string {
  if (!html) return ''

  let working = html

  // Comments first: `<!-- <script> -->` would otherwise leave a stray token,
  // and conditional comments can carry markup of their own.
  working = working.replace(/<!--[\s\S]*?-->/g, '')

  for (const tag of STRIP_WITH_CONTENT) {
    working = working.replace(
      new RegExp(`<${tag}\\b[\\s\\S]*?(?:</${tag}\\s*>|$)`, 'gi'),
      '',
    )
  }

  const out: string[] = []
  /** Open tags we emitted, so a stray `</p>` cannot close something we did not. */
  const open: string[] = []

  // Tokenised rather than replaced: `index` walks the string so the text
  // between tags is handled explicitly instead of being whatever is left over.
  const tagPattern = /<\/?([a-zA-Z][a-zA-Z0-9]*)((?:[^>"']|"[^"]*"|'[^']*')*)>/g
  let index = 0
  let match: RegExpExecArray | null

  while ((match = tagPattern.exec(working)) !== null) {
    if (match.index > index) out.push(escapeText(working.slice(index, match.index)))
    index = match.index + match[0].length

    const tag = match[1]!.toLowerCase()
    const closing = match[0].startsWith('</')

    // Not on the list: drop the tag, keep whatever it wrapped.
    if (!(tag in ALLOWED)) continue

    if (VOID.has(tag)) {
      if (!closing) out.push(`<${tag}${renderAttributes(tag, match[2] ?? '')}>`)
      continue
    }

    if (closing) {
      // Only closes a tag we actually opened, and closes anything left open
      // inside it on the way — otherwise malformed input could leave the page's
      // own markup wrapped in an element the editor opened and never closed.
      const at = open.lastIndexOf(tag)
      if (at === -1) continue
      for (let i = open.length - 1; i >= at; i -= 1) out.push(`</${open[i]}>`)
      open.length = at
      continue
    }

    open.push(tag)
    out.push(`<${tag}${renderAttributes(tag, match[2] ?? '')}>`)
  }

  if (index < working.length) out.push(escapeText(working.slice(index)))

  // Anything the editor left open, closed here rather than by the browser
  // guessing — a guess that can pull the rest of the page inside it.
  for (let i = open.length - 1; i >= 0; i -= 1) out.push(`</${open[i]}>`)

  return out.join('')
}

/**
 * True when there is something to render.
 *
 * A TipTap document that has been typed into and cleared comes back as
 * `<p></p>`, which is not empty as a string but is empty as content — and a
 * section that renders for it is a blank strip on a live page.
 */
export function hasContent(html: string | undefined | null): boolean {
  if (!html) return false
  return sanitizeHtml(html).replace(/<[^>]*>/g, '').replace(/&nbsp;|\s/g, '').length > 0
}
