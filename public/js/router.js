// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone',
	'vm'
], function ($, _, Backbone, Vm) {
  var AppRouter = Backbone.Router.extend({
    routes: {
      '*actions': 'defaultAction' // All urls will trigger this route
    }
  });

  var initialize = function(options){
		
    var appView = options.appView;
    
    var router = new AppRouter(options);

		router.on('route:defaultAction', function (actions) {

      console.log(actions);
      
      require(['views/tasklistView'], function (ViewPage) {
        var viewPage = Vm.create(appView, 'ViewPage', ViewPage);
        viewPage.render();
      });

			/*require(['views/dashboard/page'], function (DashboardPage) {
        var dashboardPage = Vm.create(appView, 'DashboardPage', DashboardPage);
        dashboardPage.render();
      });*/
		
    });
    
  };
  return {
    initialize: initialize
  };
});
