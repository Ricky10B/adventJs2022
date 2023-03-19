const getOptimalPath = require('./index')

test('Tipo de dato devuelto por la función debe ser un number ', () => {
  expect(typeof getOptimalPath([[0], [2, 3]])).toBe('number')
})

test('Mejor camino es 0 -> 2', () => {
  expect(getOptimalPath([[0], [2, 3]])).toBe(2)
})

test('Suma de los numeros de mejor camino dan 5', () => {
  expect(getOptimalPath([[0], [3, 4], [9, 8, 1]])).toBe(5)
})

test('Suma de los numeros de mejor camino dan 8', () => {
  expect(getOptimalPath([[1], [1, 5], [7, 5, 8], [9, 4, 1, 3]])).toBe(8)
})

test('Suma de los numeros de mejor camino dan 5', () => {
  expect(getOptimalPath([[0], [3, 4], [9, 8, 1]])).toBe(5)
})

test('Suma de los numeros de mejor camino dan 8', () => {
  expect(getOptimalPath([[1], [1, 5], [7, 5, 8], [9, 4, 1, 3]])).toBe(8)
})

test('Suma de los numeros de mejor camino dan 7', () => {
  expect(getOptimalPath([[1], [1, 5], [7, 5, 8], [9, 4, 1, 3], [-1, -1, -1, -1, -1]])).toBe(7)
})
