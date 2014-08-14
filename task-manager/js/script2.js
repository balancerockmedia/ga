'use strict';

var taskManager = {};

taskManager.data = {
    categories: [],
    tasks: []
};

taskManager.submitCategoryForm = function(e) {
    e.preventDefault();
    
    var category = $('input[name="category"]').val();
    
    // add to dropdown
    $('select[name="category"]').append('<option>'+category+'</option>');
    
    // add to data object
    taskManager.data.categories.push(category);
    
    // add to localStorage
    localStorage.setItem('data', JSON.stringify(taskManager.data));
};

taskManager.init = function() {
    // repopulate categories from localStorage
    var data = JSON.parse(localStorage.getItem('data'));
    
    if (data !== null) {
        taskManager.data = data;
    
        $.each(taskManager.data.categories, function() {
            $('select[name="category"]').append('<option>'+this+'</option>');
        });
    }
    
    $('#categoryForm').on('submit', taskManager.submitCategoryForm);
};

$(function() {
    taskManager.init();
});