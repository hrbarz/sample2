var Tasklist = require('../models/tasklist');  

module.exports = {  
      
    tasklist: function(req, res){
       //res.header("Access-Control-Allow-Origin", "*");
       //res.header("Access-Control-Allow-Headers", "X-Requested-With");
        var tasklist = new Tasklist({
                            name: req.params.name, 
                            description: req.params.description
                        }); 

            tasklist.save();
        
        res.end();
    },  

    list: function(req, res){  
        
        Tasklist.find(function(err, result) {  
            res.send(result);  
        });  

    },

    find: function(req, res) {  
        
        Tasklist.findOne({_id: req.params.id}, function(error, result) {  
            res.send(result);  
        });

    }
}  