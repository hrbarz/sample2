var config = require('./config');

var restify = require('restify');  

var mongoose = require('mongoose');
	
	mongoose.connect(config.creds.mongoose_auth);
	
	
//var io 		= require('socket.io');

var server = restify.createServer();
	
	server.name = config.server_name; //opcional

	server.use(restify.bodyParser());

	server.listen(3000, function() {
	
		console.log('%s listening at %s', server.name, server.url);
	
	});

var	routes = require('./routes')(server);  
