export default function readMeta(key, fn) {
  if (fn.__meta && fn.__meta[key]) return fn.__meta[key]
  return fn[key]
}
