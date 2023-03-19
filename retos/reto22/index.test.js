const checkStepNumbers = require('./index')

test('Tipo de valor devuelto por la función', () => {
  const systemNames = ["tree_1", "tree_2", "house", "tree_1", "tree_2", "house"]
  const stepNumbers = [1, 33, 10, 2, 44, 20]

  expect(typeof checkStepNumbers(systemNames, stepNumbers)).toBe("boolean")
})

test('Pasos todos estrictamente en orden creciente', () => {
  const systemNames = ["tree_1", "tree_2", "house", "tree_1", "tree_2", "house"]
  const stepNumbers = [1, 33, 10, 2, 44, 20]

  expect(
    checkStepNumbers(systemNames, stepNumbers)
  ).toBeTruthy()
})

test('tree_1 en desorden', () => {
  expect(
    checkStepNumbers(["tree_1", "tree_1", "house"], [2, 1, 10])
  ).toBeFalsy()
})

test('Pasos todos estrictamente en orden creciente', () => {
  expect(
    checkStepNumbers(["tree_1", "tree_1", "house"], [1, 2, 10])
  ).toBeTruthy()
})

test('Pasos todos estrictamente en orden creciente', () => {
  expect(
    checkStepNumbers(["house", "house", "tree_1", "tree_1", "house", "tree_2", "tree_2", "tree_3"], [5, 2, 1, 2, 3, 4, 5, 6])
  ).toBeFalsy()
})
