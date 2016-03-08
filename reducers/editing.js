import update from 'react-addons-update';

const editing = (state = {}, action) => {
  switch (action.type) {
    case 'UPDATE_EDITING':
      return update(state, {[action.key]: {$set: action.value}});
    default:
      return state
  }
}

export default editing