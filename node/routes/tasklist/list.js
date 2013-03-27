module.exports = function(req,res){

		res.header("Access-Control-Allow-Origin", config.AccessControlAllowOrigin); 
		res.header("Access-Control-Allow-Headers", "X-Requested-With");

        //db.connect();

		db = require('mongoose');

		db.connect(config.creds.mongoose_auth,{ server: { poolSize: 1 }});

      	var Tasklist  = require('../../models/tasklist')(db);

      	var Task  = require('../../models/task')(db);



        Tasklist.find(function(err, records) {


        	records.forEach(function(result){
        		
        		
        	});


        	res.send(result);
        	db.connection.close();

        });  
		
}
