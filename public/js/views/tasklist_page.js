define([
  'template',
  'collections/tasklist',
  'views/task_page',
  'views/modal'

  ], function(template,tasklist,task_page,modal_form) {

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

      create: function(){

          modal_form.show();

          modal_form.title.html('Create Task List');

          that = this;


          setTimeout(function () {

            console.log('create tasklist');

            modal_form.action_form.val('tasklist');

            modal_form.realy();


          },1000); 

      },

      delete: function(e){

          var id = this.get_id(e);

          if(confirm('You really want to delete?')){

              tasklist.delete(id);
             
              $('#item-tasklist-' + id).remove();
             
          }

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

      bind_actions: function(){

          that = this;


          /*Bind action in tasklist*/

          $('#btn-new-tasklist').on('click',function(){

              that.create();
                  
          });

          $('.btn-edit-tasklist').on('click',function(){

              that.edit(this);

          });

          $('.btn-delete-tasklist').on('click',function(){

              that.delete(this);

          });


          /*Bind action in task*/

          $('.btn-new-task').on('click',function(){

              task_page.create(this);

          });

          $('.btn-edit-task').on('click',function(){

              task_page.edit(this);

          });

          $('.check-task').bind('change',function(){ console.log(this);

              task_page.check_task(this);
              
          });

          $('.btn-delete-task').on('click',function(){

              task_page.delete(this);
          });


      }

 }
});