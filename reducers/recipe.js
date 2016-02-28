import undoable, { distinctState } from 'redux-undo'
import update from 'react-addons-update';
import qs from 'query-string'
import http from 'http'

const save = function(state){

	let query = qs.stringify(state);

	query = "/recipe-form?" + query;

    var options = {
        hostname: 'http://ec2-52-26-116-243.us-west-2.compute.amazonaws.com',
        port: 3000,
        path: query,
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        }
    };
    var req = http.request(options, function(res) {
        console.log('Status: ' + res.statusCode);
        console.log('Headers: ' + JSON.stringify(res.headers));
        res.setEncoding('utf8');
        res.on('data', function(body) {
            console.log('Body: ' + body);
        });
    });
    req.on('error', function(e) {
        console.log('problem with request: ' + e.message);
    }); 

    // write data to request bodyreq.write('{"string": "Hello, World"}');req.end();

	// http.post(query, function(err,res){
	// 	if(err){
	// 		console.log(err)
	// 	} else{
	// 		console.log(res.code, res.headers, res.buffer.toString());
	// 	}
	// });

	console.log(query);
}


const recipe = (state = {}, action) => {
  switch (action.type) {
    case 'UPDATE':
      return update(state, {[action.key]: {$set: action.value}});
    case 'SAVE':
      console.log(state);
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