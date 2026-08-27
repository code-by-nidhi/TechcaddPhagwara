/**
 * The message out of one react-hook-form field error.
 *
 * Its own file, not because it is big but because `BlockEditor.tsx` exports a
 * component: a module that exports both a component and a plain function loses
 * Fast Refresh for everything in it, which `react-refresh/only-export-components`
 * had been reporting and nothing had acted on.
 */

/**
 * The message out of one react-hook-form field error.
 *
 * `unknown` rather than a hand-written shape: RHF's error objects carry a
 * `ref` to the DOM node alongside the message, and every attempt to describe
 * them narrowly here ended in a cast — which is exactly how the whole object
 * reached JSX and produced "Objects are not valid as a React child".
 *
 * Reading the one field that is wanted, defensively, is both honest about the
 * shape and impossible to get wrong the same way again.
 */
export function fieldMessage(error: unknown): string | undefined {
  if (typeof error !== 'object' || error === null) return undefined
  const message = (error as { message?: unknown }).message
  return typeof message === 'string' && message ? message : undefined
}
