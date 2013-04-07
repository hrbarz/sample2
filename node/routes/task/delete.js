module.exports = function(req,res){

	res.header("Access-Control-Allow-Origin", config.AccessControlAllowOrigin); 
	res.header("Access-Control-Allow-Headers", "X-Requested-With");

	
	var Tasklist 	= require( '../../models/tasklist' )(db);

   	var Task  		= require( '../../models/task')(db);
	
	if(req.params.id !== undefined ){

		
		Task.findById(req.params.id, function(err,task){

			if (err) { return next(err); }


			if (task == undefined ) { return res.end() }

			Tasklist.findById(task.tasklist, function(err, tasklist){

				tasklist.tasks.remove(req.params.id);

				tasklist.save(function(err) {
				
					if (err) { return next(err); }

					task.remove(function(err) {

						res.end();

					});

					
				});

				
			});
		
		});
			
	}		
}

