const fitsInOneBox = require('./index')

test('tipo de valor devuelto por la función', () => {
  expect(typeof fitsInOneBox([
    { l: 1, w: 1, h: 1 },
    { l: 2, w: 2, h: 2 }
  ])).toBe("boolean")
})

test('las cajas se pueden rotar', () => {
  expect(fitsInOneBox([
    { l: 1, w: 1, h: 1 },
    { l: 2, w: 2, h: 2 }
  ])).toBeTruthy()
})

test('las cajas no pueden rotarse', () => {
  const boxes = [
    { l: 1, w: 1, h: 1 },
    { l: 2, w: 2, h: 2 },
    { l: 3, w: 1, h: 3 }
  ]
  
  expect(fitsInOneBox(boxes)).toBeFalsy()
})

test('las cajas se pueden rotar', () => {
  const boxes = [
    { l: 1, w: 1, h: 1 },
    { l: 3, w: 3, h: 3 },
    { l: 2, w: 2, h: 2 }
  ]
  
  expect(fitsInOneBox(boxes)).toBeTruthy()
})

test('las cajas no pueden rotarse', () => {
  expect(
    fitsInOneBox([
      { l: 1, w: 1, h: 1 },
      { l: 2, w: 2, h: 2 },
      { l: 2, w: 10, h: 2}
    ])
  ).toBeFalsy()
})

test('las cajas se pueden rotar', () => {
  expect(
    fitsInOneBox([
      { l: 1, w: 1, h: 1 },
      { l: 3, w: 3, h: 3 },
      { l: 2, w: 2, h: 2 }
    ])
  ).toBeTruthy()
})
