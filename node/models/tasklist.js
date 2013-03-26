module.exports = function(mongoose){ 

	var tasklistSchema = new mongoose.Schema({  
						    name: String,  
						    description: String ,
						    created_at: { type: Date, default: Date.now },
						    updated_at: { type: Date, default: Date.now }
						});

	try {
		
		return mongoose.model('Tasklist'); 
	
	} catch (e) {
	
		return mongoose.model('Tasklist', tasklistSchema); 
	}

}