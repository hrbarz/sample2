module.exports = function(){  

	/*Modules*/
	var restify 	= require('restify');  

	/*Creating Server*/
	var server = restify.createServer();
		
		server.use(restify.bodyParser());

		server.listen(3000, function() {
		
			console.log('%s listening at %s', server.name, server.url);
		
		});

	return server;

}