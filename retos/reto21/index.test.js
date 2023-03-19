const printTable = require('./index')

test('Tipo de respuesta de la función', () => {
  expect(typeof printTable([{ name: 'Game', quantity: 2 }])).toBe("string")
})

test('Imprimir tabla de 3 productos con nombres largos', () => {
  expect(
    printTable([
      { name: 'PlayStation 5', quantity: 9234782374892 },
      { name: 'Book Learn Web Dev', quantity: 23531 }
    ])
  ).toBe(
    "++++++++++++++++++++++++++++++++++++++\n| Gift               | Quantity      |\n| ------------------ | ------------- |\n| PlayStation 5      | 9234782374892 |\n| Book Learn Web Dev | 23531         |\n**************************************"
  )
})

test('Imprimir tabla de 3 productos con nombres cortos', () => {
  expect(
    printTable([
      { name: 'Game', quantity: 2 },
      { name: 'Bike', quantity: 1 },
      { name: 'Book', quantity: 3 }
    ])
  ).toBe(
    "+++++++++++++++++++\n| Gift | Quantity |\n| ---- | -------- |\n| Game | 2        |\n| Bike | 1        |\n| Book | 3        |\n*******************"
  )
})

test('Imprimir tabla de un producto con cantidad normal', () => {
  expect(
    printTable([
      { name: 'Game', quantity: 10000 }
    ])
  ).toBe(
    "+++++++++++++++++++\n| Gift | Quantity |\n| ---- | -------- |\n| Game | 10000    |\n*******************"
  )
})

test('Imprimir tabla de un producto con muchas cantidades', () => {
  expect(
    printTable([
      { name: 'Game', quantity: 1234567890 }
    ])
  ).toBe(
    "+++++++++++++++++++++\n| Gift | Quantity   |\n| ---- | ---------- |\n| Game | 1234567890 |\n*********************"
  )
})

test('Imprimir tabla de 2 productos', () => {
  expect(
    printTable([
      { name: 'Toy', quantity: 12 },
      { name: 'Mic', quantity: 123 }
    ])
  ).toBe(
    "+++++++++++++++++++\n| Gift | Quantity |\n| ---- | -------- |\n| Toy  | 12       |\n| Mic  | 123      |\n*******************"
  )
})
