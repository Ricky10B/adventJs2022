const checkJump = require('./index')

test('La función devuelve un booleano', () => {
  expect(typeof checkJump([1, 2, 1])).toBe('boolean')
})

test('El salto va de abajo a arriba y luego de arriba a abajo', () => {
  const heights = [1, 3, 8, 5, 2]
  expect(checkJump(heights)).toBeTruthy()
})

test('Va de abajo a arriba, de arriba a abajo y luego sube otra vez', () => {
  const heights = [1, 7, 3, 5]
  expect(checkJump(heights)).toBeFalsy()
})

test('Sube 2 veces y luego baja', () => {
  expect(checkJump([1, 2, 3, 2, 1])).toBeTruthy()
})

test('Sube luego se mantiene 2 veces y luego baja', () => {
  expect(checkJump([1, 2, 2, 2, 1])).toBeTruthy()
})

test('Sube y baja', () => {
  expect(checkJump([0, 1, 0])).toBeTruthy()
})

test('Se mantiene, no sube ni baja', () => {
  expect(checkJump([2, 2, 2, 2])).toBeFalsy()
})

test('Sube, baja y vuelve a subir', () => {
  expect(checkJump([1, 2, 3, 2, 1, 2, 3])).toBeFalsy()
})

test('Sube y baja 2 veces', () => {
  expect(checkJump([1, 1000, 900, 800])).toBeTruthy()
})

test('Sube, baja y sube', () => {
  expect(checkJump([1, 1000, 100, 800])).toBeFalsy()
})

test('Se mantiene un tiempo largo luego sube y baja', () => {
  expect(checkJump([1, 1, 1, 1, 1, 1, 1, 1, 2, 1])).toBeTruthy()
})

test('Sube vuelve a subir luego baja, vuelve a subir y vuelve a bajar', () => {
  expect(checkJump([1, 2, 3, 1, 3, 1])).toBeFalsy()
})

test('Sube, baja, sube, baja, sube, baja y baja', () => {
  expect(checkJump([1, 3, 2, 5, 4, 3, 2, 1])).toBeFalsy()
})
