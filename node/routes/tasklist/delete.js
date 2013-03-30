module.exports = function(req,res){

	res.header("Access-Control-Allow-Origin", config.AccessControlAllowOrigin); 
	res.header("Access-Control-Allow-Headers", "X-Requested-With");

	
	var Tasklist 	= require( '../../models/tasklist' )(db);

   	var Task  		= require( '../../models/task')(db);
	
	if(req.params._id !== undefined ){		

		Task.remove({tasklist: req.params._id}, function(err, numberRemoved) {		
			//if(numberRemoved === 0) next(new Error("ID was not found."));
			
			Tasklist.remove({_id: req.params._id}, function(err, numberRemoved){

				res.end();

			});

		});

	}else{

		res.end({error:true,description:"no id"});

	}	
}

