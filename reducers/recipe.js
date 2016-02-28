import undoable, { distinctState } from 'redux-undo'
import update from 'react-addons-update';

const recipe = (state = {}, action) => {
  switch (action.type) {
    case 'SAVE':
      console.log("save")
      return action.recipe
    case 'UPDATE':
      let newState = update(state, {x: {$set: action.x}})
      console.log("update")
      return newState
    default:
      console.log("default")
      return state
  }
}

const undoableRecipe = undoable(recipe, {
  filter: distinctState()
})

export default undoableRecipe