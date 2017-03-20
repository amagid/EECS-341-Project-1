$(document).ready(function() {
    $('#submit_custom').click(function() {
        var elem = $(this);
        $.post('/custom', { query: $(this).siblings('.custom_query').val() }, function(result) {
            elem.siblings('.output').text(JSON.stringify(result, null, 4));
        });
    });

    $('#submit_1').click(function() {
        var elem = $(this);
        $.get('/q1', { starName: $(this).siblings('.query').val() }, function(result) {
            elem.siblings('.output').text(JSON.stringify(result, null, 4));
        });
    });
    
    $('#submit_2').click(function() {
        var elem = $(this);
        $.get('/q2', {}, function(result) {
            elem.siblings('.output').text(JSON.stringify(result, null, 4));
        });
    });
    
    $('#submit_3').click(function() {
        var elem = $(this);
        $.get('/q3', { studioName: $(this).siblings('.query').val() }, function(result) {
            elem.siblings('.output').text(JSON.stringify(result, null, 4));
        });
    });
    
    $('#submit_4').click(function() {
        var elem = $(this);
        $.get('/q4', {}, function(result) {
            elem.siblings('.output').text(JSON.stringify(result, null, 4));
        });
    });
    
    $('#submit_5').click(function() {
        var elem = $(this);
        $.get('/q5', {}, function(result) {
            elem.siblings('.output').text(JSON.stringify(result, null, 4));
        });
    });
});