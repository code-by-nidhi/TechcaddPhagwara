/**
 * Changes an existing administrator's username and password.
 *
 * Why a script and not the CMS
 * ----------------------------
 * The CMS can change a password, but it cannot change a username: the user form
 * does not collect one (it derives it from the email at creation), and the
 * entity type marks it read-only with a good reason — "renaming it would lock
 * somebody out mid-session". That reason is about doing it casually, not about
 * never doing it, and the first account's name is exactly the one that needs
 * correcting after a fork: this checkout seeded `techcadd`, the branch-neutral
 * name every other branch also seeds.
 *
 * So it happens here, deliberately, with the sessions cleared afterwards.
 *
 * Usage
 * -----
 *   cd cms-techcadd/backend
 *   npm run db:set-admin
 *
 *   FROM_USERNAME=techcadd \
 *   NEW_USERNAME=techcadd-phg \
 *   NEW_PASSWORD='Techcadd@2026' \
 *   NEW_EMAIL=admin@techcaddphagwara.com \
 *   NEW_NAME='TechCADD Phagwara' \
 *   npm run db:set-admin
 *
 * Every field has a Phagwara default, so plain `npm run db:set-admin` sets the
 * whole account. Pass one to override it.
 */

import { execute, pool, queryOne, type Row } from '../src/db/pool.js'
import { hashPassword } from '../src/modules/auth/auth.service.js'

/** Which account to change. Falls back to the only admin, if there is one. */
const FROM_USERNAME = process.env.FROM_USERNAME
const FROM_EMAIL = process.env.FROM_EMAIL

/*
  `NEW_` prefixed, and not for symmetry.

  Windows sets `USERNAME` in every shell — it is the logged-in account's name —
  so reading `process.env.USERNAME` here would silently rename the CMS admin to
  whoever happened to run the script, on the one platform this is most likely to
  be run from. `PASSWORD`, `EMAIL` and `NAME` are prefixed alongside it so the
  four read as one group rather than one of them looking arbitrary.
*/
const USERNAME = process.env.NEW_USERNAME ?? 'techcadd-phg'
const PASSWORD = process.env.NEW_PASSWORD ?? 'Techcadd@2026'
const EMAIL = process.env.NEW_EMAIL ?? 'admin@techcaddphagwara.com'
const NAME = process.env.NEW_NAME ?? 'TechCADD Phagwara'

/**
 * The same shape `deriveUsername` produces, so a name set here can also be
 * produced by the CMS later. Checked rather than trusted: login lowercases the
 * identifier before matching, so a username with a capital in it could be
 * stored and then never match anything anybody typed.
 */
const USERNAME_PATTERN = /^[a-z0-9._-]{2,50}$/

async function main(): Promise<void> {
  if (!USERNAME_PATTERN.test(USERNAME)) {
    console.error(
      `"${USERNAME}" is not a usable username. Use 2–50 lowercase letters, ` +
        'numbers, dots, underscores or hyphens — login lowercases what is typed ' +
        'before matching, so anything else could never be signed in with.',
    )
    process.exitCode = 1
    return
  }

  const account = FROM_USERNAME
    ? await queryOne<Row>('SELECT id, name, email, username FROM users WHERE username = ? LIMIT 1', [
        FROM_USERNAME,
      ])
    : FROM_EMAIL
      ? await queryOne<Row>('SELECT id, name, email, username FROM users WHERE email = ? LIMIT 1', [
          FROM_EMAIL,
        ])
      : await (async () => {
          const admins = await queryOne<Row>(
            "SELECT id, name, email, username, (SELECT COUNT(*) FROM users WHERE role = 'admin') AS total " +
              "FROM users WHERE role = 'admin' ORDER BY created_at ASC LIMIT 1",
          )
          // Only guess when there is nothing to guess between. With two admins,
          // picking the older one silently would change the wrong person's login.
          if (admins && Number(admins.total) > 1) {
            console.error(
              `${admins.total} administrators exist — say which one with ` +
                'FROM_USERNAME=... or FROM_EMAIL=...',
            )
            return undefined
          }
          return admins
        })()

  if (!account) {
    if (FROM_USERNAME || FROM_EMAIL) {
      console.error('No account matched. Nothing changed.')
    }
    process.exitCode = 1
    return
  }

  const id = account.id as string

  /*
    Both columns are unique, so a clash has to be caught here rather than left
    to surface as a raw SQL error. Excluding this account, because setting a
    username to the one it already has is a no-op, not a conflict.
  */
  for (const [column, value] of [
    ['username', USERNAME],
    ['email', EMAIL],
  ] as const) {
    const clash = await queryOne<Row>(
      `SELECT id FROM users WHERE ${column} = ? AND id <> ? LIMIT 1`,
      [value, id],
    )
    if (clash) {
      console.error(`Another account already uses that ${column} ("${value}"). Nothing changed.`)
      process.exitCode = 1
      return
    }
  }

  await execute(
    `UPDATE users
        SET username = ?, email = ?, name = ?, password_hash = ?, updated_at = NOW(3)
      WHERE id = ?`,
    [USERNAME, EMAIL, NAME, await hashPassword(PASSWORD), id],
  )

  /*
    Every session for this account, ended.

    A password change that leaves old sessions alive is not a password change —
    whoever knew the old one stays signed in until the cookie expires, which is
    seven days by default. The person running this then has to sign in again,
    which is the correct and obvious consequence.
  */
  // Counted first: the shared `execute` helper returns void, so the number has
  // to be read before the rows are gone.
  const openSessions = Number(
    (await queryOne<{ n: number }>('SELECT COUNT(*) AS n FROM sessions WHERE user_id = ?', [id]))
      ?.n ?? 0,
  )
  await execute('DELETE FROM sessions WHERE user_id = ?', [id])

  console.log(`Updated the account that was "${account.username}" <${account.email}>:\n`)
  console.log(`  Name      ${NAME}`)
  console.log(`  Username  ${USERNAME}`)
  console.log(`  Email     ${EMAIL}`)
  console.log(`  Password  ${PASSWORD}`)
  console.log(
    `\n${openSessions} existing session(s) ended — everyone signed in as this ` +
      'account has to sign in again, including you.',
  )
  console.log('\nChange the password after signing in (Settings → Security).')
}

await main()
await pool.end()
