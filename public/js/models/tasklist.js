define([
  'underscore',
  'backbone'
], function(_, Backbone) {

		var Tasklist = Backbone.Model.extend({
			
			//idAttribute: "_id",
        
        	urlRoot: 'http://sample2.dev:3000/tasklist',

        	/*urlRoot: function(){
				if (this.isNew()){
					return "http://sample2.dev:3000/tasklist";
				} else {
					return "http://sample2.dev:3000/tasklist/" + this.id;
				}
			}*/
  		
  		});
	
	return Tasklist;

});