import fetch from 'isomorphic-fetch'

export function save(recipe) {
  console.log("Clicked save")
  return {
    type: 'SAVE',
    recipe
  }
}

export function update(key, value) {
  return {
    type: 'UPDATE',
    key: key,
    value: value
  }
}

// Loading
export function loading(state) {
  return {
    type: 'LOADING',
    state: state
  }
}

// Saving
function requestSave(recipe) {
  console.log("3")
  return {
    type: "REQUEST_SAVE",
    recipe
  }
}

function receiveSave(recipe, data) {
  console.log("3.5")
  return {
    type: "RECEIVE_SAVE",
    recipe,
    data : data.data,
    receivedAt: Date.now()
  }
}

function fetchSave(recipe) {
  console.log("2")
  return dispatch => {
    dispatch(requestSave(recipe))
    dispatch(loading(true))

    let url = window.location.origin + "/recipe-form";
    
    return fetch(url, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(recipe)
    })
    .then(req => req.json())
    .then(json => {
        dispatch(loading(false)) 
        dispatch(receiveSave(recipe, json))
    })

  }
}

function shouldFetchSave(state, recipe) {
  return !state.loading;
}

export function fetchSaveIfNeeded(recipe) {
  console.log("1")
  return (dispatch, getState) => {
    if (shouldFetchSave(getState(), recipe)) {
      return dispatch(fetchSave(recipe))
    }
  }
}

