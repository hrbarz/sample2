define([
  'jquery',
  'underscore',
  'backbone',
  'models/task'
], function($, _, Backbone, TaskModel){
    
    var Task = Backbone.Collection.extend({
        
            model: TaskModel,
        
            url: 'http://sample2.dev/task'
        });

    return Task;

});