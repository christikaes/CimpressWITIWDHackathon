import undoable, { distinctState } from 'redux-undo'
import update from 'react-addons-update';
import qs from 'query-string'
import nodeRest from 'node-rest-client'
// import http from 'client-http'
// import request from 'request';
// //AWS SDK
// var AWS = require('aws-sdk');
// AWS.config.update({region:'us-west-2'});

// //MD5 package
// var md5 = require("blueimp-md5"); 


const save = function(state){

	let query = qs.stringify(state);

	var client = new nodeRest.Client();
 
	// set content-type header and data as json in args parameter 
	var args = {
		parameters: state,
		headers: { "Content-Type": "application/json" }
	};
	
	// client.post("http://localhost:3000/recipe-form", args, function (data, response) {
	client.post("http://ec2-52-26-116-243.us-west-2.compute.amazonaws.com:3000/recipe-form", args, function (data, response) {
		// parsed response body as js object 
		console.log(data);
		// raw response 
		console.log(response);
	});
	 
	// // registering remote methods 
	// client.registerMethod("postMethod", "http://remote.site/rest/json/method", "POST");
	 
	// client.methods.postMethod(args, function (data, response) {
	// 	// parsed response body as js object 
	// 	console.log(data);
	// 	// raw response 
	// 	console.log(response);
	// });

	// query = "/recipe-form?" + query;

	// http.request("localhost:3000/recipe-form?fname=hello&lname=world", function(data){
	//     data && console.log(data);
	// }, "fname=hello&lname=world");


	// request('http://www.google.com', function (error, response, body) {
	//   if (!error && response.statusCode == 200) {
	//     console.log(body) // Show the HTML for the Google homepage.
	//   }
	// })

    // var options = {
    //     hostname: '/',
    //     port: 3000,
    //     path: query,
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     }
    // };
    // var req = http.request(options, function(res) {
    //     console.log('Status: ' + res.statusCode);
    //     console.log('Headers: ' + JSON.stringify(res.headers));
    //     res.setEncoding('utf8');
    //     res.on('data', function(body) {
    //         console.log('Body: ' + body);
    //     });
    // });
    // req.on('error', function(e) {
    //     console.log('problem with request: ' + e.message);
    // }); 



	// information.time = Date.now();
	// information.entry_id = md5(Date.now());
	// console.log(information);

	// var params = {
	// 	TableName: "receipe",
	// 	Item: information
	// };

	// var docClient = new AWS.DynamoDB.DocumentClient();

	// var message = "";
 //    docClient.put(params, function(err, data) {
 //    	var result;
 //    	if (err) {
 //        	message = "Unable to save entry "
 //        					+ information.entryId
 //        					+ ". Error JSON:"
 //        					+ JSON.stringify(err, null, 2)
 //    						+ "\n";
 //    		console.log(message);
 //    		result = false;
 //       	} else {
 //        	message += "Entry saved successfully: " + information.entry_id;
 //        	console.log(message);
 //        	result = true;
 //       	}

 //       	after(result);
	// });


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