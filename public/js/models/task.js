define([
  'underscore',
  'backbone'
], function(_, Backbone) {


		var Task = Backbone.Model.extend({
			
			//idAttribute: "_id",
        
        	urlRoot: 'http://sample2.dev/task',
  		
  		});
	
		return Task;

});