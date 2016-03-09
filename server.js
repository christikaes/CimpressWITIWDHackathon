var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var config = require('./webpack.config')

var express = require('express')
var app = new express()
var port = process.env.PORT || 3000

var compiler = webpack(config)
var md5 = require("blueimp-md5");
var sizeOf = require("image-size");
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }))
app.use(webpackHotMiddleware(compiler))

app.use('/imageUploads', express.static('imageUploads'));
app.use('/public', express.static('public'));
app.use('/uploads/recipe', express.static('uploads/recipe'));


// TODO MOVE THIS TO MIDDLEWARE

// TODO: Not sure we need body-parser any more
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // for parsing application/json
// app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// Middleware for handling multipart forms with file uploads
var multer  = require('multer');
var techPageStorage = multer.diskStorage({
    destination: function(req, file, cb) {
        var dest = 'uploads/tech/' + (file.fieldname === 'techPage' ? 'pdfs' : 'photos');
        cb(null, dest);
    },
    filename: function(req, file, cb) {
        var fname = file.originalname;
        var ext = fname.substring(fname.lastIndexOf("."));
        cb(null, req.body.lastName + "-" + Date.now() + ext);
    }
});
var techUploader = multer({ 
    storage: techPageStorage,
    fileFilter: function(req, file, cb) {
        // Note: This won't stop someone from uploading an image for the page field.
        var allowedFileFormats = [
            "image/jpeg",
            "image/gif",
            "image/png",
            "application/pdf"
        ];
        cb(null, allowedFileFormats.indexOf(file.mimetype) >= 0);
    },
    limits: {
        fileSize: 5242880
    }
});


var recipeUploadStorage = multer.diskStorage({
    destination: function(req, file, cb) {
        var dest = 'uploads/recipe/' + (file.fieldname === 'recipePage' ? 'pdfs' : 'photos');
        cb(null, dest);
    },
    filename: function(req, file, cb) {
        var fname = file.originalname;
        var ext = fname.substring(fname.lastIndexOf("."));
        var enc = md5(Date.now());
        console.log(enc)
        cb(null, enc + ext);
    }
});
var recipeUploader = multer({ 
    storage: recipeUploadStorage,
    fileFilter: function(req, file, cb) {
        // Note: This won't stop someone from uploading an image for the page field.
        var allowedFileFormats = [
            "image/jpeg",
            "image/gif",
            "image/png",
            "application/pdf"
        ];
        cb(null, allowedFileFormats.indexOf(file.mimetype) >= 0);
    },
    limits: {
        fileSize: 5242880
    }
});

var db = require('./db.js');



// Handle a tech page submission
    // Save uploaded PDF and photo files to server (see above for destination and file name options)
    // Save other form data including upload filenames
// app.post('/tech-form', tech.single('techPage'), function(req, res){
app.post('/tech-form', techUploader.fields([
            {name: 'techPage', maxCount: 1},
            {name: 'photo', maxCount: 1},
        ]), function(req, res){

	console.log("posting tech contest entry");

    var data = req.body;
    data.photoFileName = req.files['photo'][0].filename;
    data.pdfFileName = req.files['techPage'][0].filename;

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

// Handle a Recipe page submission
app.post('/recipe-photo-upload', recipeUploader.fields([
            {name: 'photo', maxCount: 1},
        ]), function(req, res){
    console.log("posting recipe-photo-upload");
    console.log(req.files)
    // console.log(req.body.photo[0].filename)
    var photoName = req.files['photo'][0].filename;
    var dimensions = sizeOf('uploads/recipe/photos/' + photoName);

    res.status(200).send({message: "successfully posted receipe entry", photoName: photoName , dimensions: dimensions});
});

// Handle a Recipe page submission
app.post('/recipe-submission', function(req, res){
	console.log("posting recipe contest entry");

    var data = req.body;
    data.fileName = req.file.filename;

    console.log(data);

	db.update(data, "design_contest_submissions", function(status){
		if(status){
			res.status(200).send("successfully posted recipe contest entry");
		}
		else{
			res.status(500).send("failed to post recipe contest entry");
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