# ObjectSet

Set-like structure with custom keying function or string.

## Usage

Requires node 16+ with module support.

### Yarn

```bash
yarn add --dev @ayebear/object-set
```

### NPM

```bash
npm i -D @ayebear/object-set
```

## Examples

### With string

Can use a string to grab the key automatically from the elements like `element[key]`.

```javascript
const s = new ObjectSet('id')
s.add({ id: 'foo' }) // s
s.has({ id: 'foo' }) // true
s.get({ id: 'foo' }) // { id: 'foo' }
s.delete({ id: 'foo' }) // true
```

### With function

The function takes in the element and must return the key.

```javascript
const s = new ObjectSet(e => `${e.x},${e.y}`)
s.add({ x: 10, y: 10 }) // s
s.has({ x: 10, y: 10 }) // true
s.get({ x: 10, y: 10 }) // { x: 10, y: 10 }
s.delete({ x: 10, y: 10 }) // true
```

### Using keys

Can use keys directly in `has()`, `get()`, and `delete()`. These work with both string/function for `ObjectSet` constructor arg.

```javascript
const s = new ObjectSet(e => `${e.x},${e.y}`)
s.add({ x: 10, y: 10 }) // s
s.has('10,10') // true
s.get('10,10') // { x: 10, y: 10 }
s.delete('10,10') // true
```

### Initialize

Can pass an iterable array-like as the second arg with any type of key (string/function).

```javascript
new ObjectSet('id', [{ id: 'foo' }, { id: 'bar' }])
```

### Iteration

Iterate through set values:

```javascript
const s = new ObjectSet('id', [{ id: 'foo' }, { id: 'bar' }])
for (const v of s) console.log(v)
// { id: 'foo' }
// { id: 'bar' }
```

Can also get iterators to internal map keys using `.keys()` or `.entries()`.

### Other notes

Can be other types of values besides objects, as long as your key function supports it. All common Set methods are supported, such as `clear()`, and some Map methods are even supported.
