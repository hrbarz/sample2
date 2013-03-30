module.exports = function(req,res){

	res.header("Access-Control-Allow-Origin", config.AccessControlAllowOrigin); 
	res.header("Access-Control-Allow-Headers", "X-Requested-With");

   	var Tasklist  = require( '../../models/tasklist')(db);
	
	if(req.params.id !== undefined ){

		Tasklist.findById(req.params.id, function(err, tasklist){
			
			if (err) { return next(err); }

			tasklist.name = req.params.name;
			tasklist.description = req.params.description;
			tasklist.updated_at = Date();

			tasklist.save(function (err) {
			
				if (err) { return next(err); }

				res.end();
			
			});
		});
	}		
}