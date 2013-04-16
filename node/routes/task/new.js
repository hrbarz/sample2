module.exports = function(req,res){

	//res.header("Access-Control-Allow-Origin", config.AccessControlAllowOrigin); 
	//res.header("Access-Control-Allow-Headers", "X-Requested-With");

	if(req.body !== undefined){
		req.params = req.body;
	}
	
	var Tasklist 	= require( '../../models/tasklist' )(db);

   	var Task  		= require( '../../models/task')(db);

   	var Tag  		= require( '../../models/tag')(db);

	
	if(req.params.tasklist !== undefined ){

		Tasklist.findById(req.params.tasklist, function(err, tasklist){
			
			if (err) { return next(err); }

			if (tasklist == null){ return res.send({error:true,description:'tasklist no exist'});}			


			if(req.params.tags !== undefined || req.params.tags !== null ){

				var Tags = [];

				for (var i = 0; i < req.params.tags.length; i++) {
					
					Tags[i] = new Tag({_id:req.params.tags[i]});
					Tags[i].save();

				};
			}			


			var task = new Task({
				name: req.params.name, 
				description: req.params.description,
				tasklist: req.params.tasklist,
				tags: req.params.tags
			});

						
			task.save(function (err) {

				tasklist.tasks.push(task._id);
				
				tasklist.save(function(err) {
					if (err) { return next(err); }

					res.send(task.toJSON());

				});

			});
		});
	}		
}

