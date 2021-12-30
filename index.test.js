import ObjectSet from './index.js'
// const ObjectSet = require('./index.js')

test('create ObjectSet', () => {
  const s1 = new ObjectSet('key')
  const s2 = new ObjectSet(elem => elem.key)
  expect(s1.size).toBe(0)
  expect(s2.size).toBe(0)
  expect(() => {
    new ObjectSet()
  }).toThrow()
})

test('add', () => {
  const s1 = new ObjectSet('key')
  s1.add({ key: 'foo' })
  expect(s1.size).toBe(1)
  const s2 = new ObjectSet(elem => `${elem.x},${elem.y}`)
  s2.add({ x: 1, y: 2 })
  s2.add({ x: 1, y: 2 })
  s2.add({ x: 2, y: 2 })
  expect(s2.size).toBe(2)
})
