-- The `enquiries` table, standalone.
--
-- This is the table `lib/enquiries.ts` writes to when the website runs WITHOUT
-- the CMS. It is a deliberate subset of the CMS's own `008_enquiries.sql` +
-- `011_enquiry_origin.sql`: same column names and types, so a site configured
-- against the CMS database and one configured against this table run the exact
-- same INSERT and the exact same duplicate check.
--
-- What is dropped, and why:
--
--   * The foreign keys to `courses`, `branches` and `users`. Those tables only
--     exist in the CMS schema. `course_id` is kept as a plain nullable column
--     because the INSERT still binds NULL into it, and keeping the column means
--     these rows can be copied into a CMS database later without a rewrite.
--   * `branch_id` / `branch_name`, `assignee_id`, `follow_up_date` and the
--     `enquiry_notes` timeline. All of them belong to the staff workflow the
--     CMS provides; nothing in this website reads or writes them.
--
-- One widening: `email` is VARCHAR(254) rather than the CMS's VARCHAR(190).
-- 254 is the real maximum length of an address and is already the cap
-- `app/api/contact/route.ts` truncates to, so the two now agree — under
-- STRICT_TRANS_TABLES the narrower column would reject a long-but-valid
-- address the route had accepted.
--
-- Idempotent: safe to re-run.
--
--   mysql -u root -p techcadd < scripts/enquiries-standalone.sql

CREATE TABLE IF NOT EXISTS enquiries (
  id             CHAR(36)     NOT NULL PRIMARY KEY,
  student_name   VARCHAR(120) NOT NULL,
  phone          VARCHAR(30)  NOT NULL,
  email          VARCHAR(254) NULL,
  -- Always NULL from the website: it knows a course by slug, not by CMS id.
  course_id      CHAR(36)     NULL,
  -- The label the student actually chose, snapshotted. Renaming a course later
  -- must not rewrite what an old enquiry says they asked about.
  course_name    VARCHAR(200) NOT NULL DEFAULT '',
  -- How staff classify the lead. The website only ever files 'website'.
  source         ENUM('website','walk-in','phone','referral','social')
                 NOT NULL DEFAULT 'website',
  -- Which form: 'book-demo' from the navbar modal, 'contact' from the
  -- Contact section. This is what tells a two-field demo request apart from a
  -- considered enquiry.
  form_type      VARCHAR(32)  NULL,
  source_url     VARCHAR(500) NULL,
  -- 45 characters holds an IPv6 address in full.
  ip             VARCHAR(45)  NULL,
  user_agent     VARCHAR(255) NULL,
  message        TEXT         NULL,
  status         ENUM('new','contacted','follow-up','converted','closed')
                 NOT NULL DEFAULT 'new',
  created_at     DATETIME(3)  NOT NULL,
  updated_at     DATETIME(3)  NOT NULL,
  KEY idx_enquiries_status  (status),
  KEY idx_enquiries_created (created_at),
  -- The two indexes the duplicate check in lib/enquiries.ts actually filters
  -- on: same phone within a day, same address within an hour. Both are
  -- composite because both queries constrain the column AND created_at.
  KEY idx_enquiries_phone_created (phone, created_at),
  KEY idx_enquiries_ip_created    (ip, created_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
