define([
    'jquery',
    'underscore',
    'backbone',
    'collections/tasklist',
    'models/tasklist',
    'text!templates/tasklist.html',
    'views/taskView',
    'views/modal'
    ], function($,_,Backbone,TasklistCollection,TasklistModel,tasklistTemplate,TaskView,modal_form) {

        var taskView = new TaskView();

        var Tasklist = Backbone.View.extend({

            el: '#list-tasklist',

            events: {
                "click .btn-edit-tasklist"      : "edit",
                "click .btn-delete-tasklist"    : "delete",

                "change .check-task"            : "check_task",
                "click .btn-new-task"           : "create_task",
                "click .btn-delete-task"        : "delete_task",
                "click .btn-edit-task"          : "edit_task",

            },

            initialize: function(){
               
                //this.render();
            
            },

            render: function () {

                var that = this;

                $('#btn-new-tasklist').on('click',function(){
                      that.create();                        
                });

                var tasklistAll = new TasklistCollection();             
                    tasklistAll.fetch({

                        data: {page:1},

                        success: function(tasklist,data) {

                            $(that.el).html(_.template(tasklistTemplate, {list: data, _:_}));

                        }

                    });

            },

            get_id: function(e){
                 return  $(e.srcElement).attr('data-value');
            },
            
            delete: function(e){

                var id = this.get_id(e);

                if(confirm('You really want to delete?')){

                    //tasklist.delete(id);
                 
                    $('#item-tasklist-' + id).remove();
                 
                }

            },

            save_data: function(){

                modal_form.show_alert();

                var data = modal_form.get_data();

                if(_.isUndefined(data.id)){
                
                    var tasklist = new TasklistModel();
                
                }else{
                
                    var tasklist = new TasklistModel({id: data.id});                
                
                }
                    tasklist.save(data, {
                        
                        success: function (model) {
                            modal_form.hide_alert();                        
                        }

                    });

            },

            create: function(){

                modal_form.show({action_save:this.save_data});

                modal_form.title.html('Create Task List');
                
                setTimeout(function () {

                    console.log('create tasklist');

                    modal_form.action_form.val('tasklist');

                    modal_form.realy();


                },1000); 

            },

            edit: function(e){

                that = this
            
                var id = this.get_id(e);

                modal_form.show({action_save:this.save_data});

                modal_form.title.html('Edit Task List');

                var tasklist = new TasklistModel({id: id});

                    tasklist.fetch({
                   
                        success: function (tasklist,data) {

                            modal_form.set_data({
                                id          : data._id,
                                name        : data.name,
                                description : data.description,
                                action      : 'tasklist'
                            });
                                                
                            modal_form.realy();

                        }
                    })


            },            

            check_task: function(e){ taskView.check(e) },
            delete_task: function(e){ taskView.delete(e) },
            create_task: function(e){ taskView.create(e)},
            edit_task: function(e){ taskView.edit(e)},
            

       });


       return Tasklist;

/*
  return {

      get_id : function(e){

          return  $(e).attr('data-value');

      },

      initialize: function(){

          that = this;


          template.ini();

          tasklist.get_list({},function(data) {

              
              if(data !== undefined)
              {

                info = template.action(data , template.source);

                $('#list-tasklist').html(info);

                that.bind_actions();


              }else{

                console.log('No hay datos');

              }
          });

      },

      edit: function(e){

          var id = this.get_id(e);

          modal_form.show();

          modal_form.title.html('Edit Task List');

          that = this;



          tasklist.get_data(id,function(data){

              $('#modal_id_form').val(data.id);

              $('#modal_name').val(data.name);
              $('#modal_description').val(data.description);
              
              $('#action_form').val('tasklist');


              modal_form.realy();
          
          });
      },

      

      

      save_data: function(){

          modal_form.show_alert();

          data = {
              'name'        : $('#modal_name').val(),
              'description' : $('#modal_description').val()
          };

          tasklist.save_data(data,function(){

              console.log('Tasklis save.');

              setTimeout(function() {

                 modal_form.hide_alert();

              },2000);
              
          });

      },

     

 }*/





});