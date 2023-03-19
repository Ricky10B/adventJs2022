const countTime = require('./index')

test('la función devuelve un número', () => {
  const leds = [0, 1, 1, 0, 1]
  expect(typeof countTime(leds)).toBe('number')
})

test('1 cambio para encender todas las luces', () => {
  const leds = [0, 1, 1, 0, 1]
  expect(countTime(leds)).toBe(7)
})

test('3 cambios para encender todas las luces', () => {
  expect(countTime([0, 0, 0, 1])).toBe(21)
})

test('4 cambios para encender todas las luces', () => {
  expect(countTime([0, 0, 1, 0, 0])).toBe(28)
})

test('2 cambios para encender todas las luces', () => {
  expect(countTime([1, 0, 0, 1, 0, 0])).toBe(14)
})

test('4 cambios para encender todas las luces', () => {
  expect(countTime([1, 1, 0, 0, 0, 0])).toBe(28)
})

test('no se necesitan cambios para encender todas las luces', () => {
  expect(countTime([1, 1, 1])).toBe(0)
})
