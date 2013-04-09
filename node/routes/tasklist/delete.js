module.exports = function(req,res){

	res.header("Access-Control-Allow-Origin", config.AccessControlAllowOrigin); 
	res.header("Access-Control-Allow-Headers", "X-Requested-With");

	
	var Tasklist 	= require( '../../models/tasklist' )(db);

   	var Task  		= require( '../../models/task')(db);
	
	if(req.params.id !== undefined ){		

		Task.remove({tasklist: req.params.id}, function(err, numberRemoved) {		
			//if(numberRemoved === 0) next(new Error("ID was not found."));
			if (err) { return next(err); }
			
			Tasklist.remove({_id: req.params.id}, function(err, numberRemoved){
				if (err) { return next(err); }
				
				res.end();

			});

		});

	}else{

		res.end({error:true,description:"no id"});

	}	
}

