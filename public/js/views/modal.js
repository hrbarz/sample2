define(function() {
  return {

      reset: function(){

          $('#modal_name').val('');
          $('#modal_description').val('');
          $('#modal_priority').val(0);
          $('#action_form').val('');
          $('#modal_id_form').val('');
          $('#modal_idparent_form').val('');

          $('.mondal-list-priority button').removeClass('active');
          $('.mondal-list-priority button').each(function(){

              if($(this).attr('value') == 0){
                $(this).addClass('active');
              }

          });

      },

      show: function(params){

        

        if(params.task == true){
          
            $('.only_task').removeClass('hide');

        }else{

            $('.only_task').addClass('hide');          

        }

        this.reset();


        $('.save-changes-modal').unbind();

        $('.save-changes-modal').bind('click',function(){

            if(params.action_save !== undefined) params.action_save();

        });

        $('.modal').removeClass('hide');

        $('.modal-backdrop').removeClass('hide');

        $('.loading-modal').removeClass('hide');
          
        $('.container-modal').addClass('hide');

        document.getElementById('form_modal').reset();

        this.title = $('#myModalLabel');
        this.action_form = $('#form_modal #action_form');
        this.id_form = $('#modal_id_form');


        $('.close-modal').unbind();
        $('.close-modal').bind('click',function(){

           $('.modal').addClass('hide');
           $('.modal-backdrop').addClass('hide');
        });

      },

      realy: function(){

          $('.container-modal').removeClass('hide');     
          $('.loading-modal').addClass('hide');

      },

      show_alert: function(){

          $('#alert-modal').removeClass('hide');
          $('#alert-modal').addClass('alert-info');
          $('#alert-modal strong').html('Loading...');

      },

      hide_alert: function(){

            $('#alert-modal').removeClass('alert-info');

            $('#alert-modal strong').html('Saved!');
                
            setTimeout(function() {

              $('#alert-modal').addClass('hide');

            }, 400);
    
      },

      set_data: function(params){

            $('#modal_id_form').val(params.id);

            $('#modal_name').val(params.name);

            $('#modal_description').val(params.description);

            $('#action_form').val(params.action);

            $('#modal_idparent_form').val(params.idparent);

            $('.mondal-list-priority button').removeClass('active');
            $('.mondal-list-priority button').each(function(){

              if($(this).attr('value') == params.priority){
                $(this).addClass('active');
              }

              $('#modal_priority').val(params.priority);

            });

      },

      get_data: function(){

            return {
                    'id'          : $('#modal_id_form').val(),
                    'name'        : $('#modal_name').val(),
                    'description' : $('#modal_description').val(),
                    'idparent'    : $('#modal_idparent_form').val(),
                    'priority'    : $('#modal_priority').val()
                }

      }
  }
});