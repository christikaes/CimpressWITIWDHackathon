var Db = function () {};

//AWS SDK
var AWS = require('aws-sdk');
AWS.config.update({region:'us-west-2'});

//MD5 package
var md5 = require("blueimp-md5"); 

function Db () {
	message = ""; 
}

Db.prototype.update = function(information, table, after){

	information.time = Date.now();
	information.entry_id = md5(Date.now());
	console.log(information);

	var params = {
		TableName: table,
		Item: information
	};

	var docClient = new AWS.DynamoDB.DocumentClient();

	var message = "";
    docClient.put(params, function(err, data) {
    	var result;
    	if (err) {
        	message = "Unable to save entry "
        					+ information.entryId
        					+ ". Error JSON:"
        					+ JSON.stringify(err, null, 2)
    						+ "\n";
    		console.log(message);
    		result = false;
       	} else {
        	message += "Entry saved successfully: " + information.entry_id;
        	console.log(message);
        	result = true;
       	}

       	after(result);
	});
};

module.exports = new Db();