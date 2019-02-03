


/***************************************************************
 * User Database Access: All user database calls are in here
 *  
 ***************************************************************/


var mongoose = require('mongoose');
var User = require('../model/userModel.js');

/**
 * create a new user in DB
 * @returns
 */
function createUser(aUser, callback) {
		
	var user = new User(aUser);
	// insert a new user to db
	user.save(function (error, userObj) {
		if (error) {
			//fail to create a user
			callback(error, userObj)
		}
		else {
			//User is inserted successfully
			callback(null, userObj)
		}
		
	});

}





module.exports = {
		createUser : createUser
         
};

