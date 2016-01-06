import Functor from './Functor'

export default class Left extends Functor {

  map(v) {
    return this
  }

}
