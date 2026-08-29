# The CMS and the website, connected

Two projects sit side by side in this repository:

```
TechcaddPhagwara/
  techcadd-phagwara/     the public website — Next.js 15, App Router
  cms-techcadd/
    backend/             the API — Express 5 + MySQL
    frontend/            the admin — React + Vite
```

They were built separately. This document is what now joins them, why each
join is shaped the way it is, and what is still hand-written in code.

---

## Running all three

Three terminals, in this order. The website and the CMS both fall back
gracefully if the API is not up, so the order is a convenience, not a
requirement.

```bash
# 1. the API
cd cms-techcadd/backend
npm run dev                       # http://localhost:4000

# 2. the admin
cd cms-techcadd/frontend
npm run dev                       # http://localhost:5173

# 3. the website
cd techcadd-phagwara
npm run dev                       # http://localhost:3000
```

Sign in at <http://localhost:5173> with the account created by `db:seed`:

| Username       | Password        |
| -------------- | --------------- |
| `techcadd-phg` | `Techcadd@2026` |

Change the password at Settings → Security after the first sign-in. To change
the username too, run `npm run db:set-admin` in the backend — the CMS's user
form cannot, by design, and that script ends the account's open sessions along
with it.

The username names the branch on purpose. The codebase is shared with the
Jalandhar and Ludhiana installs, and all three used to seed a bare `techcadd`,
so three institutes' credentials were indistinguishable from one another.

Viewing Enquiries also asks for a second password, `ENQUIRIES_LOCK_PASSWORD` in the API's `.env` —
that gate is deliberate: enquiries are lead PII and a CMS session alone is not
enough to read them.

### First-time database setup

```bash
cd cms-techcadd/backend
npm run db:migrate                # creates techcadd_cms_phg, applies 47 migrations
npm run db:seed                   # the first administrator
npm run db:import-phagwara        # the website's own content, into the CMS
```

`db:seed` leaves an existing account alone rather than resetting a password
somebody has already changed. Use `db:set-admin` to change one that exists.

`db:import-phagwara` is idempotent and never overwrites an edit — run it again
any time; it only fills in what is missing. `DRY_RUN=1` reports without writing.

---

## Which database

`techcadd_cms_phg`, its own, created by the migration runner.

The API was previously pointed at `techcadd_cms_jal` — the **Jalandhar** branch's
database, holding Jalandhar's 55 courses, phone number and address. Running the
Phagwara site against it would have rendered another branch's catalogue, and
edits from either branch would have overwritten the other's.

The MySQL server also holds `techcadd_cms`, `techcaddldh` and `techcadd_site`
from other branches. None of them were touched.

---

## What the CMS now controls

Everything below reaches the site with no deploy. The CMS calls
`/api/revalidate` after every save, so an edit appears within seconds.

| In the CMS       | On the website                                                                                |
| ---------------- | --------------------------------------------------------------------------------------------- |
| **Courses**      | Every course and programme page, the Courses mega menu, the Internship and After 12th dropdowns, the homepage carousel, the category ring, the enquiry form's course list, the sitemap |
| **Categories**   | The headings courses are filed under, in the menus and above each course heading; their order is the menu column order |
| **FAQs**         | The homepage FAQ accordion                                                                    |
| **Testimonials** | The homepage reviews carousel                                                                 |
| **Gallery**      | The campus gallery on the homepage — real photos replace the generated gradient tiles         |
| **Settings**     | Site name, phone, email, address, WhatsApp, social links, the placement counters, the map embed, and the search-engine markup |
| **Pages**        | A page of its own at `/<slug>`, optionally linked from the header or footer menu               |
| **Blog**         | `/blogs` and `/blogs/<slug>`, with a moderated comment thread                                  |
| **Events**       | `/events` and `/events/<slug>`, split into upcoming and past                                   |
| **Comments**     | Appear under a blog post once approved — nothing a visitor writes goes live unmoderated        |
| **Page layout**  | Reorders a course page's sections, switches them off, and drops a text, image, video or button block before or after any of them |
| **SEO**          | Per-page meta titles, descriptions, canonical URLs and `noindex`                               |
| **Redirects**    | Applied to every request by `middleware.ts`; a new rule takes effect within a minute            |
| **Enquiries**    | Received from the contact form and the Book a Demo popup                                       |

### What is still in code

These are hand-written copy with a layout built around them, and the CMS has no
module that means any of them. They live in `techcadd-phagwara/data/site.ts`:

- The hero, About, How it works, Learning modes, Benefits, AI Labs, Journey,
  Certifications, Projects, Faculty and Achievements sections
