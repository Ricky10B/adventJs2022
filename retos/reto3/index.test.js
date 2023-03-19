const distributeGifts = require('./index')

test('tipo de valor que devuelve la función', () => {
  const packOfGifts = ["book", "doll", "ball"]
  const reindeers = ["dasher", "dancer"]

  expect(typeof distributeGifts(packOfGifts, reindeers)).toBe("number")
})

test('puede llevar 2 regalos', () => {
  const packOfGifts = ["book", "doll", "ball"]
  const reindeers = ["dasher", "dancer"]

  expect(distributeGifts(packOfGifts, reindeers)).toBe(2)
})

test('puede llevar 1 regalo', () => {
  expect(distributeGifts(['a', 'b', 'c'], ['d', 'e'])).toBe(1)
})

test('it should return 0 if reindeers can\'t carry any pack', () => {
  expect(distributeGifts(['videogames', 'console'], ['midu'])).toBe(0)
})

test('puede llevar 26 regalos', () => {
  expect(
    distributeGifts(['music'], ['midudev', 'pheralb', 'codingwithdani', 'carlosble', 'blasco', 'facundocapua', 'madeval', 'memxd'])
  ).toBe(26)
})
