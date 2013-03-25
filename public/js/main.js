// Filename: main.js
// Require.js allows us to configure shortcut alias
// Their usage will become more apparent futher along in the tutorial.
require.config({
  paths: {
    jquery      : 'libs/jquery/jquery-min',
    underscore  : 'libs/underscore/underscore-min',
    backbone    : 'libs/backbone/backbone-min',
    io          : 'libs/socket-io/socket-io-min',
    
    templates   : '../templates/',
  
    // Require.js plugins
    text        : 'libs/require/text',
    //order       : 'libs/require/order'

  },

  urlArgs : "bust="+new Date().getTime()
  
});

require([
  // Load our app module and pass it to our definition function
  'app',

], function(App){
  // The "app" dependency is passed in as "App"
  // Again, the other dependencies passed in are not "AMD" therefore don't pass a parameter to this function
  App.initialize();
});
