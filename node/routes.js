module.exports = function(server){  


	//Definiendo rutas para "tasklist"

    server.post(
        '/tasklist', 
            require('./routes/tasklist/new'));
    
    server.get(
    	'/tasklist', 
    		require('./routes/tasklist/list')); 
    	
    server.get(
    	'/tasklist/:id',
    		require('./routes/tasklist/id'));    

    server.del(
    	'/tasklist', 
    		require('./routes/tasklist/delete'));

	server.put(
    	'/tasklist/:id',
    		require('./routes/tasklist/update'));



    

    server.post(
    	'/task', 
    		require('./routes/task/new'));

    server.get(
        '/task/:id',
            require('./routes/task/id'));    

    server.del(
    	'/task/:id',
    		require('./routes/task/delete'));

	server.put(
    	'/task/:id',
    		require('./routes/task/update'));

    	
    /*server.get(
    	'/tasklist/:id', tasklist.find);

	server.post(		
		'/tasklist', tasklist.save);
	*/
	// Otros

	//test upload
	server.put('/upload', respond);
	server.post('/upload', respond);

	function respond(req,res,next) {
		console.log(req.files);
		res.send('hello ');
	}

}