module.exports = function(req,res){

	//res.header("Access-Control-Allow-Origin", config.AccessControlAllowOrigin); 
	//res.header("Access-Control-Allow-Headers", "X-Requested-With");

	var Tasklist 	= require( '../../models/tasklist' )(db);

	if(req.body !== undefined){
		req.params = req.body;
	}
		
			
	var tasklist = new Tasklist({
		name: req.params.name, 
		description: req.params.description,
	});
	
	tasklist.save(function (err) {

		if (err) { return next(err); }

		res.send(tasklist.toJSON());

	});

}

