var mongoose = require('mongoose');
var User = require('../model/userModel.js');
var config = require('../config/config.json');

//load configuration details from the server configuration JSON
var dbURL = config.TEST_DB_URL;

mongoose.Promise= global.Promise;

before(function(){
    mongoose.connect(dbURL);
    User.remove({},function(err,data){
       console.log("clean test database")
    })
})


after(function(){
    mongoose.disconnect();	
})