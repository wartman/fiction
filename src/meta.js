// Set a `__meta` value on a function.
export default function meta(prop, value, fn) {
  if ('function' !== typeof fn)
    throw new Error('Can only work on functions')
  // use a Map instead?
  if (!fn.__meta) fn.__meta = {}
  fn.__meta[prop] = value
  return fn
}
