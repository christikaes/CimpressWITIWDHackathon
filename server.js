var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var config = require('./webpack.config')

var app = new (require('express'))()
var port = process.env.PORT || 3000

var compiler = webpack(config)
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }))
app.use(webpackHotMiddleware(compiler))



// TODO MOVE THIS TO MIDDLEWARE

// TODO: Not sure we need body-parser any more
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // for parsing application/json
// app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// Middleware for handling multipart forms with file uploads
var multer  = require('multer');
var techPageStorage = multer.diskStorage({
    destination: 'uploads/',
    filename: function(req, file, cb) {
        cb(null, req.body.lastName + "-" + Date.now() + ".pdf"); 
        // TODO: enforce PDF uploads only, or add file extension based on file type
    }
});
var upload = multer({ storage: techPageStorage });

var db = require('./db.js');



// Handle a tech page submission
    // Save uploaded PDF file to server (see above for destination and file name options)
    // Save other form data including PDF filename
app.post('/tech-form', upload.single('techPage'), function(req, res){
	console.log("posting tech contest entry");

    var data = req.body;
    data.fileName = req.file.filename;

    console.log(data);

	db.update(data, "design_contest_submissions", function(status){
		if(status){
			res.status(200).send("successfully posted tech contest entry");
		}
		else{
			res.status(500).send("failed to post tech contest entry");
		}
	});
});


/**
 * whatever get passed through query string get saved in db
 * for example, if you call /tech-form?name=something&email=something&random=something
 * it will save as
 * {
 *    "name": "something",
 *    "email": "something",
 *    "random": "something"
 * }
 */
//see comment above for how to use
app.post('/recipe-form', function(req, res){
	console.log("posting receipe");
	console.log(req.body)
	db.update(req.body, "receipe", function(status, data){
		if(status){
			console.log("HERE")
			res.status(200).send({message: "successfully posted receipe entry", data: data});
		}
		else{
			res.status(500).send("failed to post receipe entry");
		}
	});
});

//get the saved recipe
app.get('/recipe-saved', function(req, res){
	console.log("getting receipe");
	var entry_id = req.query.entry_id;
	if(entry_id){
		db.query(entry_id, "receipe", function(status, data){
			if(status){
				res.status(200).send({ message: "successfully got recipie entry", data: data})
			}
			else{
				res.status(500).send("failed to get receipe entry");
			}
		});
	} else {
		res.status(400).send("bad request : missing entry_id");
	}
});

// ***************************

// app.use(handleRender)


// app.get("/preview", function(req, res){

// })

// ************************

app.use(function(req, res) {
  res.sendFile(__dirname + '/index.html')
})


app.listen(port, function(error) {
  if (error) {
    console.error(error)
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
  }
})