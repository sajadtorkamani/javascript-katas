import cakes from './solution'

describe('cakes', () => {
  test('returns number of cakes that can be baked using the ingredients ingredients', () => {
    let recipe, ingredients

    recipe = { flour: 500, sugar: 200, eggs: 1 }
    ingredients = { flour: 1200, sugar: 1200, eggs: 5, milk: 200 }
    expect(cakes(recipe, ingredients)).toEqual(2)

    recipe = { apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 }
    ingredients = { sugar: 500, flour: 2000, milk: 2000 }
    expect(cakes(recipe, ingredients)).toEqual(0)
  })
})
