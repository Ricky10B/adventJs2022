const decorateTree = require('./index')

test('Tipo de dato debe ser un array', () => {
  const tree = decorateTree('B P R P')

  expect(typeof tree).toBe('object')
  expect(tree.length > 0).toBeTruthy()
})

test('Arbol de 4 digitos (B P R P)', () => {
  expect(
    decorateTree('B P R P')
  ).toEqual([
    'R',
    'P B',
    'R B B',
    'B P R P'
  ])
})

test('Arbol de 2 digitos iguales', () => {
  expect(
    decorateTree('B B')
  ).toEqual(['B', 'B B'])
})

test('Arbol de 7 digitos (B B P R P R R)', () => {
  expect(
    decorateTree('B B P R P R R')
  ).toEqual([
    "B",
    "R P",
    "B P P",
    "P R B R",
    "P P B B P",
    "B R B B B R",
    "B B P R P R R"
  ])
})

test('Arbol de 7 digitos (B B P R P R R)', () => {
  expect(
    decorateTree('R R P R R')
  ).toEqual([
    "R",
    "R R",
    "P B P",
    "R B B R",
    "R R P R R"
  ])
})
