const dryNumber = require('./index')

test('Tipo de respuesta de la función', () => {
  const listaCodigosBarrasMalas = dryNumber(1, 15)
  expect(typeof listaCodigosBarrasMalas).toBe("object")
  expect(listaCodigosBarrasMalas.length).toBeGreaterThan(0)
})

test('Códigos de barra mal de 1 al 15 cuando no se tiene tinta del 1', () => {
  expect(
    dryNumber(1, 15)
  ).toEqual([1, 10, 11, 12, 13, 14, 15])
})

test('Códigos de barra mal de 1 al 20 cuando no se tiene tinta del 2', () => {
  expect(
    dryNumber(2, 20)
  ).toEqual([2, 12, 20])
})

test('Códigos de barra mal de 1 al 33 cuando no se tiene tinta del 3', () => {
  expect(
    dryNumber(3, 33)
  ).toEqual([
    3,
    13,
    23,
    30,
    31,
    32,
    33
  ])
})

test('Códigos de barra mal de 1 al 45 cuando no se tiene tinta del 4', () => {
  expect(
    dryNumber(4, 45)
  ).toEqual([
    4,
    14,
    24,
    34,
    40,
    41,
    42,
    43,
    44,
    45
  ])
})

test('Códigos de barra mal de 1 al 55 cuando no se tiene tinta del 5', () => {
  expect(
    dryNumber(5, 55)
  ).toEqual([
    5,
    15,
    25,
    35,
    45,
    50,
    51,
    52,
    53,
    54,
    55
  ])
})

test('Hay tinta para todos los códigos de barras', () => {
  expect(dryNumber(9, 8)).toEqual([])
})