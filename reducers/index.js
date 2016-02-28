import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import recipe from './recipe'
import updateRecipe from './updateRecipe'

const todoApp = combineReducers({
  recipe,
  updateRecipe,
  todos,
  visibilityFilter
})

export default todoApp
