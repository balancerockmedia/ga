'use strict';

var taskManager = {};

// helpers
taskManager.updateCategories = function(category) {
    if (category === '') {
        return;
    }
    
    var categoryField = $('select[name="category"]');
    
    categoryField.append('<option value="'+category+'">'+category+'</option>');
    categoryField.val(category);
};
 
taskManager.updateTasks = function(task, category) {
    if (category === '' || category === '') {
        return;
    }
    
    $('<li><a href="#">'+task+'</a></li>').appendTo('#taskList ul').hide().fadeIn();
};

// events
taskManager.submitCategoryForm = function(e) {
    e.preventDefault();
    
    var categoryField = $(this).find('input[name="category"]');
    
    taskManager.updateCategories(categoryField.val());
    
    categoryField.val('');
};

taskManager.submitTaskForm = function(e) {
    e.preventDefault();
    
    var task = $(this).find('input[name="task"]').val();
    var category = $(this).find('select[name="category"]').val();
    
    taskManager.updateTasks(task, category);
    
    $(this).find('input[name="task"]').val('');
    $(this).find('select[name="category"]').val('');
};

taskManager.clickTaskItem = function(e) {
    e.preventDefault();
    
    $(e.target).toggleClass('completed');
};

taskManager.clickRemoveCompleted = function(e) {
    e.preventDefault();
    
    $('#taskList ul a.completed').parent().fadeOut(function() {
        $(this).remove();
    });
};

// init
taskManager.init = function() {
    $('#categoryForm').on('submit', taskManager.submitCategoryForm);
    
    $('#taskForm').on('submit', taskManager.submitTaskForm);
    
    $('#taskList ul').on('click', 'a', taskManager.clickTaskItem);
    
    $('#removeCompleted').on('click', taskManager.clickRemoveCompleted);
};

// DOM ready
$(function() {
    taskManager.init();
});