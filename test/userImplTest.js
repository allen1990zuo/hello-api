var userImpl = require("../modelimpl/userImpl")
var User = require('../model/userModel.js');

describe("user-impl",function(){
	
	//create a new user
	describe("createUser",function(){
		it("create a new user",function(done){
			
			var userInfo = new User({"name": "test"})
            userImpl.create(userInfo,function(err,data){
				if(err) throw err;
				done();
			})
		})
	})

})