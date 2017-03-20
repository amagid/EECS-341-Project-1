$(document).ready(function() {
    $('#submit_custom').click(function() {
        $.post('/custom', { query: $(this).sibings('.custom_query').val() }, function(result) {
            $(this).siblings('.output').text(result);
        });
    });

    $('#submit_1').click(function() {
        
    });
    
    $('#submit_2').click(function() {

    });
    
    $('#submit_3').click(function() {

    });
    
    $('#submit_4').click(function() {

    });
    
    $('#submit_5').click(function() {

    });
});