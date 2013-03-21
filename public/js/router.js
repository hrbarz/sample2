// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone',
  'views/tasklist_page'

], function($, _, Backbone,tasklist_page) {


  
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
   

    });

    app_router.on('route:defaultAction', function (actions) {

      tasklist_page.initialize();


      //alert('a todo'+ decodeURIComponent(actions));
       //var taskListView = new TaskListView();
       //taskListView.render();

    });

    Backbone.history.start({pushState: true, root: "/"});



    /*if (Backbone.history && Backbone.history._hasPushState) {
   
      // Use delegation to avoid initial DOM selection and allow all matching elements to bubble
      $(document).delegate("a", "click", function(evt) {

        // Get the anchor href and protcol
        var href = $(this).attr("href");
        var protocol = this.protocol + "//";
     
        // Ensure the protocol is not part of URL, meaning its relative.
        // Stop the event bubbling to ensure the link will not cause a page refresh.
        if (href.slice(protocol.length) !== protocol) {
          evt.preventDefault();
     
          // Note by using Backbone.history.navigate, router events will not be
          // triggered.  If this is a problem, change this to navigate on your
          // router.
            Backbone.history.navigate(href, true);
          }
        });
     
    }*/



  };
  return { 
    initialize: initialize
  };
});
