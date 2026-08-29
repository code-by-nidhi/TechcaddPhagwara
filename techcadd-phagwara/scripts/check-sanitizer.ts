/**
 * Does the rich-text sanitiser actually drop what it says it drops?
 *
 * `sanitizeHtml` is the only thing between a CMS editor's HTML and
 * `dangerouslySetInnerHTML` on a public page, so "it looks right" is not a
 * standard it can be held to. Each case below is a way markup has historically
 * got past an allowlist.
 *
 * Run: npm run check:sanitizer
 */
import { hasContent, sanitizeHtml } from '../lib/sanitize-html'

interface Case {
  what: string
  input: string
  /** Substrings that must NOT survive. */
  forbidden?: string[]
  /** Substrings that must survive. */
  required?: string[]
}

/** A raw control character, as an attacker would embed one to split a scheme. */
const NUL = String.fromCharCode(1)

const CASES: Case[] = [
  {
    what: 'script element and its source',
    input: '<p>Hi</p><script>alert(1)</script>',
    forbidden: ['<script', 'alert(1)'],
    required: ['<p>Hi</p>'],
  },
  {
    what: 'event handler attribute',
    input: '<p onclick="alert(1)">Text</p>',
    forbidden: ['onclick', 'alert'],
    required: ['<p>Text</p>'],
  },
  {
    what: 'img onerror',
    input: '<img src="/x.png" onerror="alert(1)">',
    forbidden: ['onerror', 'alert'],
    required: ['src="/x.png"'],
  },
  {
    what: 'javascript: href',
    input: '<a href="javascript:alert(1)">click</a>',
    forbidden: ['javascript', 'alert'],
    required: ['click'],
  },
  {
    what: 'javascript: href split by a control character',
    input: `<a href="java${NUL}script:alert(1)">click</a>`,
    forbidden: ['javascript', 'script:', 'alert'],
  },
  {
    what: 'data: URI on an image',
    input: '<img src="data:text/html;base64,PHNjcmlwdD4=">',
    forbidden: ['data:', 'base64'],
  },
  {
    what: 'style element',
    input: '<style>body{display:none}</style><p>ok</p>',
    forbidden: ['<style', 'display:none'],
    required: ['<p>ok</p>'],
  },
  {
    what: 'iframe',
    input: '<iframe src="https://evil.example"></iframe><p>ok</p>',
    forbidden: ['<iframe', 'evil.example'],
    required: ['<p>ok</p>'],
  },
  {
    what: 'unknown tag is unwrapped, its text kept',
    input: '<marquee>Keep me</marquee>',
    forbidden: ['<marquee'],
    required: ['Keep me'],
  },
  {
    what: 'attribute value containing a closing bracket',
    input: '<a href="/ok" title="a > b"><b>x</b></a>',
    forbidden: ['title='],
    required: ['href="/ok"', '<b>x</b>'],
  },
  {
    what: 'stray closing tag cannot close the page',
    input: '</div><p>ok</p>',
    forbidden: ['</div>'],
    required: ['<p>ok</p>'],
  },
  {
    what: 'unclosed tag is closed for us',
    input: '<p>one<p>two',
    required: ['</p>'],
  },
  {
    what: 'target=_blank always gets rel=noopener',
    input: '<a href="https://x.example" target="_blank">x</a>',
    required: ['rel="noopener noreferrer"'],
  },
  {
    what: 'rel is not passed through from the editor',
    input: '<a href="https://x.example" target="_blank" rel="opener">x</a>',
    forbidden: ['rel="opener"'],
    required: ['rel="noopener noreferrer"'],
  },
  {
    what: 'ordinary formatting survives intact',
    input:
      '<h2>Title</h2><p><strong>Bold</strong> and <em>italic</em></p><ul><li>a</li></ul>',
    required: ['<h2>Title</h2>', '<strong>Bold</strong>', '<em>italic</em>', '<li>a</li>'],
  },
  {
    what: 'internal and mailto links survive',
    input: '<a href="/courses">c</a><a href="mailto:a@b.com">m</a>',
    required: ['href="/courses"', 'href="mailto:a@b.com"'],
  },
  {
    what: 'text that looks like markup is escaped, not executed',
    input: '<p>Use &lt;script&gt; carefully</p>',
    forbidden: ['<script'],
  },
]

let failed = 0

for (const testCase of CASES) {
  const output = sanitizeHtml(testCase.input)
  const problems: string[] = []

  for (const needle of testCase.forbidden ?? []) {
    if (output.toLowerCase().includes(needle.toLowerCase())) problems.push(`kept "${needle}"`)
  }
  for (const needle of testCase.required ?? []) {
    if (!output.includes(needle)) problems.push(`lost "${needle}"`)
  }

  if (problems.length > 0) {
    failed += 1
    console.log(`FAIL  ${testCase.what}`)
    console.log(`        in:  ${testCase.input}`)
    console.log(`        out: ${output}`)
    console.log(`        ${problems.join('; ')}`)
  }
}

/* An emptied editor sends <p></p>, which must not render as a blank section. */
for (const empty of ['', '<p></p>', '<p>&nbsp;</p>', '<p><br></p>']) {
  if (hasContent(empty)) {
    failed += 1
    console.log(`FAIL  hasContent(${JSON.stringify(empty)}) should be false`)
  }
}

if (!hasContent('<p>real</p>')) {
  failed += 1
  console.log('FAIL  hasContent() treats real text as empty')
}

console.log(
  failed === 0
    ? `PASS  ${CASES.length} sanitiser cases and the empty-document checks`
    : `\n${failed} check(s) failed`,
)

if (failed > 0) process.exitCode = 1
