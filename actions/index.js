export function save(recipe) {
  console.log("Clicked save")
  return {
    type: 'SAVE',
    recipe
  }
}

export function update(key, value) {
  console.log("Clicked update")
  return {
    type: 'UPDATE',
    key: key,
    value: value
  }
}

export function setRecipe(value) {
  console.log("Setting Default Recipe")
  return {
    type: 'SET_RECIPE',
    value: value
  }
}