- The footer's link columns and branch list
- The eight cards in the homepage category ring and the ten in the carousel —
  the *choice* of which courses to lead with is editorial; their titles,
  descriptions and icons come from the CMS

The CMS says so rather than leaving an editor to find out: each form shows where
its content appears, from `cms-techcadd/frontend/src/config/siteMap.ts`, and the
modules that go nowhere on this site (Reviews, AI Knowledge) say that explicitly.

---

## How the two talk

### 1. The website reads the CMS — `lib/cms/`

| File           | What it does                                                            |
| -------------- | ----------------------------------------------------------------------- |
| `client.ts`    | The one place that knows the API's address, cache window, tags, timeout  |
| `types.ts`     | What `/api/public` sends back                                           |
| `content.ts`   | Resolvers that answer in *the site's own shapes*                        |
| `segments.ts`  | CMS segment → this site's URL                                           |
| `course-view.ts` | A CMS course → the landing template's optional sections                |
| `course-sections.ts` | The section vocabulary the layout editor arranges — this file is the authority |
| `format.ts`    | Dates, fixed to `en-IN`/IST so server and browser agree                 |

**Every read falls back to the bundled `data/*.ts` files.** If the API is down,
restarting or simply not configured, the site renders exactly what it rendered
before any of this existed — not an error page, not an empty section. That rule
is why `CMS_API_URL` being unset is not a failure: the site runs standalone.

Where the CMS *does* answer, it answers wholesale. If it knows about courses, its
list is the catalogue — otherwise deleting a course would leave it on the site
forever, resurrected from the bundled copy.

### 2. The CMS tells the website to refresh — `/api/revalidate`

The API fires this after every successful save, debounced so a multi-step save
arrives as one call. It is authenticated by `REVALIDATE_SECRET`, which must be
**identical** in both `.env` files. Unset, the endpoint refuses everything rather
than accepting it unauthenticated.

Without it the site still picks changes up when its own cache expires (an hour by
default). With it, an edit appears immediately — which matters more than it
sounds, because a save that does not show reads as a save that failed.

### 3. The CMS previews against the real site — `/preview/course`, `/preview/page`

The CMS frames these beside its editor and posts unsaved form state over
`postMessage`. The frame renders the **real templates** — the same components the
published pages use — so the preview cannot drift from the thing it is
previewing.

The two halves of the protocol are duplicated because the apps do not share a
module graph. `npm run check:protocol` in `cms-techcadd/frontend` compares them;
its path was pointing at a directory that does not exist in this layout, so it
had been reporting the protocol broken on every run.

The frame also reports back which fields in the draft this site's template has no
place for — the CMS's course form was written for a longer template — so an
editor filling in a comparison table is told it will not appear, instead of
saving and concluding the CMS is broken.

### 4. Enquiries go the other way — `/api/contact` → the CMS

The contact form and the Book a Demo popup post to this site's route handler,
which validates and forwards to the CMS's `/api/public/enquiries`. The visitor's
IP and user-agent are attached there, because that is the only place they are
knowable — and the CMS de-duplicates on IP and phone, so without them every lead
would arrive wearing this server's address.

`ENQUIRY_WEBHOOK_URL` still works and fires alongside, for deployments that also
forward to a CRM.

### 5. Comments go straight from the browser

The only thing the browser talks to the CMS about directly. That is the CMS's own
design — its `CORS_ORIGIN` lists this site for exactly this — and proxying them
would break the rate limiter, which keys on the submitter's address.

---

## Configuration

Both `.env` files carry notes; the load-bearing parts:

**`cms-techcadd/backend/.env`**

```ini
DB_NAME=techcadd_cms_phg
CORS_ORIGIN=http://localhost:5173,...,http://localhost:3000   # the site too, for comments
SITE_REVALIDATE_URL=http://localhost:3000/api/revalidate
REVALIDATE_SECRET=<must match the website>
```

**`techcadd-phagwara/.env.local`** (see `.env.example`)

```ini
CMS_API_URL=http://localhost:4000/api
REVALIDATE_SECRET=<must match the API>
NEXT_PUBLIC_CMS_ORIGIN=http://localhost:5173,http://localhost:5174,http://localhost:5175
```

In production, set `NEXT_PUBLIC_CMS_API_URL` as well when the API's public
address differs from the one the server uses — the comment thread is fetched
from the visitor's browser and needs an address it can reach.

---

## Checks

```bash
cd techcadd-phagwara
npm run check                                  # types, sanitiser, slug links
CMS_API_URL=http://localhost:4000/api npm run check   # and against the live CMS

cd cms-techcadd/frontend
npm run check                                  # course form defaults, preview protocol
```

