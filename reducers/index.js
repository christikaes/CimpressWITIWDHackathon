import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import recipe from './recipe'
// import updateRecipe from './updateRecipe'

const rootReducer = combineReducers({
  recipe,
  todos,
  visibilityFilter
})

export default rootReducer
