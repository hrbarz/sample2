define(function() {
  return {

      show: function(){

          $('.modal').removeClass('hide');

          $('.modal-backdrop').removeClass('hide');

          $('.loading-modal').removeClass('hide');
          
          $('.container-modal').addClass('hide');

          document.getElementById('form_modal').reset();

          this.title = $('#myModalLabel');
          this.action_form = $('#form_modal #action_form');

          $('.close-modal').on('click',function(){

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
    
          }, 2000);


    
      }
  }
});