const carryGifts = require('./index')

test('Tipo de respuesta de la función', () => {
  const listaRegalos = carryGifts(['game'], 5)
  expect(typeof listaRegalos).toBe("object")
  expect(listaRegalos.length).toBeGreaterThan(0)
})

test('en cada saco caben 2 regalos', () => {
  expect(carryGifts(['game', 'bike', 'book', 'toy'], 10))
    .toEqual(['game bike', 'book toy'])
})

test('regalos de máximo 7 caracteres', () => {
  expect(
    carryGifts(['game', 'bike', 'book', 'toy'], 7)
  ).toEqual(['game', 'bike', 'book toy'])
})

test('Todos los regalos por bolsas separadas', () => {
  expect(
    carryGifts(['game', 'bike', 'book', 'toy'], 4)
  ).toEqual(['game', 'bike', 'book', 'toy'])
})

test('Todos los regalos por bolsas separadas', () => {
  expect(
    carryGifts(['toy', 'gamme', 'toy', 'bike'], 6)
  ).toEqual(['toy', 'gamme', 'toy', 'bike'])
})

test('Ningún regalo se puede llevar', () => {
  expect(
    carryGifts(['toy', 'toy', 'toy', 'toy'], 2)
  ).toEqual([])
})

test('Bolsas que lleven el máximo de regalos esperados', () => {
  expect(
    carryGifts(['toy', 'toy', 'disk', 'disk', 'toy', 'toy'], 7)
  ).toEqual([
    "toy toy",
    "disk",
    "disk toy",
    "toy"
  ])
})
