const countHours = require('./index')

test('verifica el tipo de valor devuelto', () => {
  const year = 2022
  const holidays = ['01/06', '04/01', '12/25']
  expect(typeof countHours(year, holidays)).toBe("number")
})

test('horas extras del año 2023', () => {
  const year = 2023
  const holidays = ['01/06', '04/01', '12/25']
  expect(countHours(year, holidays)).toBe(4)
})

test('horas extras del año 2022', () => {
  expect(countHours(2022, ['01/06', '04/01', '12/25'])).toBe(4)
})

test('horas extras del año 1985', () => {
  expect(
    countHours(1985, ['01/01', '01/06', '02/02', '02/17', '02/28', '06/03', '12/06', '12/25'])
  ).toBe(10)
})

test('horas extras del año 2000', () => {
  expect(countHours(2000, ['01/01'])).toBe(0)
})
