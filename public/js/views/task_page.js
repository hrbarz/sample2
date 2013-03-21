define([
  'template',
  'views/modal'

  ], function(template,modal_form) {

    return {

      get_id : function(e){

          return  $(e).attr('data-value');

      },

      
      check_task : function(e){

          var id = this.get_id(e);

          var title_task = $('#title-task-'+ id );

          if(title_task !== undefined)
          {
            if( $(e).is(':checked') )
            {
                task.check(id);

                title_task.addClass('cross-out');
            }else{
                task.undo_check(id);

                title_task.removeClass('cross-out');
            }
          }

      },


      edit: function(e){

          var id = this.get_id(e);

          console.log(modal_form);

          modal_form.show();

          modal_form.title.html('Edit Task');

          task.get_data(id,function(data){

              $('#modal_id_form').val(data.id);

              $('#modal_name').val(data.name);
              
              $('#modal_description').val(data.description);
              
              $('#action_form').val('tasklist');

              modal_form.realy();
          
          });

          /*setTimeout(function () {

          },1000); */

      }, 
     
      create: function(e){

          var idparent = this.get_id(e);

          modal_form.show();

          modal_form.title.html('Create Task');


          $('#modal_idparent_form').val(idparent);

          console.log('create tasklist');

          modal_form.action_form.val('task');


          modal_form.realy();
          

      },

      save_data: function(){

          modal_form.show_alert();

          data = {
              'name'        : $('#modal_name').val(),
              'description' : $('#modal_description').val()
          };

          task.save_data(data,function(data){

              console.log('Task save.');

              data.id = 10;

              var list = {
                  'tasks': [data]
              };

              info = template.action(list,template.get('.accordion'));

              $('#item-tasklist-0 .accordion').prepend(info);

              setTimeout(function() {

                 modal_form.hide_alert();

              },2000);
              
          });

      },

      delete: function(e){

          var id = this.get_id(e);

          if(confirm('You really want to delete?')){

              task.delete(id);
             
              $('#item-task-' + id).remove();
             
          }

      }
  }
});