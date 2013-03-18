// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone'
], function($, _, Backbone) {
  
  var AppRouter = Backbone.Router.extend({
    routes: {
      // Define some URL routes
      'home': 'showHome',
      
      // Default
      '*actions': 'defaultAction'
    }
  });
  
  var initialize = function(){

    var app_router = new AppRouter;
    
    app_router.on('route:showHome', function(){
   
      alert('datos home');

    });

    app_router.on('route:defaultAction', function (actions) {
   
      alert('a todo');
       //var taskListView = new TaskListView();
       //taskListView.render();

    });



    Backbone.history.start();
  };
  return { 
    initialize: initialize
  };
});
