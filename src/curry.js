import curryN from './curryN'
import readMeta from './readMeta'

// The default curring function.
export default function curry(fn, ...args) {
  const curried = curryN(readMeta('length', fn), fn)
  if (args.length) return curried.apply(curried, args)
  return curried
}
