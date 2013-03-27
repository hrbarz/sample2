module.exports = function(){  

	/*Load Config*/
	var config 		= require('./config');
	
		global.config = config;


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