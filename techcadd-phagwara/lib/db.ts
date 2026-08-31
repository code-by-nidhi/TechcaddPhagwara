import mysql from 'mysql2/promise'

/**
 * The site's MySQL connection.
 *
 * This is the *same database the CMS uses* — same host, same schema, same
 * `enquiries` table. The site writes a lead directly rather than posting it to
 * the CMS's HTTP API, so a visitor can book a demo without the Express API
 * having to be running. What the CMS owns is the schema: the table and its
 * columns are created by the CMS's migrations, and this file only ever writes
 * rows into them.
 *
 * Configuration is deliberately the same four variables the CMS reads
 * (`DB_HOST`, `DB_USER`, `DB_PASSWORD`, `DB_NAME`), so pointing the two at one
 * database is a copy-paste rather than a translation.
 *
 * Server-only. It is imported by a route handler, never by a component.
 */

const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } = process.env

/** Whether the site has been told where the database is. */
export const dbConfigured = Boolean(DB_HOST && DB_USER && DB_NAME)

/**
 * One pool per process, kept on `globalThis` in development.
 *
 * Next discards and re-evaluates module state on every hot reload; without
 * this, editing a route would leak a ten-connection pool each time and reach
 * MySQL's connection limit within a few saves.
 */
const globalForDb = globalThis as typeof globalThis & {
  __techcaddPool?: mysql.Pool
}

export function getPool(): mysql.Pool | null {
  if (!dbConfigured) return null

  globalForDb.__techcaddPool ??= mysql.createPool({
    host: DB_HOST,
    port: Number(DB_PORT ?? 3306),
    user: DB_USER,
    password: DB_PASSWORD ?? '',
    database: DB_NAME,
    waitForConnections: true,
    /* Lower than the CMS's 10: this process writes one row per enquiry and
       reads nothing else, while the CMS serves a whole admin UI. */
    connectionLimit: 5,
    queueLimit: 0,
    /* Match the CMS exactly. Letting the driver build JS Dates re-interprets
       every DATETIME in the server's local timezone. */
    dateStrings: true,
    charset: 'utf8mb4_unicode_ci',
    /* A submission should fail fast and fall back to the webhook rather than
       hold the visitor on a spinner while a dead host times out. */
    connectTimeout: 5000,
  })

  return globalForDb.__techcaddPool
}
