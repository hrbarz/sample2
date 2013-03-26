module.exports = function(server){  


	//Definiendo rutas para "tasklist"

	tasklist = require('./views/tasklist');

    server.get(
    	'/tasklist', tasklist.list);  

    server.get(
    	'/tasklist/:id', tasklist.find);

	server.post(		
		'/tasklist', tasklist.save);

	// Otros

	//test upload
	server.put('/upload', respond);
	server.post('/upload', respond);

	function respond(req,res,next) {
		console.log(req.files);
		res.send('hello ');
	}

}