define([
    'jquery',
    'underscore',
    'backbone',
    'collections/task',
    'models/task',
    'views/modal',
    'text!templates/task.html'
    ], function($,_,Backbone,TaskCollection,TaskModel,modal_form,taskTemplate) {

        	var Task = Backbone.View.extend({

        		get_id		: function(e){
				
					return  $(e.srcElement).attr('data-value');
	            
	            },

	            el_tasklist	: function(idparent){
	            	return '#accordion' + idparent;
	            },

	            el_task 	: function(id){
	            	return '#item-task-' + id;
	            },

	            create 		: function(e){

					var idparent = this.get_id(e);

                	modal_form.show({action_save:this.save_data});

					modal_form.title.html('Create Task');

					modal_form.set_data({
							action 	:'task',
							idparent:idparent 
						});



					modal_form.realy();


				},

				save_data: function(){

					that = this;

					modal_form.show_alert();

					data = modal_form.get_data();
					
					if(_.isUndefined(data.id) || data.id == '' ){
                
	                    var task = new TaskModel();
	                
	                }else{
	                
	                    var task = new TaskModel({id: data.id});                
	                
	                }

					data.tasklist = data.idparent;

	                delete data.id;
					delete data.idparent;

					task.save(data, {
				       
				        success: function (task) {

				            if(modal_form.id_form.val() == ''){
							
								modal_form.id_form.val(task.toJSON()._id);

								$('#accordion' + data.tasklist).prepend(_.template(taskTemplate, {task: task.toJSON(), _:_}));
							
							}else{

								$('#item-task-' + task.toJSON()._id ).replaceWith(_.template(taskTemplate, {task: task.toJSON(), _:_}));

							}

                            modal_form.hide_alert();

                            $("abbr.timeago").timeago();

				        }
				    });

				},

				edit: function(e){

	            
	                var id = this.get_id(e);

	                modal_form.show({action_save:this.save_data});

	                modal_form.title.html('Edit Task');

	                var task = new TaskModel({id: id});

	                    task.fetch({
	                   
	                        success: function (task,data) {

	                            modal_form.set_data({
	                                id          : data._id,
	                                name        : data.name,
	                                description : data.description,
	                                idparent	: data.tasklist,
	                                action      : 'task'
	                            });
	                                                
	                            modal_form.realy();

	                        }
	                    })


	            }, 

        		check : function(e){

	                var id = this.get_id(e);

		            e = $(e.srcElement);

		            var title_task = $('#title-task-'+ id );

	                if(title_task !== undefined){

	                    if( $(e).is(':checked') ){
	                        
	                        this._check(id,function(){
	                        	title_task.addClass('cross-out');
	                        });

	                        
	                    
	                    }else{
	                        
	                         this._undo_check(id,function(){
	                        	title_task.removeClass('cross-out');
	                        });

	                    }
	                }
	            },

	            _check: function (id,trigger){

	               	var task = new TaskModel({id: id});                
	                
					task.save({status:'finish'}, {
				       
				        success: function (task) {
				            trigger();
				        }
				    });          

	            },

	            _undo_check: function(id,trigger){

	                var task = new TaskModel({id: id});                
	                
					task.save({status:'pending'}, {
				       
				        success: function () {
				            trigger();
				        }
				    });    
	            },

	            delete: function(e){

					var id = this.get_id(e);

					if(confirm('You really want to delete?')){

						var task = new TaskModel({id:id});
						
						task.destroy({
					        success: function () {
					            $('#item-task-' + id).remove();
					        }
					    });

						

					}

				}

        	});

        	return Task;

});