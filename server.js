
//console server
var express = require('express');
var app = express();
var bodyParser= require('body-parser');
var mongoose= require('mongoose');
var morgan=require('morgan');
var config = require('./config/config.json');
var userRoutes = require('./routes/userRoutes');
app.use(morgan('dev'));  // log every request to the console
app.use(bodyParser.json()); // get information from html forms
app.use(bodyParser.urlencoded({ extended: true}));
app.use(function(req, res, next) {
	 res.setHeader('Access-Control-Allow-Origin', '*');
	 res.setHeader('Access-Control-Allow-Credentials', 'true');
	 res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
	 res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
	//and remove cacheing so we get the most recent comments
	 res.setHeader('Cache-Control', 'no-cache');
	 next();
	});
//initialize the DB connections
//load configuration details from the server configuration JSON
var dbURL = process.env.DB_URL? process.env.DB_URL : config.DB_URL;

mongoose
  .connect(
    dbURL,
    { useNewUrlParser: true }
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));


//routes
app.route("/hello")
    .post(userRoutes.postHello);

// non SSL
var SERVER_PORT = process.env.SERVER_PORT? process.env.SERVER_PORT : config.SERVER_PORT;

var server = app.listen(SERVER_PORT);
console.log(config.SERVER_RUN_MESSAGE + SERVER_PORT);

function stop() {
	server.close();
}

module.exports = server
module.exports.stop = stop;

