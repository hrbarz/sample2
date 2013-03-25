define([
  'underscore',
  'backbone'
], function(_, Backbone) {

		var Tasklist = Backbone.Model.extend({
        
        	url: 'http://sample2.dev:3000/tasklist'
  		
  		});
	
	return Tasklist;

});