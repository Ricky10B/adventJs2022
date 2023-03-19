const getCompleted = require('./index')

test('Tipo de valor que devuelve debe ser string', () => {
  expect(typeof getCompleted('01:00:00', '03:00:00')).toBe('string')
})

test('Un tercio de la tarea completada', () => {
  expect(getCompleted('01:00:00', '03:00:00')).toBe('1/3')
})

test('La mitad del tarea completada', () => {
  expect(getCompleted('02:00:00', '04:00:00')).toBe('1/2')
})

test('Tarea completada', () => {
  expect(getCompleted('01:00:00', '01:00:00')).toBe('1/1')
})

test('Un sexto de la tarea completada', () => {
  expect(getCompleted('00:10:00', '01:00:00')).toBe('1/6')
})

test('Un tercio de la tarea completada', () => {
  expect(getCompleted('01:10:10', '03:30:30')).toBe('1/3')
})

test('Tres quintos de la tarea completada', () => {
  expect(getCompleted('03:30:30', '05:50:50')).toBe('3/5')
})

test('Tres septimos de la tarea completada', () => {
  expect(getCompleted('03:30:30', '07:70:70')).toBe('3/7')
})
