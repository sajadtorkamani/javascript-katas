const _difference = require('lodash').difference
const _omit = require('lodash').omit

/**
 * @param recipe {Object}
 * @param ingredients {Object}
 */
const cakes = (recipe, ingredients) => {
  const recipeItems = Object.keys(recipe)
  const ingredientsItems = Object.keys(ingredients)
  const missingIngredients = _difference(recipeItems, ingredientsItems)
  const redundantIngredients = _difference(ingredientsItems, recipeItems)

  // Check we have all required ingredients.
  if (missingIngredients.length) {
    return 0
  }

  let ingredientProducts = []

  // Remove redundant ingredients.
  ingredients = _omit(ingredients, redundantIngredients)

  for (let ingredientName in ingredients) {
    const ingredientValue = ingredients[ingredientName]
    const recipeValue = recipe[ingredientName]

    // Check we have every ingredient in sufficient quantity.
    if (ingredientValue < recipeValue) {
      return 0
    }

    const ingredientProduct = Math.floor(ingredientValue / recipeValue)
    ingredientProducts.push(ingredientProduct)
  }

  return Math.min(...ingredientProducts)
}

export default cakes
