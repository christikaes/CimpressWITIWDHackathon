import { combineReducers } from 'redux'
import recipe from './recipe'
import loading from './loading'
import editing from './editing'

const rootReducer = combineReducers({
  recipe,
  loading,
  editing
})

export default rootReducer
