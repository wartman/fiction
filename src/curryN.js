import meta from './meta'

const _arity = meta.bind(meta, 'length')

function _createCurriedFunctionN(length, received, fn) {
  const curried = function (...args) {
    let combined = []
    let argsIdX = 0
    let left = length
    let combinedIdX = 0
    while (combinedIdX < received.length || argsIdX < args.length) {
      let result
      if (combinedIdX < received.length || argsIdX >= args.length) {
        result = received[combinedIdX]
      } else {
        result = args[argsIdX]
        argsIdX += 1
      }
      combined[combinedIdX] = result
      left -= 1
      combinedIdX += 1
    }
    if (left <= 0) return fn.apply(this, combined)
    return _arity(left, _createCurriedFunctionN(length, combined, fn))
  }
  return _arity(length, curried)
}

function _curry1(fn) {
  const fn1 = function (...args) {
    if (args.length < 1) return fn1
    return fn.apply(this, args)
  }
  return _arity(1, fn1)
}

function _curry2(fn) {
  const fn2 = function (...args) {
    const a = args[0]
    const b = args[1]
    switch (args.length) {
      case 0: return fn2
      case 1: return _curry1(_b => fn(a, _b))
      default: return fn(a, b)
    }
  }
  return _arity(2, fn2)
}

function _curry3(fn) {
  const fn3 = function fn2(...args) {
    const a = args[0]
    const b = args[1]
    const c = args[2]
    switch (args.length) {
      case 0: return fn3
      case 1: return _curry2((_b, _c) => fn(a, _b, _c))
      case 2: return _curry1(_c => fn(a, b, _c))
      default: return fn(a, b, c)
    }
  }
  return _arity(3, fn3)
}

// Public API to curry a function with an explicit arity.
export default _curry2((length, fn, ...args) => {
  switch (length) {
    case 1: return _curry1(fn)
    case 2: return _curry2(fn)
    case 3: return _curry3(fn)
    default: return _createCurriedFunctionN(length, args, fn)
  }
})
