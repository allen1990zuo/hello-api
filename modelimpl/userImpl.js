/***************************************************************
 * User Implementation
 *  
 ***************************************************************/

var dbUserAccess = require("../database/dbUserAccess.js");
function create(user,callback){
	dbUserAccess.createUser(user,function(err,results){
		if(err){
			//can not store a new user
			callback(err,null)
		}
		else{
			//successful to store a new user
			callback(null,results)
		}
	})
}


module.exports={
		create:create
}