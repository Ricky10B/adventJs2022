const checkPart = require('./index')

test('la función devuelve un booleano', () => {
  expect(typeof checkPart('')).toBe('boolean')
})

test('"uwu" es un palíndromo sin eliminar ningún carácter', () => {
  expect(checkPart("uwu")).toBeTruthy()
})

test('"miidim" puede ser un palíndromo después de eliminar la primera "i" ya que "midim" es un palíndromo', () => {
  expect(checkPart("miidim")).toBeTruthy()
})

test('"midu" no puede ser un palíndromo después de eliminar un carácter', () => {
  expect(checkPart("midu")).toBeFalsy()
})

test('"lolol" es palíndromo eliminando un carácter', () => {
  expect(checkPart("lolol")).toBeTruthy()
})

test('"yolooloy" es palíndromo sin eliminar un carácter', () => {
  expect(checkPart("yolooloy")).toBeTruthy()
})

test('"zzzoonzzz" es palíndromo después de eliminar el carácter n', () => {
  expect(checkPart("zzzoonzzz")).toBeTruthy()
})
