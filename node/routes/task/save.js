module.exports = function(req,res){

		res.header("Access-Control-Allow-Origin", config.AccessControlAllowOrigin); 
		res.header("Access-Control-Allow-Headers", "X-Requested-With");

        var Tasklist  = require('../../models/tasklist')(db);

      	var Task  = require('../../models/task')(db);


        res.header("Access-Control-Allow-Origin", "http://sample2.dev"); 
        res.header("Access-Control-Allow-Headers", "X-Requested-With");

       
       if(req.params.tasklist !== undefined ){

             var task = new Task({
                            name: req.params.name, 
                            description: req.params.description,
                            tasklist: req.params.tasklist
                        });

              
                  task.save(function (err) {
                    
                     var tasklist = new Tasklist({ _id: req.params.tasklist});
                         tasklist.tasks.push(task._id);

                         console.log(tasklist);

                         tasklist.save(
                             function (err) {
                                 res.end();
                             }
                          );

                   

              });

            

       }

      
		
}

    