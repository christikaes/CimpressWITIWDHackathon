import undoable, { distinctState } from 'redux-undo'
import update from 'react-addons-update';

const recipe = (state = {}, action) => {
  switch (action.type) {
    case 'UPDATE':
      return update(state, {[action.key]: {$set: action.value}});
    case 'SET_RECIPE':
      return update(state, {$set: action.value});
    default:
      console.log("default")
      return state
  }
}

const undoableRecipe = undoable(recipe, {
  filter: distinctState()
})

export default undoableRecipe