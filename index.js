export default class ObjectSet {
  // key: function or string
  // data: optional iterable array-like
  constructor(key, data) {
    this.key = key
    this.items = new Map()
    if (typeof key !== 'function' && typeof key !== 'string') {
      throw new Error('Must pass function or string to ObjectSet constructor')
    }
    if (data) {
      for (const item of data) {
        this.add(item)
      }
    }
  }

  get size() {
    return this.items.size
  }

  add() {}
  delete() {}
  has() {}
  values() {}
}
