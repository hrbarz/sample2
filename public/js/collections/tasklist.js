define([
  'jquery',
  'underscore',
  'backbone',
  'models/tasklist'
], function($, _, Backbone, TasklistModel){
    
    var Tasklist = Backbone.Collection.extend({
        
        model: TasklistModel,
        
        url: '/tasklist',

        get_count_priority: function(id,priority,callback){

            $.ajax({

                url: '/tasklist/'+ id + '/count/' + priority,
                success: function(data){

                    callback(data);

                }

            });
        }
    });

  return Tasklist;
});

/*
define([
        'io'
    ],

    function(io) {

    return {

        get_data: function(req,res){

           

        },

        get_list: function(req,res){

            


        },

        save_data: function(data,fn_action){

            console.log(data);

            fn_action();

        },

        delete : function(id){

            console.log('Elemento tasklist '+ id +' borrado')

        }

    }


});*/