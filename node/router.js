module.exports = function(server){  
      
    var Tasklist = require('./models/tasklist');  

    tasklist = function(req, res){
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "X-Requested-With");

        var tasklist = new Tasklist({
                            name: req.params.name, 
                            description: req.params.description
                        });  
        tasklist.save();  
        res.end();  
    };  

    list = function(req, res){  
        
        res.header("Access-Control-Allow-Origin", "*"); 
        res.header("Access-Control-Allow-Headers", "X-Requested-With")
        
        Tasklist.find(function(err, result) {  
            res.send(result);  
        });  

    };  

    find = (function(req, res) {  
        
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "X-Requested-With");
        
        Tasklist.findOne({_id: req.params.id}, function(error, result) {  
            res.send(result);  
        })  
    });  

    server.post('/tasklist', tasklist);  
    server.get('/tasklist', list);  
    server.get('/tasklist/:id', find);  
}  