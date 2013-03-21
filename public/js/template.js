define([
  'handlebars'

  ], function(handlebars) {

  return {

      str_query: '#speakers-template',

      ini: function(){

           this.source   = $(this.str_query).html();

           $('body').append('<div id="tpl_resource" style="display:none">'+ this.source +'</div>');

           //$('#tpl_resource').html(this.source);
            
           
      },

      get: function(name){

            if(name)
            {
                return $('#tpl_resource').find(name).html();
            }
            else
            {
                return $('#tpl_resource').html();
            }

      },

      action: function(data,source){

          var complile = Handlebars.compile(source);
          
          return complile(data);

      }

 }
});