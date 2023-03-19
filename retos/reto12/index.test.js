const selectSleigh = require('./index')

test('Mejor trineo para recorrer una distancia de 30', () => {
  const distance = 30
  const sleighs = [
    { name: "Dasher", consumption: 0.3 },
    { name: "Dancer", consumption: 0.5 },
    { name: "Rudolph", consumption: 0.7 },
    { name: "Midu", consumption: 1 }
  ]

  expect(selectSleigh(distance, sleighs)).toBe("Dancer")
})

test('Mejor triner para recorrer una distancia de 1', () => {
  expect(
    selectSleigh(1, [
      { name: 'pheralb', consumption: 0.3 },
      { name: 'TMChein', consumption: 0.5 }
    ])
  ).toBe("TMChein")
})

test('Mejor triner para recorrer una distancia de 10', () => {
  expect(
    selectSleigh(10, [
      { name: 'Pedrosillano', consumption: 1 },
      { name: 'SamarJaffal', consumption: 5 }
    ])
  ).toBe("Pedrosillano")
})

test('Ningún trineo puede recorrer una distancia de 50', () => {
  expect(
    selectSleigh(50, [
      { name: 'Pedrosillano', consumption: 1 },
      { name: 'SamarJaffal', consumption: 2 },
      { name: 'marcospage', consumption: 3 }
    ])
  ).toBeNull()
})
