import { randomUUID } from 'node:crypto'
import { getPool } from './db'

/**
 * Recording a newsletter signup in `newsletter_subscribers`.
 *
 * The sibling of `lib/enquiries.ts`, and deliberately the same shape: it never
 * throws, it reports what happened rather than deciding what the visitor sees,
 * and it returns `unconfigured` rather than failing when no database has been
 * set up. The route above it decides the message.
 *
 * Unlike enquiries there is no rate limit here. A repeat address is not abuse,
 * it is somebody who forgot they had already signed up — the unique key turns
 * that into a no-op, which is the correct outcome and needs no counting.
 */

export interface SubscriberRecord {
  email: string
}

export interface SubscriberContext {
  ip: string
  userAgent: string
  sourceUrl: string
  /** Which signup point — 'footer' is the only one today. */
  source: string
}

export type SubscribeOutcome =
  | { kind: 'recorded' }
  /** Already on the list. Reassure the visitor rather than error at them. */
  | { kind: 'duplicate' }
  | { kind: 'unconfigured' }
  | { kind: 'failed'; detail: string }

/*
  Re-subscribing touches `updated_at` and nothing else.

  `ON DUPLICATE KEY UPDATE` rather than `INSERT IGNORE`, because IGNORE also
  swallows genuine errors — a truncated value or a bad charset would look like
  a duplicate and be reported as success. This form only suppresses a clash on
  the one key we expect to clash on.

  `status` is deliberately not reset. Someone who unsubscribed and later hits
  the footer form again should not be silently re-subscribed by a stale form
  submission; that decision belongs to whoever handles the unsubscribe.
*/
const INSERT = `
  INSERT INTO newsletter_subscribers
    (id, email, source, source_url, ip, user_agent, status, created_at, updated_at)
  VALUES (?, ?, ?, ?, ?, ?, 'subscribed', NOW(3), NOW(3))
  ON DUPLICATE KEY UPDATE updated_at = NOW(3)
`

/** Files the signup. Never throws — the caller decides what the visitor sees. */
export async function recordSubscriber(
  subscriber: SubscriberRecord,
  context: SubscriberContext,
): Promise<SubscribeOutcome> {
  const pool = getPool()
  if (!pool) return { kind: 'unconfigured' }

  try {
    const [result] = await pool.execute(INSERT, [
      randomUUID(),
      subscriber.email,
      context.source || 'footer',
      context.sourceUrl || null,
      context.ip && context.ip !== 'unknown' ? context.ip : null,
      context.userAgent || null,
    ])

    /*
      MySQL reports 1 affected row for an insert and 2 for an update through
      `ON DUPLICATE KEY` — 0 when the update changed nothing. Anything other
      than 1 therefore means the address was already on the list.
    */
    const affected = (result as { affectedRows?: number }).affectedRows ?? 0

    return affected === 1 ? { kind: 'recorded' } : { kind: 'duplicate' }
  } catch (error) {
    return { kind: 'failed', detail: error instanceof Error ? error.message : String(error) }
  }
}
