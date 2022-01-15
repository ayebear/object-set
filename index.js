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
    return this
  }

  get(itemOrKey) {
    return this._items.get(this._getKeyFromItem(itemOrKey))
  }

  clear() {
    return this._items.clear()
  }

  delete(itemOrKey) {
    return this._items.delete(this._getKeyFromItem(itemOrKey))
  }

  entries() {
    return this._items.entries()
  }

  forEach(...args) {
    return this._items.forEach(...args)
  }

  has(itemOrKey) {
    return this._items.has(this._getKeyFromItem(itemOrKey))
  }

  values() {
    return this._items.values()
  }

  *[Symbol.iterator]() {
    for (const value of this._items.values()) {
      yield value
    }
  }

  // Returns key from item or key
  _getKeyFromItem(itemOrKey) {
    if (this._items.has(itemOrKey)) {
      // Is already a key
      return itemOrKey
    }
    return this._getKey(itemOrKey)
  }
}
