define([
  'jquery',
  'underscore',
  'backbone',
  'vm',
	'events',
  'text!templates/base_tasklist.html',
  'bootstrap'
], function($, _, Backbone, Vm, Events, layoutTemplate,Bootstrap){
  var AppView = Backbone.View.extend({
    el: '.container',
    initialize: function () {
      
    },
    render: function () {

      Bootstrap.initialize();

			var that = this;
      $(this.el).html(layoutTemplate);
      Backbone.history.start();
		} 
	});
  return AppView;
});
