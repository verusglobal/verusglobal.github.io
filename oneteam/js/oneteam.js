$(document).ready(function () {
    $("#footer").load("./footer.html"); 

        $(document).on('click', '.video-overlay', function() {
            var iframe = "<iframe allowfullscreen allowtransparency=\"true\" class=\"vzaar-video-player\" frameborder=\"0\" id=\"vzvd-2299698\" mozallowfullscreen name=\"vzvd-2299698\" src=\"http://view.vzaar.com/2299698/player\" title=\"vzaar video player\" type=\"text/html\" webkitallowfullscreen width=\"495\" height=\"275\"></iframe>";
            $.colorbox({ html: iframe});
        });

        $(document).on('click', '.video-overlay-small-1', function () {
            //Open modal with video content inside
            var iframe = " <iframe allowfullscreen allowtransparency=\"true\" class=\"vzaar-video-player\" frameborder=\"0\" id=\"vzvd-1462998\" mozallowfullscreen name=\"vzvd-1462998\" src=\"http://view.vzaar.com/1462998/player\" title=\"vzaar video player\" type=\"text/html\" webkitallowfullscreen width=\"495\" height=\"275\"></iframe>";
            $.colorbox({ html: iframe});
        });

        $(document).on('click', '.video-overlay-small-2', function () {
            //Open modal with video content inside
            var iframe = "<iframe allowfullscreen allowtransparency=\"true\" class=\"vzaar-video-player\" frameborder=\"0\" id=\"vzvd-1551614\" mozallowfullscreen name=\"vzvd-1551614\" src=\"http://view.vzaar.com/1551614/player\" title=\"vzaar video player\" type=\"text/html\" webkitallowfullscreen width=\"495\" height=\"275\"></iframe>";
            $.colorbox({ html: iframe});
        });

        $(document).on('click', '.video-overlay-small-3', function () {
            //Open modal with video content inside
            var iframe = "<iframe allowfullscreen allowtransparency=\"true\" class=\"vzaar-video-player\" frameborder=\"0\" id=\"vzvd-1551668\" mozallowfullscreen name=\"vzvd-1551668\" src=\"http://view.vzaar.com/1551668/player\" title=\"vzaar video player\" type=\"text/html\" webkitallowfullscreen width=\"495\" height=\"275\"></iframe>";
            $.colorbox({ html: iframe});
        });


    $(document).bind('cbox_closed', function () {
        //Close background overlay
        $(".modal-bg").hide();
    });
    $(document).bind('cbox_open', function () {
        //Open background overlay
        $(".modal-bg").show();
    });

    $('.modal-bg').click(function () {
        $.colorbox.close();
    });
});

