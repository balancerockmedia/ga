$(function() {
    $('#contact-form').on('submit', function() {
        var error = 0;
        
        if ($('input[name="name"]').val() === '') {
            $('input[name="name"]').addClass('invalid');
            
            error = 1;
        }
        
        if ($('input[name="email"]').val() === '') {
            $('input[name="email"]').addClass('invalid');
            error = 1;
        }
        
        if ($('textarea[name="comments"]').val() === '') {
            $('textarea[name="comments"]').addClass('invalid');
            error = 1;
        }
        
        if (error === 1) {
            alert('Oops! Please fill out the highlighted fields and try again...');
            
            return false;
        } else {
            return true;
        }
    });
    
    $('input[name="name"], input[name="email"], textarea[name="comments"]').on('focus', function() {
        $(this).removeClass('invalid');
    });
});