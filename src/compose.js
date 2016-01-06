// Compose functions together, right-to-left.
export default function compose(...fns) {
  if (fns.length === 0) {
    throw new Error('compose() requires at least one argument.')
  }
  return function (result) {
    for (let i = fns.length - 1; i > -1; i--) {
      result = fns[i].call(this, result)
    }
    return result
  }
}
