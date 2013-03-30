module.exports = function(req,res){

		res.header("Access-Control-Allow-Origin", config.AccessControlAllowOrigin); 
		res.header("Access-Control-Allow-Headers", "X-Requested-With");

        var Task 	= require('../../models/task')(db);


        if(req.params.id !== undefined ){

            Task.findById(req.params.id, function (err, task) {
                //if (err) return next(err);

                res.send(task);

            });
        }
}
