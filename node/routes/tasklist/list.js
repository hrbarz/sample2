module.exports = function(req,res){

	 //res.header("Access-Control-Allow-Origin", config.AccessControlAllowOrigin); 
		//res.header("Access-Control-Allow-Headers", "X-Requested-With");

        var Tasklist 	= require('../../models/tasklist')(db);

      	var Task  		= require('../../models/task')(db);


        Tasklist
            .find()
            .sort('-created_at')
            .select('_id name description tasks')
            .populate({
                path    : 'tasks',
                select  : '_id tasklist name description status',
                options : { sort: [['created_at', -1 ]] }
              })
            .exec(function (err, result) {
                
              if (err) return handleError(err);

                res.send(result);
            
            })

       /* Tasklist.find(function(err, records) {


        	res.send(records);

        });  */
		
}
