const canExit = require('./index')

test('Laberinto', () => {
  expect(
    typeof canExit([
      [' ', ' ', 'W', ' ', 'S'],
      [' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', 'W', ' '],
      ['W', 'W', ' ', 'W', 'W'],
      [' ', ' ', ' ', ' ', 'E']
    ])
  ).toBe('boolean')
})

test('Laberinto', () => {
  expect(
    canExit([
      [' ', ' ', 'W', ' ', 'S'],
      [' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', 'W', ' '],
      ['W', 'W', ' ', 'W', 'W'],
      [' ', ' ', ' ', ' ', 'E']
    ])
  ).toBeTruthy()
})

test('Laberinto', () => {
  expect(
    canExit([
      [' ', ' ', 'W', 'W', 'S'],
      [' ', ' ', ' ', 'W', ' '],
      [' ', ' ', ' ', 'W', ' '],
      ['W', 'W', ' ', 'W', 'W'],
      [' ', ' ', ' ', ' ', 'E']
    ])
  ).toBeFalsy()
})

test('Laberinto', () => {
  expect(
    canExit([
      [' ', ' ', 'W', 'W', 'S'],
      [' ', ' ', ' ', 'W', ' '],
      [' ', ' ', ' ', 'W', ' '],
      ['W', 'W', ' ', ' ', 'W'],
      [' ', ' ', ' ', ' ', 'E']
    ])
  ).toBeFalsy()
})

test('Laberinto', () => {
  expect(
    canExit([
      ['E', ' ', ' ', ' ', 'S']
    ])
  ).toBeTruthy()
})

test('Laberinto', () => {
  expect(
    canExit([
      ['E', ' ', 'W', ' ', 'S']
    ])
  ).toBeFalsy()
})

test('Laberinto', () => {
  expect(
    canExit([
      ['E', ' ', 'W', ' ', 'S'],
      [' ', ' ', ' ', ' ', ' '],
    ])
  ).toBeTruthy()
})

test('Laberinto', () => {
  expect(
    canExit([
      ['E', ' ', 'W', ' ', 'S'],
      [' ', ' ', ' ', ' ', ' '],
      ['W', 'W', 'W', 'W', 'W'],
    ])
  ).toBeTruthy()
})

test('Laberinto', () => {
  expect(
    canExit([
      ['E', ' ', 'W', ' ', 'S'],
      [' ', ' ', 'W', ' ', ' '],
      ['W', 'W', 'W', 'W', 'W'],
    ])
  ).toBeFalsy()
})

test('Laberinto', () => {
  expect(
    canExit([
      ['E', 'S', 'W', 'W', 'W'],
      ['W', 'W', 'W', 'W', 'W'],
      ['W', 'W', 'W', 'W', 'W']
    ])
  ).toBeTruthy()
})
