define([
  'jquery',
  'underscore',
  'backbone',
  'models/task'
], function($, _, Backbone, TaskModel){
    
    var Task = Backbone.Collection.extend({
        
            model: TaskModel,
        
            url: '/task'
        });

    return Task;

});