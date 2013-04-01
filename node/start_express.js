module.exports = function(){  

	var express = require('express');
	var server = express();

	// simple logger
	/*app.use(function(req, res, next){
	  console.log('%s %s', req.method, req.url);
	  next();
	});*/

	server.use(express.static('../public'))



	// respond
	///server.use(function(req, res, next){
	//  res.send('Hello World');
	//});

	server.listen(3000);

	return server;
}