var jobBoard = {
    init: function() {
        $.getJSON('http://localhost:3000/jobs').done(function(response) {
            $.each(response.jobs, function() {
                $('#posts').append('<h2>' + this.title + '</h2>');
                $('#posts').append('<p>' + this.description + '</p>');
            });
            
            $('#formStatus').hide();
        });
    },
    
    contactForm: function() {
        $('form').on('submit', function(e) {
            e.preventDefault();
            
            var params = $('form').serialize();
            
            $.post('http://localhost:3000/contact', params).done(function(response) {
                $('#formContainer').html('<p>' + response.message + '</p>');
            });
        });
    }
};

$(function() {
    jobBoard.init();
    
    jobBoard.contactForm();
});