const getFilesToBackup = require('./index')

test('Tipo de valor devuelto debe ser un array y con longitud mayor a 0', () => {
  const backups = getFilesToBackup(1546300600, [
    [ 1, 1546300800 ],
    [ 2, 1546300800 ],
    [ 1, 1546300900 ],
    [ 1, 1546301000 ],
    [ 3, 1546301100 ]
  ])

  expect(typeof backups).toBe('object')

  expect(backups.length > 0).toBeTruthy()
})

test('Ultimos cambios en los archivos 1 y 3', () => {
  const lastBackup = 1546300800
  const changes = [
    [ 3, 1546301100 ],
    [ 2, 1546300800 ],
    [ 1, 1546300800 ],
    [ 1, 1546300900 ],
    [ 1, 1546301000 ]
  ]

  expect(getFilesToBackup(lastBackup, changes)).toEqual([ 1, 3 ])
})

test('Ultimos cambios en los archivos 1, 2 y 3', () => {
  expect(
    getFilesToBackup(1546300600, [
      [ 1, 1546300800 ],
      [ 2, 1546300800 ],
      [ 1, 1546300900 ],
      [ 1, 1546301000 ],
      [ 3, 1546301100 ]
    ])
  ).toEqual([
    1,
    2,
    3
  ])
})

test('No hay modificaciones en los archivos', () => {
  expect(
    getFilesToBackup(1556300600, [
      [ 1, 1546300800 ],
      [ 2, 1546300800 ],
      [ 1, 1546300900 ],
      [ 1, 1546301000 ],
      [ 3, 1546301100 ]
    ])
  ).toEqual([])
})

test('No hay archivos', () => {
  expect(
    getFilesToBackup(1556300600, [])
  ).toEqual([])
})
