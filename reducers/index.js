import { combineReducers } from 'redux'
import recipe from './recipe'
import loading from './loading'

const rootReducer = combineReducers({
  recipe,
  loading
})

export default rootReducer
