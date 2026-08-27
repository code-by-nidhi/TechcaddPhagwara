/**
 * Tailwind is used only by the course landing pages (`components/courses/*`),
 * which were ported from the sibling techcadd site and are written entirely in
 * utilities. The rest of this project is hand-written CSS in `styles/`, so the
 * Tailwind entry point (`styles/tailwind.css`) deliberately skips preflight —
 * see the comment there.
 */
const config = {
  plugins: {
    '@tailwindcss/postcss': {},
  },
}

export default config
