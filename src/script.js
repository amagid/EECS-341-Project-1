$(document).ready(function() {
    $('#submit_custom').click(function() {
        $.post('/custom', { query: $(this).sibings('.custom_query').val() }, function(result) {
            $(this).siblings('.output').text(result);
        });
    });

    $('#submit_1').click(function() {
        $.get('/q1', { starName: $(this).siblings('.query').val() }, function(result) {
            $(this).siblings('.output').text(result);
        });
    });
    
    $('#submit_2').click(function() {
        $.get('/q2', {}, function(result) {
            $(this).siblings('.output').text(result);
        });
    });
    
    $('#submit_3').click(function() {
        $.get('/q3', { studioName: $(this).siblings('.query').val() }, function(result) {
            $(this).siblings('.output').text(result);
        });
    });
    
    $('#submit_4').click(function() {
        $.get('/q4', {}, function(result) {
            $(this).siblings('.output').text(result);
        });
    });
    
    $('#submit_5').click(function() {
        $.get('/q5', {}, function(result) {
            $(this).siblings('.output').text(result);
        });
    });
});