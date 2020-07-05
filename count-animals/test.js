import countAnimals from './solution'

describe('countAnimals', () => {
  test('returns correct result', () => {
    expect(countAnimals('I see 3 zebras, 5 lions and 6 giraffes.')).toEqual(14)
    expect(countAnimals('Mom, 3 rhinoceros and 6 snakes come to us!')).toEqual(
      9
    )
    expect(countAnimals('11 dogs and 2 cats')).toEqual(13)
    expect(countAnimals('I do not see any animals here!')).toEqual(0)
  })
})
