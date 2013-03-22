define([
        'io'
    ],

    function(io) {

    return {

        get_data: function(req,res){

           

        },

        get_list: function(req,res){

            


            

            /*$.getJSON('/data_tasklist.php', function(data) {

                if(data == '' || data.length == 0) data = undefined;

                fn_action(data);

            });*/

        },

        save_data: function(data,fn_action){

            console.log(data);

            fn_action();

        },

        delete : function(id){

            console.log('Elemento tasklist '+ id +' borrado')

        }

    }


});