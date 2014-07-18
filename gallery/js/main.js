// DOM ready
$(function() {
    $('#thumbs a').on('click', function() {
        //$('#thumbs img').css('border', 'none');
        //$(this).find('img').css('border', '1px solid red');
        
        /*$(this).find('img').css({
            'border': '1px solid red',
            'border-radius': '5px'
        });*/
            
        $('#thumbs img').removeClass('active');
        $(this).find('img').addClass('active');
        
        var newSrc = $(this).find('img').attr('src');
        
        $('#fullsize img').fadeOut(function() {
            $('#fullsize img').attr('src', newSrc).fadeIn();
        });
        
        var newCaption = $(this).find('img').data('caption');
        
        $('#fullsize p').text(newCaption);
    });
});