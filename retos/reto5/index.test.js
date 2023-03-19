const getMaxGifts = require('./index')

test('tipo de valor que devuelve la función', () => {
  expect(typeof getMaxGifts([1,2,3,4,5], 10, 2)).toBe('number')
})

test('20 regalos máximo', () => {
  expect(getMaxGifts([12, 3, 11, 5, 7], 20, 3)).toBe(20)
})

test('no hay máximo de regalos', () => {
  expect(getMaxGifts([50], 15, 1)).toBe(0)
})

test('50 regalos máximo', () => {
  expect(getMaxGifts([50], 100, 1)).toBe(50)
})

test('70 regalos máximo', () => {
  expect(getMaxGifts([50, 70], 100, 1)).toBe(70)
})

test('100 regalos máximo', () => {
  expect(getMaxGifts([50, 70, 30], 100, 2)).toBe(100)
})

test('100 regalos máximo', () => {
  expect(getMaxGifts([50, 70, 30], 100, 3)).toBe(100)
})

test('100 regalos máximo', () => {
  expect(getMaxGifts([50, 10, 40, 1000, 500, 200], 199, 4)).toBe(100)
})

test('115 regalos máximo', () => {
  expect(getMaxGifts([50, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 1000, 1000)).toBe(115)
})
