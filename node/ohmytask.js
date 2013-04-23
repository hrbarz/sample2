/*Load Config*/
var config 		= require('./ohmytask_config');

	global.config = config;


var db = require('mongoose');
	
	db.connect(config.creds.mongoose_auth,{ server: { poolSize: 1 }});

	global.db = db;
	//db.connection.close();


var server = require('./ohmytask_start')();

	require('./routes')(server);  
