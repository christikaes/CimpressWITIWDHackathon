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

export function loading(state) {
  return {
    type: 'LOADING',
    state: loading
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
    // data: data.data.children.map(child => child.data),
    data : data.data,
    receivedAt: Date.now()
  }
}

// // set content-type header and data as json in args parameter 
//   var args = {
//     parameters: state,
//     headers: { "Content-Type": "application/json" }
//   };
  
//   // TODO: Is there a way to make this a relative path?
//   var path = window.location.origin + "/recipe-form"
//   client.post(path, args, function (data, response) {
//   // client.post("http://ec2-52-26-116-243.us-west-2.compute.amazonaws.com:3000/recipe-form", args, function (data, response) {
//     // parsed response body as js object 
//     console.log(data);
//     // raw response 
//     console.log(response);
//     // loading(false);

//     state = update(state, {"Loading": {$set: false}});
//     return state;
//   });


function fetchSave(recipe) {
  console.log("2")
  return dispatch => {
    dispatch(requestSave(recipe))

    let url = window.location.origin + "/recipe-form";
    
    return fetch(url, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(recipe)
    })
    .then(console.log("????"))
    .then(req => req.json())
    .then(json => dispatch(receiveSave(recipe, json)))

  }
}

function shouldFetchSave(state, recipe) {
  console.log("1.2")
  if (state.recipe.present.isFetching) {
    return false;
  }
  return true;
}

export function fetchSaveIfNeeded(recipe) {
  console.log("1")
  return (dispatch, getState) => {
    if (shouldFetchSave(getState(), recipe)) {
      return dispatch(fetchSave(recipe))
    }
  }
}