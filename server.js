var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var config = require('./webpack.config')

var app = new (require('express'))()
var port = 3000

var compiler = webpack(config)
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }))
app.use(webpackHotMiddleware(compiler))

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html')
})


// TODO MOVE THIS TO MIDDLEWARE

// var bodyParser = require('body-parser');
// app.use(bodyParser.json()); // for parsing application/json
// app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

var db = require('./db.js');

/**
 * whatever get passed through query string get saved in db
 * for example, if you call /tech-form?name=something&email=something&random=something
 * it will save as
 * {
 * 	  "name": "something",
 *	  "email": "something",
 *    "random": "something"
 * }
 */
app.post('/tech-form', function(req, res){
	console.log("posting tech contest entry");
	db.update(req.query, "design_contest_submissions", function(status){
		if(status){
			res.status(200).send("successfully posted tech contest entry");
		}
		else{
			res.status(500).send("failed to post tech contest entry");
		}
	});
});

//see comment above for how to use
app.post('/recipe-form', function(req, res){
	console.log("posting receipe");
	db.update(req.query, "receipe", function(status){
		if(status){
			res.status(200).send("successfully posted receipe entry");
		}
		else{
			res.status(500).send("failed to post receipe entry");
		}
	});
});

// ************************

app.listen(port, function(error) {
  if (error) {
    console.error(error)
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
  }
})