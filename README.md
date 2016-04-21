
# google-jwt-promise


Google JWT Oauth-token retrieval with promise.

```
npm install --save google-jwt-promise
```

## Usage
```js

var jwtAuth = require('google-jwt-promise');

var jwtFile = '/your/jwt/file.json';

jwtAuth({
	
	jwt   : require( jwtFile ),
	scope : [
		'https://www.googleapis.com/auth/devstorage.full_control',
		'https://www.googleapis.com/auth/something',
	]

}).then(function(d){
	
	console.log(d);
/*
	{ 
		access_token: 'ya29..ywJJZ_Kt0o-...........',
		token_type: 'Bearer',
		expires_in: 3600 
	}
*/

});

```