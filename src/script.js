$(document).ready(function () {
    $('#submit_custom').click(function () {
        var elem = $(this);
        var query = $(this).siblings('.custom_query').val();
        if (!query) {
            elem.siblings('.output').text("Query cannot be empty!");
        } else {
            $.post('/custom', {
                query: query
            }, function (result) {
                elem.siblings('.output').text(JSON.stringify(result, null, 4));
            });
        }
    });

    $('#submit_1').click(function () {
        var elem = $(this);
        var starName = $(this).siblings('.query').val();
        if (!starName) {
            elem.siblings('.output').text("Star Name cannot be empty!");
        } else {
            $.get('/q1', {
                starName: starName
            }, function (result) {
                elem.siblings('.output').text(JSON.stringify(result, null, 4));
            });
        }
    });

    $('#submit_2').click(function () {
        var elem = $(this);
        $.get('/q2', {}, function (result) {
            elem.siblings('.output').text(JSON.stringify(result, null, 4));
        });
    });

    $('#submit_3').click(function () {
        var elem = $(this);
        var studioName = $(this).siblings('.query').val();
        if (!studioName) {
            elem.siblings('.output').text("Studio Name cannot be empty!");
        } else {
            $.get('/q3', {
                studioName: studioName
            }, function (result) {
                elem.siblings('.output').text(JSON.stringify(result, null, 4));
            });
        }
    });

    $('#submit_4').click(function () {
        var elem = $(this);
        $.get('/q4', {}, function (result) {
            elem.siblings('.output').text(JSON.stringify(result, null, 4));
        });
    });

    $('#submit_5').click(function () {
        var elem = $(this);
        $.get('/q5', {}, function (result) {
            elem.siblings('.output').text(JSON.stringify(result, null, 4));
        });
    });
});