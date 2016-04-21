var jhttp = require('jhttp-client');
var jwt = require('jwt-simple');

var gjwt = function( opt ){

	var now = Date.now().valueOf() / 1000;

	// set payload
	var claim = {
		"iss"   : opt.jwt.client_email,
		"scope" : opt.scope.join(' '),
		"aud"   : opt.jwt.token_uri,
		"iat"   : now,
		"exp"   : now + 3600
	};

	// calculate signature
	var token = jwt.encode(
		claim, 
		opt.jwt.private_key,
		'RS256'
	);

	// request token
	return new Promise(function( ok, no ){

		jhttp().request({

			method   : 'post',
			url      : opt.jwt.token_uri,
			output	 : 'json',
			data     : {
				content : {
					grant_type : 'urn:ietf:params:oauth:grant-type:jwt-bearer',
					assertion  : token
				}
			}

		})
		.then(function(d){ ok(d.body); })
		.fail(function(e){ 
			no(new Error(e.body.error_description||e.text||e)); 
		});

	});

};

module.exports = exports = function(opt){
	return new gjwt(opt);
}