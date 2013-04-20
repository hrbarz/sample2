module.exports = function(req,res){

        //var Tasklist 	= require('../../models/tasklist')(db);

      	var Task  		= require('../../models/task')(db);


        Task.count(
        	 { 
        		 tasklist:req.params.id
        		,priority:req.params.priority
        		,status:'pending'
        	 }
        	, function (err, count) {
            	
            	if (err) return handleError(err);
         
            	res.send({name: req.params.priority,count:count});
        
        });
		
}
