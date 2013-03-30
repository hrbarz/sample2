module.exports = function(mongoose){ 

	var Schema = mongoose.Schema;

	var taskSchema = new Schema({
							tasklist: { type: Schema.Types.ObjectId, ref: 'Tasklist' },
						    name: String,  
						    description: String ,
						    created_at: { type: Date, default: Date.now },
						    updated_at: { type: Date, default: Date.now }
						});

	try {
		
		return mongoose.model('Task'); 
	
	} catch (e) {
	
		return mongoose.model('Task', taskSchema); 
	}

}