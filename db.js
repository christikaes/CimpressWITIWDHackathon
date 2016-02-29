var Db = function () {};

//AWS SDK
var AWS = require('aws-sdk');
AWS.config.update({region:'us-west-2'});
//TODO!!! GET RID OF THIS!!
AWS.config.update({accessKeyId: 'AKIAIT43DD5C3JZDEGVQ', secretAccessKey: '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'});


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

Db.prototype.query = function(entry_id, table, after){
    var docClient = new AWS.DynamoDB.DocumentClient();
 
    var params = {
        Key: {
            entry_id: entry_id,
        },
        TableName: table
    };
    
    var message="";
    docClient.get(params, function(err, data){
        var result;
        if (err) {
            message = "Unable to get entry "
                            + entryId
                            + ". Error JSON:"
                            + JSON.stringify(err, null, 2)
                            + "\n";
            console.log(message);
            result = false;
        } else {
            message += "Entry gotten successfully: " + entry_id;
            console.log(message);
            result = true;
        }

        after(result, data);
    });
};

module.exports = new Db();