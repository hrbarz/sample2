module.exports = function(mongoose){ 

	var Schema = new mongoose.Schema({  
						    name: String,  
						    description: String ,
						    created_at: { type: Date, default: Date.now },
						    updated_at: { type: Date, default: Date.now }
						});

	try {
		
		return mongoose.model('Task'); 
	
	} catch (e) {
	
		return mongoose.model('Task', Schema); 
	}

}