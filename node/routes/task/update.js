module.exports = function(req,res){

	res.header("Access-Control-Allow-Origin", config.AccessControlAllowOrigin); 
	res.header("Access-Control-Allow-Headers", "X-Requested-With");

   	var Task  		= require( '../../models/task')(db);
   	var Tag  		= require( '../../models/tag')(db);

	if(req.body !== undefined){
		req.params = req.body;
	}   	
	
	if(req.params.id !== undefined ){



		
		if(req.params.tags !== undefined && req.params.tags !== null ){

			var Tags = [];

			for (var i = 0; i < req.params.tags.length; i++) {
				
				Tags[i] = new Tag({_id:req.params.tags[i]});
				Tags[i].save();

			};
		}

	
		Task.findById(req.params.id, function(err, task){

			if (err) { return next(err); }

			if(req.params.name !== null && req.params.name !== undefined)
				task.name = req.params.name;
			
			if(req.params.description !== null && req.params.description !== undefined)
				task.description = req.params.description;

			if(req.params.status !== null && req.params.status !== undefined)
				task.status = req.params.status;

			if(req.params.tags !== undefined)
				task.tags = req.params.tags;

			task.updated_at = Date();

			task.save(function (err) {
				
				if (err) { return next(err); }


				

				res.send(task.toJSON());
			
			});
		});



	}		
}