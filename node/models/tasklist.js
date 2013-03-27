module.exports = function(mongoose){ 

	var Schema = mongoose.Schema;

	var tasklistSchema  = new Schema({  
						    name: String,  
						    description: String ,
						    tasks: [{ type: Schema.Types.ObjectId, ref: 'task' }],
						    created_at: { type: Date, default: Date.now },
						    updated_at: { type: Date, default: Date.now }
						});

	try {
		
		return mongoose.model('Tasklist'); 
	
	} catch (e) {
	
		return mongoose.model('Tasklist', tasklistSchema); 
	}

}