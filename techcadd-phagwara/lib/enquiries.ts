import { randomUUID } from 'node:crypto'
import type { RowDataPacket } from 'mysql2'
import { getPool } from './db'

/**
 * Recording a website enquiry in the CMS's `enquiries` table.
 *
 * This mirrors the CMS's own public-enquiry endpoint — the same columns, the
 * same duplicate thresholds, the same `status: 'new'` starting point — so a
 * lead filed here is indistinguishable from one filed through the API and
 * shows up in the CMS Enquiries screen exactly the same way.
 *
 * Deliberately narrow. `status`, `assignee_id` and `follow_up_date` belong to
 * the staff workflow; a public form must not be able to file a lead as
 * already-converted or assign work to a counsellor. They are left at their
 * defaults here for the same reason the CMS's schema refuses them.
 */

export interface EnquiryRecord {
  name: string
  phone: string
  /** '' when the form does not collect one — the Book Demo modal does not. */
  email: string
  course: string
  message: string
}

export interface EnquiryContext {
  ip: string
  userAgent: string
  sourceUrl: string
  /** 'book-demo' from the navbar modal, 'contact' from the Contact section. */
  formType: string
}

export type EnquiryOutcome =
  | { kind: 'recorded' }
  /** Already have this one — reassure the visitor rather than error at them. */
  | { kind: 'duplicate' }
  | { kind: 'unconfigured' }
  | { kind: 'failed'; detail: string }

/* The CMS's thresholds, kept in step with its public router. */
const MAX_PER_PHONE_PER_DAY = 3
const MAX_PER_IP_PER_HOUR = 8

/**
 * The columns a public submission may set.
 *
 * `branch_id` and `branch_name` are omitted: the schema defaults them, and the
 * website does not know which branch a lead belongs to. Everything else the
 * staff workflow owns is left to its default too.
 */
const INSERT = `
  INSERT INTO enquiries
    (id, student_name, phone, email, course_id, course_name,
     source, form_type, source_url, ip, user_agent, message,
     status, created_at, updated_at)
  VALUES (?, ?, ?, ?, NULL, ?, 'website', ?, ?, ?, ?, ?, 'new', NOW(3), NOW(3))
`

/**
 * True when this number, or this address, has already submitted recently.
 *
 * Runs against the same table the insert writes to, which is the only place it
 * can run correctly — a per-process counter in the web app would reset on
 * every deploy and would not see submissions made through the CMS's own API.
 */
async function isDuplicate(phone: string, ip: string): Promise<boolean> {
  const pool = getPool()
  if (!pool) return false

  const [byPhone] = await pool.query<RowDataPacket[]>(
    `SELECT COUNT(*) AS n FROM enquiries
      WHERE phone = ? AND created_at > NOW() - INTERVAL 1 DAY`,
    [phone],
  )
  if (Number(byPhone[0]?.n ?? 0) >= MAX_PER_PHONE_PER_DAY) return true

  if (!ip || ip === 'unknown') return false

  const [byIp] = await pool.query<RowDataPacket[]>(
    `SELECT COUNT(*) AS n FROM enquiries
      WHERE ip = ? AND created_at > NOW() - INTERVAL 1 HOUR`,
    [ip],
  )
  return Number(byIp[0]?.n ?? 0) >= MAX_PER_IP_PER_HOUR
}

/** Files the enquiry. Never throws — the caller decides what the visitor sees. */
export async function recordEnquiry(
  enquiry: EnquiryRecord,
  context: EnquiryContext,
): Promise<EnquiryOutcome> {
  const pool = getPool()
  if (!pool) return { kind: 'unconfigured' }

  try {
    if (await isDuplicate(enquiry.phone, context.ip)) return { kind: 'duplicate' }

    await pool.execute(INSERT, [
      randomUUID(),
      enquiry.name,
      enquiry.phone,
      enquiry.email || null,
      enquiry.course,
      context.formType || null,
      context.sourceUrl || null,
      context.ip && context.ip !== 'unknown' ? context.ip : null,
      context.userAgent || null,
      enquiry.message || null,
    ])

    return { kind: 'recorded' }
  } catch (error) {
    return { kind: 'failed', detail: error instanceof Error ? error.message : String(error) }
  }
}
