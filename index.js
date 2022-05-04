export default class ObjectSet {
  // key: function or string
  // data: optional iterable array-like
  constructor(key, data) {
    this._items = new Map()
    if (typeof key === 'string') {
      this._getKey = item => item[key]
    } else if (typeof key === 'function') {
      this._getKey = key
    } else {
      throw new Error(
        `Invalid type "${typeof key}" passed to ObjectSet constructor`
      )
    }
    if (!data) return
    for (const item of data) {
      this.add(item)
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

  has(itemOrKey) {
    return this._items.has(this._getKeyFromItem(itemOrKey))
  }

  delete(itemOrKey) {
    return this._items.delete(this._getKeyFromItem(itemOrKey))
  }

  clear() {
    return this._items.clear()
  }

  forEach(...args) {
    return this._items.forEach(...args)
  }

  entries() {
    return this._items.entries()
  }

  keys() {
    return this._items.keys()
  }

  values() {
    return this._items.values()
  }

  [Symbol.iterator]() {
    return this._items.values()
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
