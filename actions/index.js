let nextTodoId = 0
export const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  }
}

export const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}

export function save(recipe) {
  console.log("Clicked save")
  return {
    type: 'SAVE',
    recipe
  }
}

export function updateRecipe(key, value) {
  console.log("Clicked update")
  return {
    type: 'UPDATE_RECIPE',
    key: key,
    value: value
  }
}

export function update(x) {
  return {
    type: 'UPDATEX',
    x
  }
}