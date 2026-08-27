-- Every course the website renders carries an icon: it is drawn in the courses
-- mega menu, on each carousel card, in the "more courses like this" grid and in
-- the breadcrumb eyebrow of the course's own page.
--
-- The CMS had nowhere to put it. Categories have had an `icon` column since the
-- first migration, but a course inherited nothing from its category, so a
-- course created in the CMS reached the site with no icon at all while the
-- fifty-odd courses defined in the website's own data files each had one. That
-- is the difference between "managed in the CMS" and "managed in the CMS except
-- for the bit you can see", so the column exists here now.
--
-- A name, not a file: the website draws from a fixed set of inline SVGs
-- (components/ui/Icon.tsx), which is what keeps them one colour, one weight and
-- zero extra requests. An unrecognised name falls back to the course's category
-- icon and then to a generic glyph, so a typo degrades rather than breaks.
ALTER TABLE courses
  ADD COLUMN icon VARCHAR(40) NULL AFTER segment;
