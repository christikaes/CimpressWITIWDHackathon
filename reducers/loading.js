const loading = (state = false, action) => {
  switch (action.type) {
    case 'LOADING':
      return action.state
    default:
      return state
  }
}

export default loading