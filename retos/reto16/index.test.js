const fixLetter = require('./index')

test('Verificar el tipo de respuesta de la función', () => {
  expect(typeof fixLetter(` hello`)).toBe("string")
})

test('Carta con muchos espacios y errores gramaticales', () => {
  expect(
    fixLetter(
      ` hello,  how are you??     do you know if santa claus exists?  i really hope he does!  bye  `
    )
  ).toBe(
    "Hello, how are you? Do you know if Santa Claus exists? I really hope he does! Bye."
  )

})

test('Carta sin primeras letras en mayúsculas', () => {
  expect(
    fixLetter(
      "  Hi Santa claus. I'm a girl from Barcelona , Spain . please, send me a bike.  Is it possible?"
    )
  ).toBe(
    "Hi Santa Claus. I'm a girl from Barcelona, Spain. Please, send me a bike. Is it possible?"
  )

})

test('Saludo para santa claus', () => {
  expect(
    fixLetter("  hi    santa    claus ")
  ).toBe("Hi Santa Claus.")
})

test('Nombrar a santa claus 2 veces y muchos espacios', () => {
  expect(
    fixLetter("  hi    santa    claus . santa claus is the best  ")
  ).toBe("Hi Santa Claus. Santa Claus is the best.")
})

test('Punto y seguido despues de saludo a santa', () => {
  expect(
    fixLetter('  hi,santa claus. are you there ?   ')
  ).toBe("Hi, Santa Claus. Are you there?")
})

test('Varios espacios después de los punto y seguido', () => {
  expect(
    fixLetter("Hey santa Claus .  I want a bike.   I want a videogame! ")
  ).toBe("Hey Santa Claus. I want a bike. I want a videogame!")
})
