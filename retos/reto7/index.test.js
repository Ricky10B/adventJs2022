const getGiftsToRefill = require('./index')

test('devuelve un string', () => {
  const respuesta = getGiftsToRefill([], [], [])
  expect(typeof respuesta).toBe('object')
  expect(respuesta.length).toBeGreaterThanOrEqual(0)
})

test('reponer 2 almacenes', () => {
  const a1 = ['bici', 'coche', 'bici', 'bici']
  const a2 = ['coche', 'bici', 'muñeca', 'coche']
  const a3 = ['bici', 'pc', 'pc']
  expect(JSON.stringify(getGiftsToRefill(a1, a2, a3))).toBe('["muñeca","pc"]')
})

test('almacenes vacios devuelve un array vacio', () => {
  expect(getGiftsToRefill([], [], [])).toEqual([])
})

test('ningún almacén necesita reponer regalos', () => {
  expect(getGiftsToRefill(['a', 'a'], ['a', 'a'], ['a', 'a'])).toEqual([])
})

test('Todos los almacenes necesitan reponer regalos', () => {
  expect(JSON.stringify(getGiftsToRefill(['a', 'a'], ['b', 'b'], ['c', 'c']))).toBe('["a","b","c"]')
})

test('se necesita reponer todos los regalos', () => {
  expect(JSON.stringify(getGiftsToRefill(['a', 'b'], ['c', 'd'], ['e', 'f']))).toBe('["a","b","c","d","e","f"]')
})
