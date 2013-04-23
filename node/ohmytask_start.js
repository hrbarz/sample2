module.exports = function(){  

	var express 	= require('express');
	var MongoStore 	= require('connect-mongo')(express);

	var server 		= express();

	// simple logger
	/*app.use(function(req, res, next){
	  console.log('%s %s', req.method, req.url);
	  next();
	});*/

	server.use(express.cookieParser());

	server.use(express.session({
		secret: 'secretblablabla',
		store: new MongoStore({
			db: 'ohmytask'
		}),
		maxAge: 1000*60*5
	}));



	server.use(express.bodyParser());

	server.use(express.static('../public'));

	server.get('/test/:algo',function(req, res){

		req.session.algo = req.params.algo;

		res.send('OK')

	}); 

	server.get('/algo',function(req, res){

		res.send(req.session.algo)

	}); 


	// respond
	///server.use(function(req, res, next){
	//  res.send('Hello World');
	//});

	server.listen(3001);

	return server;
}