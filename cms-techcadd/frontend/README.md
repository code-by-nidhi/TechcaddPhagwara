# Techcadd Phagwara CMS

Admin for the Techcadd Phagwara website — courses, categories, pages, blogs,
events, testimonials, gallery, FAQs, comments, enquiries, media, SEO and
settings.

It talks to the Express + MySQL API in `../backend`, which publishes to the
Next.js website in `../../techcadd-phagwara`. See `../../INTEGRATION.md` for how
the three fit together and what each module reaches on the site.

This codebase is shared with the other branch installs, so the branch is named
in one place — `BRANCH_NAME` in `src/config/brand.ts` — and read from there by
the sidebar, the sign-in page and the browser tab.

---

## Quick start

The API has to be running first; the CMS is not usable without it.

```bash
cd ../backend && npm run dev     # http://localhost:4000
cd ../frontend && npm run dev    # http://localhost:5173
```

Then sign in with the account `npm run db:seed` created in the backend:

| Field | Value |
| --- | --- |
| Username | `techcadd-phg` |
| Password | `Techcadd@2026` |

Change it at Settings → Security after the first sign-in. To change the username
as well, run `npm run db:set-admin` in the backend.

Viewing Enquiries asks for a second password — `ENQUIRIES_LOCK_PASSWORD` in the
backend's `.env`. That gate is deliberate: enquiries are lead PII, and a CMS
session alone is not enough to read them.

`VITE_API_URL` and `VITE_SITE_URL` in `.env` point at the API and the public
site. The second one is what the preview pane frames and what the "view on site"
links are built from, so it has to be right or those links go nowhere.

| Command | What it does |
| --- | --- |
| `npm run dev` | Vite dev server with HMR |
| `npm run build` | Typechecks (`tsc -b`) then builds for production |
| `npm run preview` | Serves the production build locally |
| `npm run lint` | ESLint over the whole project |
| `npm run check` | The course form's defaults, and the preview protocol against the website's half |

`npm run build`, `npm run lint` and `npm run check` must all pass — treat any of
them failing as a broken build.

---

## Stack

| Concern | Choice |
| --- | --- |
| Build | Vite 8 |
| Language | TypeScript 6 (strict) |
| UI | React 19 |
| Routing | react-router-dom 7, **data router** (`createBrowserRouter`) |
| Styling | Tailwind CSS v4 — CSS-first `@theme`, no `tailwind.config.js` |
| Server state | TanStack Query |
| Forms | react-hook-form + zod |
| Overlays | Radix primitives (dialog, menu, tooltip, popover, tabs, accordion) |
| Editor | TipTap 3 |
| Drag & drop | dnd-kit |
| Icons | lucide-react |

The router **must** stay a data router: the unsaved-changes guard on every form uses
`useBlocker`, which does not exist on `<BrowserRouter>`.

---

## Project structure

```
src/
  api/              The swap point — everything network-shaped
    http/           The real client — every resource goes through this
    mock/           The pre-API localStorage stand-in. Unused; see Known gaps.
    resources/      One file per collection + auth and settings
    index.ts        Public barrel
  components/
    common/         Button, Card, Badge, Modal, Drawer, DropdownMenu, …
    form/           Input, Select, DatePicker, RichTextEditor, ImageField, …
    data/           DataTable, Pagination, FilterBar, Tabs, SortableList
    feedback/       Toast, Skeleton, Alert, ErrorBoundary, Spinner
    layout/         AdminLayout, Sidebar, Header, PageHeader, FormFooter
    media/          MediaPicker
  features/         One folder per module: pages, schema, hooks, columns
  hooks/            useListParams, useUrlState, useConfirm, useToast, useAuth, …
  lib/              cn, format, slugify, csv, id
  providers/        Query, Auth, Toast, Confirm, sidebar + toast contexts
  routes/           router, ProtectedRoute, lazy page registry
  types/            Domain entities and shared UI types
```

Contexts live in their own `*.ts` files (`authContext`, `toastContext`, …) because a module
exporting both components and non-components breaks fast refresh.

---

## Data layer

`src/api/` is the only place that knows about persistence. Every collection is exposed
through the same five-method contract:

