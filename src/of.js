import curry from './curry'

export default curry((functor, value) => functor.of(value))
