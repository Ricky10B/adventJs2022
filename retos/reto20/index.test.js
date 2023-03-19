const howManyReindeers = require('./index')

test('Tipo de respuesta de la función', () => {
  const mejoresRenos = howManyReindeers(
      [
        { type: 'Electric', weightCapacity: 10 },
        { type: 'Gasoline', weightCapacity: 5 },
        { type: 'Diesel', weightCapacity: 1 }
      ],
      [{ country: 'Spain', weight: 37 }]
    )

  expect(typeof mejoresRenos).toBe('object')
  expect(mejoresRenos.length).toBeGreaterThan(0)
})

test('Mejores renos para Spain: 30, France: 17, Italy: 50', () => {
  const reindeerTypes = [
    { type: 'Nuclear', weightCapacity: 50 },
    { type: 'Electric', weightCapacity: 10 },
    { type: 'Gasoline', weightCapacity: 5 },
    { type: 'Diesel', weightCapacity: 1 }
  ]
  
  const gifts = [
    { country: 'Spain', weight: 30 },
    { country: 'France', weight: 17 },
    { country: 'Italy', weight: 50 }
  ]
  
  expect(
    howManyReindeers(reindeerTypes, gifts)
  ).toEqual(
    [{
      country: 'Spain',
      reindeers: [
        { type: 'Electric', num: 1 },
        { type: 'Gasoline', num: 3 },
        { type: 'Diesel', num: 5 }
      ]
    }, {
      country: 'France',
      reindeers: [
        { type: 'Electric', num: 1 },
        { type: 'Gasoline', num: 1 },
        { type: 'Diesel', num: 2 }
      ]
     }, {
      country: 'Italy',
      reindeers: [
        { type: 'Electric', num: 3 },
        { type: 'Gasoline', num: 3 },
        { type: 'Diesel', num: 5 }
      ]
    }]
  )
})

test('Mejores renos para Spain: 37', () => {
  expect(
    howManyReindeers(
      [
        { type: 'Electric', weightCapacity: 10 },
        { type: 'Gasoline', weightCapacity: 5 },
        { type: 'Diesel', weightCapacity: 1 }
      ],
      [{ country: 'Spain', weight: 37 }]
    )
  ).toEqual([
    {
      "country": "Spain",
      "reindeers": [
        {
          "type": "Electric",
          "num": 2
        },
        {
          "type": "Gasoline",
          "num": 2
        },
        {
          "type": "Diesel",
          "num": 7
        }
      ]
    }
  ])
})

test('Mejores renos para Spain: 30, Germany: 7, France: 17, Italy: 50', () => {
  expect(
    howManyReindeers(
      [
        { type: 'Nuclear', weightCapacity: 50 },
        { type: 'Electric', weightCapacity: 10 },
        { type: 'Gasoline', weightCapacity: 5 },
        { type: 'Diesel', weightCapacity: 1 }
      ],
      [
        { country: 'Spain', weight: 30 },
        { country: 'Germany', weight: 7 },
        { country: 'France', weight: 17 },
        { country: 'Italy', weight: 50 }
      ])
  ).toEqual([
    {
      "country": "Spain",
      "reindeers": [
        {
          "type": "Electric",
          "num": 1
        },
        {
          "type": "Gasoline",
          "num": 3
        },
        {
          "type": "Diesel",
          "num": 5
        }
      ]
    },
    {
      "country": "Germany",
      "reindeers": [
        {
          "type": "Gasoline",
          "num": 1
        },
        {
          "type": "Diesel",
          "num": 2
        }
      ]
    },
    {
      "country": "France",
      "reindeers": [
        {
          "type": "Electric",
          "num": 1
        },
        {
          "type": "Gasoline",
          "num": 1
        },
        {
          "type": "Diesel",
          "num": 2
        }
      ]
    },
    {
      "country": "Italy",
      "reindeers": [
        {
          "type": "Electric",
          "num": 3
        },
        {
          "type": "Gasoline",
          "num": 3
        },
        {
          "type": "Diesel",
          "num": 5
        }
      ]
    }
  ])
})

test('Mejores renos para Spain: 30, Germany: 7', () => {
  expect(
    howManyReindeers(
      [
        { type: 'Diesel', weightCapacity: 1 },
        { type: 'Gasoline', weightCapacity: 5 }
      ],
      [
        { country: 'Spain', weight: 30 },
        { country: 'Germany', weight: 7 }
      ])
  ).toEqual([
    {
      "country": "Spain",
      "reindeers": [
        {
          "type": "Gasoline",
          "num": 5
        },
        {
          "type": "Diesel",
          "num": 5
        }
      ]
    },
    {
      "country": "Germany",
      "reindeers": [
        {
          "type": "Gasoline",
          "num": 1
        },
        {
          "type": "Diesel",
          "num": 2
        }
      ]
    }
  ])
})
