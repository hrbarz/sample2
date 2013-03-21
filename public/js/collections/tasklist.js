define([
        'io'
    ],

    function(io) {

    return {

        get_data: function(req,res){

            socket = io.connect('http://localhost:3000/task');

            socket.on('error', function (reason){
                console.error('Unable to connect Socket.IO', reason);
            });

            socket.on('connect', function(){

                console.log('search list');

                socket.emit('list',{id:req});

                socket.on('list_result',function (data){

                    console.log(data);

                    res(data);

                });

            });


        },

        get_list: function(req,res){

            socket = io.connect('http://localhost:3000/tasklist');

            socket.on('error', function (reason){
                console.error('Unable to connect Socket.IO', reason);
            });

            socket.on('connect', function(){

                console.log('Connected');

                socket.emit('get_list',{});

                socket.on('list_result',function (data){

                    res({'tasklist':data});

                });

            });


            

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