```ts
list(params: ListParams): Promise<ListResult<T>>
get(id: string): Promise<T>
create(input: TCreate): Promise<T>
update(id: string, input: TUpdate): Promise<T>
remove(ids: string[]): Promise<void>
```

`createMockResource` implements it once, so pagination, search, sorting, filtering and
range filters (`createdAtFrom` / `createdAtTo`) behave identically in all thirteen modules.

**Replacing the mock with a real API** means re-implementing `src/api/resources/*` against
HTTP. Nothing outside `src/api/` needs to change, because the contract stays the same.

Notes:
- **The database starts completely empty.** No sample courses, no fake enquiries. This is
  deliberate — see [Conventions](#conventions).
- Errors normalise to `ApiError { status, message, fieldErrors? }` so forms can map
  server-side validation back onto individual inputs.
- `configureMockBehaviour({ delayMs, failureRate })` injects latency and failures so loading
  and error states are testable rather than theoretical.
- Uploads are stored as data URLs, so media is capped at 512 KB. A real media backend
  removes that limit.

### Authentication

Mock auth lives in `src/api/resources/auth.ts`. Passwords are compared using a trivial
digest — **this is not security**. It exists so the mock can tell one password from another.
Real authentication must verify a properly salted hash on the server.

Roles are `super-admin`, `admin` and `editor`. `useCan(permission)` gates UI, but hiding a
button is not access control; the server has to enforce it too.

---

## Conventions

1. **Comments explain _why_, not _what_.** Most functions need none.
2. **Named exports for components**; `export default` only for pages.
3. **Never fabricate data.** If a value isn't known, make the field optional and render an
   honest fallback ("No activity recorded yet") rather than a plausible-looking number. A
   brand-new install shows empty states, not lorem ipsum.
4. **Guard empty and degenerate states.** `Math.max(...[])` is `-Infinity`; `x / 0` is `NaN`.
   Both have bitten this codebase.
5. **No dead UI.** A control that does nothing is worse than no control. Wire it or remove it.
6. **Accessibility is not optional** — decorative icons get `aria-hidden`, icon-only buttons
   get `aria-label`, tables get an `sr-only` caption and `scope`, forms wire
   `aria-describedby` / `aria-invalid`.
7. **Tailwind only**, using design tokens (`bg-primary-500`, never `bg-[#5f6fff]`).
   Inline `style` is for genuinely dynamic values only (bar heights, drag transforms).
8. **Don't call `setState` inside an effect** to sync from props or server state — adjust
   during render instead. The lint rules enforce this.
9. `src/data/navigation.ts` is the single source of truth for the sidebar and header titles.

---

## Module pattern

Every module follows the same shape, established by Courses:

```
features/<module>/
  <module>Schema.ts      zod schema — single source of truth for the form
  use<Module>.ts         query hooks, via createResourceHooks
  <Module>ListPage.tsx   PageHeader + FilterBar + DataTable + Pagination
  <Module>FormPage.tsx   two-column form + FormFooter (sticky save + guard)
```

List state (page, search, sort, filters) lives in the query string through `useListParams`,
so `/courses?status=draft&page=2` is shareable and survives back/forward.

---

## Development notes

- `/dev/primitives` renders every shared primitive in isolation. It is **development only**
  and excluded from production builds.
- The dev gallery's `lazy()` call sits inside the `import.meta.env.DEV` branch on purpose. A
  top-level dynamic import stays reachable and Vite emits the chunk anyway — it shipped
  ~594 kB of editor code to production before that was fixed.

---

## Known gaps

- No automated test suite for the admin. `npm run check` covers the two things
  that break silently — the course form's defaults and the preview protocol —
  and the API in `../backend` has 69 tests of its own; everything else is
  typecheck, lint and browser runs against a real build.
- The `api/mock` layer is left in place from before the API existed. Nothing
  routes through it now — `api/http` is what the resources use — but it is
  still exported, so a stray import would compile.
- Password reset needs SMTP configured in the backend's `.env`. Without it the
  API logs the mail instead of sending it, which is enough to test the flow and
  not enough for a real reset.
- No dark mode. Tokens are structured so a second palette can be added without touching
  components.
