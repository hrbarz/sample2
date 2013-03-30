// Filename: app.js
define([
    'jquery',
    'underscore', 
    'backbone',
    'router',
    'bootstrap' // Request router.js
    ], function($, _, Backbone, Router,bootstrap){
        
        var initialize = function(){
        
            Router.initialize();

            bootstrap.initialize();
        };

        return { 
            initialize: initialize
        };
});
