import undoable, { distinctState } from 'redux-undo'
import update from 'react-addons-update';
import nodeRest from 'node-rest-client'

const save = function(state) {
	var client = new nodeRest.Client();
 
	// set content-type header and data as json in args parameter 
	var args = {
		parameters: state,
		headers: { "Content-Type": "application/json" }
	};
	
	// TODO: Is there a way to make this a relative path?

	client.post("http://localhost:3000/recipe-form", args, function (data, response) {
	// client.post("http://ec2-52-26-116-243.us-west-2.compute.amazonaws.com:3000/recipe-form", args, function (data, response) {
		// parsed response body as js object 
		console.log(data);
		// raw response 
		console.log(response);
	});

	// TODO: Redirect to the saved doc

	args =  {
		parameters: {entry_id : "9a144033d124776ee2d0e82432bb329a"}
	}

	// direct way 
	client.get("http://localhost:3000/recipe-saved", args, function (data, response) {
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
    default:
      return state
  }
}

const undoableRecipe = undoable(recipe, {
  filter: distinctState()
})

export default undoableRecipe