import undoable, { distinctState } from 'redux-undo'
import update from 'react-addons-update';
import nodeRest from 'node-rest-client'

const recipe = (state = {}, action) => {
  switch (action.type) {
    case 'UPDATE':
      return update(state, {[action.key]: {$set: action.value}});
    case 'SAVE':
      return save(state);
    case 'RECEIVE_SAVE':
      console.log(action.data)
    case 'RECEIVE_RETRIEVE':
    	console.log(action.data)
    	return action.data
    default:
      return state
  }
}

const undoableRecipe = undoable(recipe, {
  filter: distinctState()
})

export default undoableRecipe