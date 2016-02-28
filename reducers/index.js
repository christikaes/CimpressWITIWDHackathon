import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import recipe from './recipe'

const todoApp = combineReducers({
  recipe,
  todos,
  visibilityFilter
})

export default todoApp
