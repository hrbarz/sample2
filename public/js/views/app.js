define([
  'jquery',
  'underscore',
  'backbone',
  'vm',
	'events',
  'text!templates/base_tasklist.html',
  'bootstrap',
  'timeago',
], function($, _, Backbone, Vm, Events, layoutTemplate,Bootstrap,Timeago){
  var AppView = Backbone.View.extend({
    el: '#container',
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
