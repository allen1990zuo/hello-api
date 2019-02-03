var User = require('../model/userModel.js');
var config = require('../config/config.json');

describe("user-model",function(){

	//create a new user
	describe("createUser",function(){
		it("create a new user",function(done){
			
			var user = new User({"name": "test"})
            
			user.save(function(err,data){
					if(err) throw err;
					done();
				})
			
			
		})
	})

})