define([
  'underscore',
  'backbone'
], function(_, Backbone) {


		var Task = Backbone.Model.extend({
			
			//idAttribute: "_id",
        
        	url: '/task',
  		
  		});
	
		return Task;

});