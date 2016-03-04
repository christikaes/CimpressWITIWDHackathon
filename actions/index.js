export function save(recipe) {
  console.log("Clicked save")
  return {
    type: 'SAVE',
    recipe
  }
}

export function update(key, value) {
  return {
    type: 'UPDATE',
    key: key,
    value: value
  }
}

export function loading(state) {
  return {
    type: 'LOADING',
    state: loading
  }
}