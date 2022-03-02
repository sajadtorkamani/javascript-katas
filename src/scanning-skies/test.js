import scanningSkies from './solution'

describe('scanningSkies', () => {
  test('returns correct result', () => {
    let destinations = [
      { dest: 'ATL', dist: 1300, price: 220 },
      { dest: 'PEK', dist: 7000, price: 703 },
      { dest: 'DXB', dist: 9000, price: 945 },
      { dest: 'LAX', dist: 1300, price: 157 }
    ]

    expect(scanningSkies(destinations)).toEqual(['DXB', 'PEK', 'LAX', 'ATL'])

    destinations = [
      { dest: 'HND', dist: 6000, price: 900 },
      { dest: 'ORD', dist: 5000, price: 733 },
      { dest: 'LHR', dist: 9000, price: 942 },
      { dest: 'HKG', dist: 11000, price: 1909 },
      { dest: 'PVG', dist: 8000, price: 882 },
      { dest: 'CDG', dist: 12000, price: 2811 },
      { dest: 'DFW', dist: 5000, price: 899 },
      { dest: 'AMS', dist: 5000, price: 767 }
    ]
    expect(scanningSkies(destinations)).toEqual([
      'CDG',
      'HKG',
      'LHR',
      'PVG',
      'HND',
      'ORD',
      'AMS',
      'DFW'
    ])

    destinations = [
      { dest: 'FRA', dist: 7000, price: 810 },
      { dest: 'IST', dist: 9000, price: 733 },
      { dest: 'CAN', dist: 10000, price: 942 },
      { dest: 'JFK', dist: 12000, price: 2999 },
      { dest: 'SIN', dist: 1000, price: 299 },
      { dest: 'DEN', dist: 12000, price: 1970 },
      { dest: 'ICN', dist: 6000, price: 899 },
      { dest: 'BKK', dist: 5000, price: 767 },
      { dest: 'DEL', dist: 4000, price: 605 },
      { dest: 'CGK', dist: 5000, price: 890 },
      { dest: 'SFO', dist: 3000, price: 362 },
      { dest: 'KUL', dist: 2000, price: 121 },
      { dest: 'MAD', dist: 2000, price: 314 },
      { dest: 'LAS', dist: 1000, price: 215 }
    ]
    expect(scanningSkies(destinations)).toEqual([
      'DEN',
      'JFK',
      'CAN',
      'IST',
      'FRA',
      'ICN',
      'BKK',
      'CGK',
      'DEL',
      'SFO',
      'KUL',
      'MAD',
      'LAS',
      'SIN'
    ])
  })
})
