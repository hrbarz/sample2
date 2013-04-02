module.exports = function(req,res){

	 //res.header("Access-Control-Allow-Origin", config.AccessControlAllowOrigin); 
		//res.header("Access-Control-Allow-Headers", "X-Requested-With");

        var Tasklist 	= require('../../models/tasklist')(db);

      	var Task  		= require('../../models/task')(db);


        Tasklist
            .find()
            .populate('tasks') // space delimited path names
            .exec(function (err, result) {
                
              if (err) return handleError(err);

                res.send(result);
            
            })

       /* Tasklist.find(function(err, records) {


        	res.send(records);

        });  */
		
}