- **`check:sanitizer`** — 17 cases against `lib/sanitize-html.ts`, the allowlist
  every piece of CMS rich text passes through before it reaches the DOM. Script
  tags, event handlers, `javascript:` hrefs, `data:` images and the
  control-character tricks used to disguise them.
- **`check:cms`** — the hand-picked course slugs in the carousel and the category
  ring still resolve. Both components drop a missing card at runtime; this is how
  somebody finds out before a visitor does.

---

## Gaps that were found and closed

- **The CMS pointed at Jalandhar's database.** Now `techcadd_cms_phg`, seeded
  from this site's own catalogue.
- **46 courses, 7 FAQs, 6 testimonials and every contact detail were only in
  TypeScript.** Imported, and the site now prefers the CMS's copy.
- **A course had no icon field.** The site draws one for every course in four
  places; the CMS had nowhere to store it, so a course created in the CMS
  reached the site with no icon at all. Added — migration `046_course_icon`.
- **`/api/revalidate` did not exist.** The API had been calling it and logging a
  404 warning on every save.
- **`/preview/*` did not exist.** The CMS's preview pane had been framing a 404
  since it shipped.
- **The CMS's "view on site" links were wrong for this site.** They built
  `/<segment>/<slug>`; this site serves courses from the root and files
  after-12th programmes under `/after-12th`, so every link 404'd.
- **Redirects were stored and never applied.** `middleware.ts` applies them now.
- **The enquiry form reached nobody by default.** It now files into the CMS.
- **The Pages module published to no address.** `/<slug>` serves them.
- **The Blog, Events and Comments modules had nowhere to publish.** Built.
- **The importer pre-filled SEO overrides**, which would have silently frozen
  every page title at its imported value. Left blank — the CMS already renders
  the live title as the fallback.
- **The enquiry form offered six courses** from a homepage grid, not the
  catalogue. It offers all of them now.
- **The organisation's structured data was hard-coded** — address, phone and all
  — so a corrected phone number changed the visible page and not the markup
  Google reads.
- **`check-preview-protocol.ts` read a path that does not exist here**, so the
  one check guarding the preview contract failed on every run.
- **`db:import-courses` was Jalandhar's importer** and crashes in this checkout.
  Renamed `db:import-courses:jalandhar` and documented; Phagwara's is
  `db:import-phagwara`.
- **The newsletter form promised a confirmation email** that nothing sends. It
  now says only what is true — see below.
- **The CMS called itself Jalandhar.** The sidebar, the sign-in page, the
  browser tab, the seeded username and the password-reset email all named the
  branch this checkout was forked from. Now Phagwara — from `BRANCH_NAME` in the
  admin and `CMS_NAME` in the API, one constant each rather than words typed
  into a dozen components.
- **The example copy in the course, event and AI-knowledge forms named
  Jalandhar**, including the event form's *default* city — which is filled in
  for real, not just shown as a hint.
- **The slug fields showed URLs that do not exist here.**
  `techcadd.com/blog/` where the site serves `/blogs/`, `techcadd.com/courses/`
  where courses sit at the root, and `/gallery/` and `/courses/category/` for
  two things that have no page at all. They read from the same map the
  "view on site" links do now, and the two that are not addresses say so
  instead of inventing one.
- **The Page layout editor arranged sections this site does not have.** It
  offered fifteen — a comparison table, a pricing ladder, a "why techcadd"
  panel — inherited from the branch template, so switching one off did nothing.
  It now lists the seven this site draws, and reordering, hiding and block
  anchoring all take effect.
- **Three copies of the section vocabulary** (the admin's `PAGE_SECTIONS` and
  `ORDERABLE_SECTIONS`, the API's `HIDEABLE_SECTIONS`) had already drifted
  apart. The admin's two are one list now, matched to the website's; the API's
  stays permissive on purpose, so a branch whose rows name a different section
  can still save.
- **`npm run lint` failed in the admin** on two pre-existing errors, in a
  project whose README says a failing lint is a broken build. Fixed, so the
  statement is true.
- **The admin's README described a build with no backend**, running against a
  `localStorage` mock. Every resource has been on the real API for some time.

## Known limitation

**The footer newsletter has no CMS destination.** The CMS has no newsletter
module — no table, no API, no screen — so the only place an address can go is
`NEWSLETTER_WEBHOOK_URL` (Mailchimp, Brevo, Buttondown, Zapier). Until one is
set, the form records nothing: it now tells the visitor so and points them at the
contact form, and logs a warning naming the address that was lost. Building a
newsletter module in the CMS would be a new feature rather than an integration,
so it was left for a decision rather than assumed.
