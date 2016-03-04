import undoable, { distinctState } from 'redux-undo'
import update from 'react-addons-update';
import nodeRest from 'node-rest-client'
// import { loading } from '../actions'

const save = function(state) {
	// update(state, {"Loading": {$set: action.value}});
	// request.
	// TODO: Need async actions for this
	// dispatch({type: "LOADING", loading: true});

	var client = new nodeRest.Client();
 
	// set content-type header and data as json in args parameter 
	var args = {
		parameters: state,
		headers: { "Content-Type": "application/json" }
	};
	
	// TODO: Is there a way to make this a relative path?
	var path = window.location.origin + "/recipe-form"
	client.post(path, args, function (data, response) {
	// client.post("http://ec2-52-26-116-243.us-west-2.compute.amazonaws.com:3000/recipe-form", args, function (data, response) {
		// parsed response body as js object 
		console.log(data);
		// raw response 
		console.log(response);
		// loading(false);
	});

	// TODO: Redirect to the saved doc

	args =  {
		parameters: {entry_id : "9a144033d124776ee2d0e82432bb329a"}
	}

	// direct way 
	var path = window.location.origin + "/recipe-saved"
	client.get(path, args, function (data, response) {
	// client.get("http://ec2-52-26-116-243.us-west-2.compute.amazonaws.com:3000/recipe-saved", args, function (data, response) {
		// parsed response body as js object 
		console.log(data);
		// raw response 
		console.log(response);
	});

}


const recipe = (state = {}, action) => {
  switch (action.type) {
    case 'UPDATE':
      return update(state, {[action.key]: {$set: action.value}});
    case 'SAVE':
      save(state);
      return state;
    case 'LOADING':
      return update(state, {"Loading": {$set: action.loading}});
    default:
      return state
  }
}

const undoableRecipe = undoable(recipe, {
  filter: distinctState()
})

export default undoableRecipe