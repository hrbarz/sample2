var config = require('../config');


var restify = require('restify');  
var server = restify.createServer();
	server.name = config.server_name;

	server.use(restify.bodyParser());
	
//var io 		= require('socket.io');

var mongoose = require('mongoose');
	mongoose.connect(config.creds.mongoose_auth)

var	routes = require('./router')(server);  



server.listen(3000, function() {
  console.log('%s listening at %s, love & peace', server.name, server.url);
});