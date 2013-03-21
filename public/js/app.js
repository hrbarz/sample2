// Filename: app.js
define([
  'jquery',
  'underscore', 
  'backbone',
  'router',
  'bootstrap' // Request router.js
], function($, _, Backbone, Router,bootstrap){
  var initialize = function(){
    // Pass in our Router module and call it's initialize function
    Router.initialize();

    bootstrap.initialize();
  };

  return { 
    initialize: initialize
  };
});
