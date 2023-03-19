const sortToys = require('./index')

test('Acomodar los jueguetes en sus posiciones', () => {
  const juguetesOrdenados = sortToys(['pc', 'xbox'], [8, 6])
  expect(typeof juguetesOrdenados).toBe("object")
  expect(juguetesOrdenados.length).toBeGreaterThan(0)
})

test('Acomodar los jueguetes en sus posiciones', () => {
  const toys = ['ball', 'doll', 'car', 'puzzle']
  const positions = [2, 3, 1, 0]

  expect(
    sortToys(toys, positions)
  ).toEqual(['puzzle', 'car', 'ball', 'doll'])
})

test('Acomodar los jueguetes en sus posiciones', () => {
  const moreToys = ['pc', 'xbox', 'ps4', 'switch', 'nintendo']
  const morePositions = [8, 6, 5, 7, 9]

  expect(
    sortToys(moreToys, morePositions)
  ).toEqual(['ps4', 'xbox', 'switch', 'pc', 'nintendo'])
})

test('Acomodar los jueguetes en sus posiciones', () => {
  expect(
    sortToys(['pc', 'xbox', 'ps4', 'switch', 'nintendo'], [8, 6, 5, 7, 9])
  ).toEqual([
    "ps4",
    "xbox",
    "switch",
    "pc",
    "nintendo"
  ])
})

test('Acomodar los jueguetes en sus posiciones', () => {
  expect(
    sortToys(
      ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'j', 'k', 'l'],
      [1112, 1113, 1114, 1115, 1116, 1117, 1118, 1119, 1120, 1121, 1111]
    )
  ).toEqual([
    "l",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "j",
    "k"
  ])
})
