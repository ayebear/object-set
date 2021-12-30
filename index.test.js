import ObjectSet from './index.js'
// const ObjectSet = require('./index.js')

test('create ObjectSet', () => {
  const s1 = new ObjectSet('key')
  const s2 = new ObjectSet(elem => {
    elem.key
  })
  expect(s1.size).toBe(0)
  expect(s2.size).toBe(0)
  expect(() => {
    new ObjectSet()
  }).toThrow()
})
