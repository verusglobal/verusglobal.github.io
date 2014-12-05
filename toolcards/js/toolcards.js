$('.carousel').carousel({
    interval: false
});

$(".carousel-inner").swipe({
    swipeLeft:function(event, direction, distance, duration, fingerCount) {
        $(this).parent().carousel('next');
    },
    swipeRight: function() {
        $(this).parent().carousel('prev');
    },
    threshold:75
});

$('[id^=carousel-selector-]').click( function(){
    var id_selector = $(this).attr("id");
    var id = id_selector.split('-')[2];
    id = parseInt(id);
    $('#carousel').carousel(id);
    $('[id^=carousel-selector-]').removeClass('selected');
    $(this).addClass('selected');
});

$('#carousel').on('slid', function (e) {
    var id = $('.item.active').data('slide-number');
    id = parseInt(id);
    $('[id^=carousel-selector-]').removeClass('selected');
    $('[id=carousel-selector-'+id+']').addClass('selected');
});

