var jobBoard = {
    init: function() {
        $.getJSON('http://localhost:3000/jobs').done(function(response) {
            $('#container').text(response.message);
        });
    }
};

$(function() {
    jobBoard.init();
});