module.exports = function(req,res){

	 //res.header("Access-Control-Allow-Origin", config.AccessControlAllowOrigin); 
		//res.header("Access-Control-Allow-Headers", "X-Requested-With");

        var Task      = require('../../models/task')(db);


        Task
          .find({ tags: { $in : [req.params.name] } })
          .exec(function (err, result) {
              

              res.send(result);
          
          })

       /* Tasklist.find(function(err, records) {


        	res.send(records);

        });  */
		
}
