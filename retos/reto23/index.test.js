const executeCommands = require('./index')

test('Posiciones de los 7 indices en la memoria', () => {
  const posicionesMemoria = executeCommands([
    'MOV 5,V00'
  ])

  expect(typeof posicionesMemoria).toBe("object")
  expect(posicionesMemoria.length).toBeGreaterThan(0)
})

test('Posiciones de los 7 indices en la memoria', () => {
  expect(
    executeCommands([
      'MOV 5,V00',
      'MOV 10,V01',
      'DEC V00',
      'ADD V00,V01',
    ])
  ).toEqual([
    14,
    10,
    0,
    0,
    0,
    0,
    0,
    0
  ])
})

test('Posiciones de los 7 indices en la memoria', () => {
  expect(
    executeCommands([
      'MOV 255,V00',
      'INC V00',
      'DEC V01',
      'DEC V01'
    ])
  ).toEqual([
    0,
    254,
    0,
    0,
    0,
    0,
    0,
    0
  ])
})

test('Posiciones de los 7 indices en la memoria', () => {
  expect(
    executeCommands([
      'MOV 10,V00',
      'DEC V00',
      'INC V01',
      'JMP 1',
      'INC V06'
    ])
  ).toEqual([ 0, 10, 0, 0, 0, 0, 1, 0 ])
})

test('Posiciones de los 7 indices en la memoria', () => {
  expect(
    executeCommands([
      'MOV 10,V00',
      'MOV V00,V01',
      'MOV V01,V02',
      'MOV V02,V03',
      'MOV V03,V04'
    ])
  ).toEqual([
    10,
    10,
    10,
    10,
    10,
    0,
    0,
    0
  ])
})
