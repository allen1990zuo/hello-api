var dbUserAccess = require("../database/dbUserAccess")
var User = require('../model/userModel.js');

describe("user-db",function(){
	
	//create a new user
	describe("createUser",function(){
		it("create a new user",function(done){
			
			var userInfo = new User({"name": "test"})
            dbUserAccess.createUser(userInfo,function(err,data){
				if(err) throw err;
				done();
			})
		})
	})
	
})