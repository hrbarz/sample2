module.exports = function(req,res){

		var config 		= require('../../config');

		res.header("Access-Control-Allow-Origin", "http://sample2.dev"); 
		res.header("Access-Control-Allow-Headers", "X-Requested-With");

		console.log('contenetado a tasklist');


        //db.connect();

		db = require('mongoose');

		db.connect(config.creds.mongoose_auth,{ server: { poolSize: 1 }});

      	var Tasklist  = require('../../models/tasklist')(db);	


        Tasklist.find(function(err, result) {  

           db.connection.close();
           res.send(result);
        
        });  
		
}
