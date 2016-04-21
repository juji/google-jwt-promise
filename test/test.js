
var jwtFile = '';

var jwt = require('../lib/google-jwt-promise.js');
describe('token',function(){
	
	it('should get token',function(){

		return jwt({
			jwt   : require( jwtFile ),
			scope : ['https://www.googleapis.com/auth/devstorage.full_control']
		}).then(function(d){
			console.log(d);
		});

	});

})