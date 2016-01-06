import curry from './curry'
import Right from './Right'
import Left from './Left'

export default curry((errMessage, v) => {
  if (v === null || v === undefined) return Left.of(errMessage)
  return Right.of(v)
})
