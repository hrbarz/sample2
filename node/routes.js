module.exports = function(server){  


	//Definiendo rutas para "tasklist"

	tasklist = require('./views/tasklist');

    server.get(
    	
    	'/tasklist', tasklist.list);  

    server.get(
    	
    	'/tasklist/:id', tasklist.find);

	server.post(
		
		'/tasklist', tasklist.tasklist);

	// Otros

	


}