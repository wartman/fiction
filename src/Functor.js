export default class Functor {

  static of(val) {
    return new this(val)
  }
  
  constructor(val) {
    this.__value = val
  }
  
  map(fn) {
    return this.constructor.of(fn(this.__value))
  }

}
