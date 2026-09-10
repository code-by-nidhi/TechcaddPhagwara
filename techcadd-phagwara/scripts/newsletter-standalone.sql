-- The `newsletter_subscribers` table, standalone.
--
-- This is the table `lib/newsletter.ts` writes to. It sits alongside
-- `enquiries-standalone.sql` and follows the same conventions — CHAR(36) id,
-- DATETIME(3) timestamps, utf8mb4 — so the two can live in one database and be
-- read by the same tooling.
--
-- Why it is defined here rather than taken from the CMS
-- ----------------------------------------------------
-- The enquiries table is a subset of the CMS's own schema, which is why that
-- file is careful to keep column names identical. This one has no CMS
-- counterpart: the CMS has no newsletter module — no table, no API, no screen.
-- So there is nothing to stay in step with, and the shape below is the site's
-- own. If a newsletter module is added to the CMS later, this table is the
-- thing to reconcile against it.
--
-- Idempotent: safe to re-run.
--
--   mysql -u root -p techcadd < scripts/newsletter-standalone.sql

CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id           CHAR(36)     NOT NULL PRIMARY KEY,
  -- 254 is the real maximum length of an address, and the same cap
  -- `app/api/newsletter/route.ts` truncates to before it gets here.
  email        VARCHAR(254) NOT NULL,
  -- Which form on which site. One value today ('footer'), but a second
  -- signup point should not need a migration to be told apart.
  source       VARCHAR(64)  NOT NULL DEFAULT 'footer',
  source_url   VARCHAR(500) NULL,
  -- 45 characters holds an IPv6 address in full.
  ip           VARCHAR(45)  NULL,
  user_agent   VARCHAR(255) NULL,
  -- 'subscribed' is the only value the website writes. The rest exist so an
  -- operator can unsubscribe someone without deleting the row, which is what
  -- you need to honour a request not to be contacted again.
  status       ENUM('subscribed','unsubscribed','bounced')
               NOT NULL DEFAULT 'subscribed',
  created_at   DATETIME(3)  NOT NULL,
  updated_at   DATETIME(3)  NOT NULL,
  -- The same address twice is one subscriber, not two. This is what lets the
  -- insert use ON DUPLICATE KEY and treat a re-submission as a no-op rather
  -- than erroring at a visitor who simply typed it in again.
  UNIQUE KEY uq_newsletter_email (email),
  KEY idx_newsletter_status  (status),
  KEY idx_newsletter_created (created_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
