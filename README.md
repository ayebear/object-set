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
s.add({ id: 'foo' })
s.has({ id: 'foo' }) // true
s.delete({ id: 'foo' })
```

### With function

The function takes in the element and must return the key.

```javascript
const s = new ObjectSet(e => `${e.x},${e.y}`)
s.add({ x: 10, y: 10 })
s.has({ x: 10, y: 10 }) // true
s.delete({ x: 10, y: 10 })
```

### Initialize

Can pass an iterable array-like as the second arg with any type of key (string/function).

```javascript
new ObjectSet('id', [{ id: 'foo' }, { id: 'bar' }])
```

### Other notes

Can be other types of values besides objects, as long as your key function supports it. All common Set methods are supported, such as `values()` and `clear()`.
