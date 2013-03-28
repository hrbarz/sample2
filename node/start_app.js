module.exports = function(){  

	/*Load Config*/
	var config 		= require('./config');
	
		global.config = config;


	var db = require('mongoose');
    	db.connect(config.creds.mongoose_auth,{ server: { poolSize: 1 }});

    	global.db = db;
		//db.connection.close();


	/*Modules*/
	var restify 	= require('restify');  

	/*Creating Server*/
	var server = restify.createServer();
		
		server.name = config.server_name; //opcional

		server.use(restify.bodyParser());

		server.listen(3000, function() {
		
			console.log('%s listening at %s', server.name, server.url);
		
		});

	return server;

}