module.exports = function(req,res){

    res.header("Access-Control-Allow-Origin", '*'); 
    res.header("Access-Control-Allow-Headers", "X-Requested-With");

      	var Task  		= require('../../models/task')(db);

        var allcount = [];

        Task.count(
        	 { 
        		 tasklist:req.params.id
        		,priority:0
                ,status:'pending'
        	 }
        	, function (err, count) {

                allcount.push(count);

                Task.count(
                     { 
                         tasklist:req.params.id
                        ,priority:1
                        ,status:'pending'
                     }
                    , function (err, count) {

                        allcount.push(count);

                        Task.count(
                             { 
                                 tasklist:req.params.id
                                ,priority:2
                                ,status:'pending'
                             }
                            , function (err, count) {

                                allcount.push(count);

                                Task.count(
                                     { 
                                         tasklist:req.params.id
                                        ,priority:3
                                        ,status:'pending'
                                     }
                                    , function (err, count) {

                                        allcount.push(count);

                                        res.send({name: 'all',count:allcount});
                                        
                                });
                        });
                });       
        });
		
}

