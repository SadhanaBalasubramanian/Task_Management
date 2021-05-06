angular.module("task_management",[]).controller("TaskListController",
function(){

    var taskList=this;

    taskList.task=[
        {text:" Angular project", done:false},
        {text:" Mongodb course", done:false},
        {text:" User management", done:false},
        {text:" Interview preparation", done:false},
        {text:" Mongodb course", done:false},
    ];

    taskList.addTask=function(){
        taskList.task.push({text:taskList.taskText,done:false});
        taskList.tasktext="";
    }

    taskList.remaining=function(){
        var count=0;
        angular.forEach(taskList.task,function(current_task){
            count += current_task.done ? 0:1
        });
        return count;
    };

    taskList.archive = function() {
        var oldTask = taskList.task;
        taskList.task = [];
        angular.forEach(oldTask, function(taskdel) {
          if (!taskdel.done) taskList.todos.push(taskdel);
        });
      };

})