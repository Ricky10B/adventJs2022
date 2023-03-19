const wrapping = require('./index')

test('verificar tipo de valor de la respuesta', () => {
  expect(typeof wrapping([]) === 'object').toBeTruthy()
  expect(wrapping([]).length === 0).toBeTruthy()
})

test('envuelve 3 regalos', () => {
  const giftsWrapping = wrapping(['cat', 'game', 'socks'])

  expect(giftsWrapping).toHaveLength(3)
  expect(
    JSON.stringify(giftsWrapping)
  ).toBe(
    JSON.stringify(
      [
        "*****\n*cat*\n*****",
        "******\n*game*\n******",
        "*******\n*socks*\n*******"
      ]
    )
  )
})

test('envuelve 1 regalo', () => {
  expect(JSON.stringify(wrapping(['midu']))).toBe(
    JSON.stringify(["******\n*midu*\n******"])
  )
})

test('envuelve 1 regalo de una letra', () => {
  expect(JSON.stringify(wrapping(['a']))).toBe(
    JSON.stringify(["***\n*a*\n***"])
  )
})

test('no hay regalos para envolver', () => {
  const giftsWrapping = wrapping([])
  expect(JSON.stringify(giftsWrapping)).toBe(
    JSON.stringify([])
  )

  expect(giftsWrapping).toHaveLength(0)
})
