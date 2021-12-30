export default class ObjectSet {
  // key: function or string
  // data: optional iterable array-like
  constructor(key, data) {
    this._items = new Map()
    if (typeof key !== 'function' && typeof key !== 'string') {
      throw new Error('Must pass function or string to ObjectSet constructor')
    }
    if (typeof key === 'string') {
      this._getKey = item => item[key]
    } else {
      this._getKey = key
    }
    if (data) {
      for (const item of data) {
        this.add(item)
      }
    }
  }

  get size() {
    return this._items.size
  }

  add(item) {
    this._items.set(this._getKey(item), item)
  }

  clear() {
    this._items.clear()
  }

  delete(item) {
    this._items.delete(this._getKey(item))
  }

  entries() {
    return this._items.entries()
  }

  forEach(...args) {
    return this._items.forEach(...args)
  }

  has(item) {
    this._items.has(this._getKey(item))
  }

  values() {
    return this._items.values()
  }
}
