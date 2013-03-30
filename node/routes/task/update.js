module.exports = function(req,res){

	res.header("Access-Control-Allow-Origin", config.AccessControlAllowOrigin); 
	res.header("Access-Control-Allow-Headers", "X-Requested-With");

   	var Task  		= require( '../../models/task')(db);
	
	if(req.params.id !== undefined ){

		Task.findById(req.params.id, function(err, task){
			
			if (err) { return next(err); }

			task.name = req.params.name;
			task.description = req.params.description;
			task.updated_at = Date();

			task.save(function (err) {
				
				if (err) { return next(err); }

				res.end();
			
			});
		});
	}		
}