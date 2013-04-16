module.exports = function(req,res){

	res.header("Access-Control-Allow-Origin", config.AccessControlAllowOrigin); 
	res.header("Access-Control-Allow-Headers", "X-Requested-With");

   	var Tasklist  = require( '../../models/tasklist')(db);
   	var Task 	  = require( '../../models/task')(db);

	if(req.body !== undefined){
		req.params = req.body;
	}
	
	if(req.params.id !== undefined ){

		Tasklist
			.findOne({ _id: req.params.id })
        	.select('_id name description tasks')
			.populate({
	            path    : 'tasks',
	            select  : '_id tasklist name description status',
	            options : { sort: [['created_at', -1 ]] }
	         })
			.exec(function(err, tasklist){
				
				if (err) { return next(err); }

				tasklist.name = req.params.name;
				tasklist.description = req.params.description;
				
				tasklist.updated_at = Date();

				tasklist.save(function (err) {
				
					if (err) { return next(err); }

					res.send(tasklist.toJSON());
				
				});
			});
	}		
}