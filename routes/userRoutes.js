
/***************************************************************
 * Routes for user 
 * 
 ****************************************************************/

var userImpl = require("../modelimpl/userImpl.js");
var config = require("../config/config.json")

function postHello(req, res) {
    var user=req.body
		var message=config.HELLO_MESSAGE
		if (user.name){
			message += user.name + config.SYMBOL
		}
		else{
			message += config.STRANGER + config.SYMBOL
		}
		userImpl.create(user,function(err,results){
			if(err){
				var error_message=user.name+" "+err
				console.log(error_message)
				//can not create a new user
				res.send(message)
			}
			else{
				//successful create a new user
				console.log("name:" + results.name)
				res.send(message)
			}
		})
}

module.exports = { 
	postHello : postHello
}
