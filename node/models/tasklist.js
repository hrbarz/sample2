var mongoose = require('mongoose'),  
   
var Schema = mongoose.Schema;  
  
var tasklistSchema = new Schema({  
						    name: String,  
						    description: String ,
						    created_at: { type: Date, default: Date.now },
						    updated_at: { type: Date, default: Date.now }
						});  
  
module.exports = mongoose.model('Tasklist', tasklistSchema);  