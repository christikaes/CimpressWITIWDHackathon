import fetch from 'isomorphic-fetch'

export function update(key, value) {
  return {
    type: 'UPDATE',
    key: key,
    value: value
  }
}

// Editing
export function updateEditing(key, value) {
  return {
    type: 'UPDATE_EDITING',
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

function shouldFetchSave(state) {
  return !state.loading;
}

export function fetchSaveIfNeeded(recipe, force) {
  console.log("1")
  return (dispatch, getState) => {
    if (force || shouldFetchSave(getState())) {
      return dispatch(fetchSave(recipe))
    }
  }
}

// Retrieving
function requestRetrieve(recipe) {
  console.log("3")
  return {
    type: "REQUEST_RETRIEVE",
    recipe
  }
}

function receiveRetreive(id, data) {
  console.log("3.5")
  return {
    type: "RECEIVE_RETRIEVE",
    id,
    data : data.data.Item,
    receivedAt: Date.now()
  }
}

function fetchRetrieve(id) {
  console.log("2")
  return dispatch => {
    dispatch(requestRetrieve(id))
    dispatch(loading(true))

    let url = window.location.origin + "/recipe-saved?entry_id=" + id;
    
    return fetch(url)
    .then(req => req.json())
    .then(json => {
        dispatch(loading(false)) 
        dispatch(receiveRetreive(id, json))
    })

  }
}

function shouldFetchRetrieve(state) {
  console.log("!!")
  console.log(state.loading)
  return !state.loading;
}

export function fetchRetrieveIfNeeded(id, force) {
  console.log("1!!!!!!!!!!!")
  return (dispatch, getState) => {
    console.log("?")
    console.log(shouldFetchRetrieve(getState()))
    if (force || shouldFetchRetrieve(getState())) {
      console.log("1.1")
      return dispatch(fetchRetrieve(id))
    }
  }
}