define([
  'jquery',
  'underscore',
  'backbone',
  'models/task'
], function($, _, Backbone, TaskModel){
    
    var Task = Backbone.Collection.extend({
        
            model: TaskModel,
        
            url: '/task',

            get_count_priority: function(id,callback){

            	that = this;

	            $.ajax({

	                url: that.url + '/count_priority/'+ id ,
	                
                  success: function(data){

	                    callback(data);

	                }

	            });
	          }
        });

    return Task;

});