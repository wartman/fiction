import curry from '../src/curry'
import compose from '../src/compose'
import maybe from '../src/maybe'
import prop from '../src/prop'
import readMeta from '../src/readMeta'

const location = curry((place) => place)
const add = curry((a, b) => a + b)
const getValue = prop('__value')
const helloPlace = compose(add('hello '), location)
const helloIfPlaceExists = compose(helloPlace, getValue, maybe('Is not a place'))

const len = curry(readMeta, 'length')

console.log(len(add))
console.log(len(add(1)))

console.log(location('foo'))
console.log(helloPlace('world'))
console.log(helloPlace(null))
console.log(helloIfPlaceExists(null))
console.log(helloIfPlaceExists('world'))
