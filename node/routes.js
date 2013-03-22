module.exports = function(server){  

	tasklist = require('./routes/tasklist');

    server.get('/tasklist', tasklist.list);  
    server.get('/tasklist/:id', tasklist.find);
	server.post('/tasklist', tasklist.tasklist);

}