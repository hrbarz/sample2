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
				
					return  $(e.target).attr('data-value');
	            
	            },

	            el_tasklist	: function(idparent){
	            	return '#accordion' + idparent;
	            },

	            el_task 	: function(id){
	            	return '#item-task-' + id;
	            },

	            create 		: function(e){

					var idparent = this.get_id(e);

					

                	modal_form.show({action_save:this.save_data,task:true});

					modal_form.title.html('Create Task');

					modal_form.set_data({
							action 	:'task',
							idparent:idparent,
							priority: 0
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

					data.tags = get_hash_tags_text(data.name + ' ' + data.description);

					task.save(data, {
				       
				        success: function (task) {

				            if(modal_form.id_form.val() == ''){
							
								modal_form.id_form.val(task.toJSON()._id);

								//console.log('#accordion' + data.tasklist + '_' + task.toJSON().priority);
								   
								$('#accordion_' + data.tasklist + '_' + task.toJSON().priority).prepend(_.template(taskTemplate, {task: task.toJSON(), _:_}));
							
							}else{

								var blockpriority = $('#accordion_' + data.tasklist + '_' + task.toJSON().priority + ' '+ '#item-task-' + task.toJSON()._id);

								if(blockpriority.html() !== undefined){

									$('#item-task-' + task.toJSON()._id ).replaceWith(_.template(taskTemplate, {task: task.toJSON(), _:_}));

								}else{

									$('#item-task-' + task.toJSON()._id).remove();

									$('#accordion_' + data.tasklist + '_' + task.toJSON().priority).prepend(_.template(taskTemplate, {task: task.toJSON(), _:_}));


								}

								

							}

                            modal_form.hide_alert();


                            $("abbr.timeago").timeago();
                            $(".accordion-inner p").url2Link();                       


				        }
				    });

				},

				edit: function(e){

	            
	                var id = this.get_id(e);

	                modal_form.show({action_save:this.save_data,task:true});

	                modal_form.title.html('Edit Task');

	                var task = new TaskModel({id: id});

	                    task.fetch({
	                   
	                        success: function (task,data) {

	                            modal_form.set_data({
	                                id          : data._id,
	                                name        : data.name,
	                                description : data.description,
	                                idparent	: data.tasklist,
	                                priority	: data.priority,
	                                action      : 'task'
	                            });
	                                                
	                            modal_form.realy();

	                        }
	                    })


	            }, 

        		check : function(e){

        			var id = this.get_id(e);
        			var btn_check = $(e.target);


                	if(btn_check.attr('value') == undefined){ //Fix Event Click <button> OR <i>
                		
                		btn_check = btn_check.parent();
                		id = btn_check.attr('data-value');
                		
                	}

	                

		            var title_task = $('#title-task-'+ id );

	                if(title_task !== undefined){



	                    if( btn_check.attr('value') == 'finish' ){
	                        
	                        this._check(id,function(){
	                        	
	                        	title_task.addClass('cross-out');
	                        	
	                        	btn_check.removeClass('btn-danger');
	                        	btn_check.addClass('btn-success');

	                        	btn_check.find('i').removeClass('icon-thumbs-down');
	                        	btn_check.find('i').addClass('icon-thumbs-up');

	                        	btn_check.attr('value','pending');

	                        });
	                    
	                    }else{
	                        
	                        this._undo_check(id,function(){

	                        	title_task.removeClass('cross-out');

	                        	btn_check.addClass('btn-danger');
	                        	btn_check.removeClass('btn-success');

	                        	btn_check.find('i').addClass('icon-thumbs-down');
	                        	btn_check.find('i').removeClass('icon-thumbs-up');

	                        	btn_check.attr('value','finish');	                        	

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

	            deletes: function(e){

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