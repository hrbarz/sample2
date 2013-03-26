module.exports = function(){  

	/*Load Config*/
	var config 		= require('./config');

	/*Modules*/
	var restify 	= require('restify');  

	var mongoose = require('mongoose').connect(config.creds.mongoose_auth,{ server: { poolSize: 1 }});
	/*Creating Server*/
	var server = restify.createServer();
		
		server.name = config.server_name; //opcional

		server.use(restify.bodyParser());

		server.listen(3000, function() {
		
			console.log('%s listening at %s', server.name, server.url);
		
		});

	return server;

}