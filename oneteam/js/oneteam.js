$(document).ready(function () {
    $("#footer").load("./footer.html"); 

        $(document).on('click', '.video-overlay', function() {
            if($(window).width() <= 593)
            {
                var iframe = "<iframe allowfullscreen allowtransparency=\"true\" class=\"vzaar-video-player\" frameborder=\"0\" id=\"vzvd-2299698\" mozallowfullscreen name=\"vzvd-2299698\" src=\"http://view.vzaar.com/2299698/player\" title=\"vzaar video player\" type=\"text/html\" webkitallowfullscreen width=\"250\" height=\"139\"></iframe>";
                $.colorbox({ html: iframe, fixed:true, top:"5%"});
            }
            else
            {
                var iframe = "<iframe allowfullscreen allowtransparency=\"true\" class=\"vzaar-video-player\" frameborder=\"0\" id=\"vzvd-2299698\" mozallowfullscreen name=\"vzvd-2299698\" src=\"http://view.vzaar.com/2299698/player\" title=\"vzaar video player\" type=\"text/html\" webkitallowfullscreen width=\"495\" height=\"275\"></iframe>";
                $.colorbox({ html: iframe, fixed:true, top:"20%"});
            }
        });

        $(document).on('click', '.video-overlay-small-1', function () {
            //Open modal with video content inside
            
            if($(window).width() <= 593)
            {
                var iframe = " <iframe allowfullscreen allowtransparency=\"true\" class=\"vzaar-video-player\" frameborder=\"0\" id=\"vzvd-1462998\" mozallowfullscreen name=\"vzvd-1462998\" src=\"http://view.vzaar.com/1462998/player\" title=\"vzaar video player\" type=\"text/html\" webkitallowfullscreen width=\"250\" height=\"139\"></iframe>";
                $.colorbox({ html: iframe, fixed:true, top:"5%"});
            }
            else
            {
                var iframe = " <iframe allowfullscreen allowtransparency=\"true\" class=\"vzaar-video-player\" frameborder=\"0\" id=\"vzvd-1462998\" mozallowfullscreen name=\"vzvd-1462998\" src=\"http://view.vzaar.com/1462998/player\" title=\"vzaar video player\" type=\"text/html\" webkitallowfullscreen width=\"495\" height=\"275\"></iframe>";
                $.colorbox({ html: iframe, fixed:true, top:"20%"});
            }
        });

        $(document).on('click', '.video-overlay-small-2', function () {
            //Open modal with video content inside
            
            if($(window).width() <= 593)
            {
                var iframe = "<iframe allowfullscreen allowtransparency=\"true\" class=\"vzaar-video-player\" frameborder=\"0\" id=\"vzvd-1551614\" mozallowfullscreen name=\"vzvd-1551614\" src=\"http://view.vzaar.com/1551614/player\" title=\"vzaar video player\" type=\"text/html\" webkitallowfullscreen width=\"250\" height=\"211\"></iframe>";
                $.colorbox({ html: iframe, fixed:true, top:"5%"});
            }
            else
            {
                var iframe = "<iframe allowfullscreen allowtransparency=\"true\" class=\"vzaar-video-player\" frameborder=\"0\" id=\"vzvd-1551614\" mozallowfullscreen name=\"vzvd-1551614\" src=\"http://view.vzaar.com/1551614/player\" title=\"vzaar video player\" type=\"text/html\" webkitallowfullscreen width=\"495\" height=\"275\"></iframe>";
                $.colorbox({ html: iframe, fixed:true, top:"20%"});
            }
        });

        $(document).on('click', '.video-overlay-small-3', function () {
            //Open modal with video content inside
            
            if($(window).width() <= 593)
            {
                var iframe = "<iframe allowfullscreen allowtransparency=\"true\" class=\"vzaar-video-player\" frameborder=\"0\" id=\"vzvd-1551668\" mozallowfullscreen name=\"vzvd-1551668\" src=\"http://view.vzaar.com/1551668/player\" title=\"vzaar video player\" type=\"text/html\" webkitallowfullscreen width=\"250\" height=\"139\"></iframe>";
                $.colorbox({ html: iframe, fixed:true, top:"5%"});
            }
            else
            {
                var iframe = "<iframe allowfullscreen allowtransparency=\"true\" class=\"vzaar-video-player\" frameborder=\"0\" id=\"vzvd-1551668\" mozallowfullscreen name=\"vzvd-1551668\" src=\"http://view.vzaar.com/1551668/player\" title=\"vzaar video player\" type=\"text/html\" webkitallowfullscreen width=\"495\" height=\"275\"></iframe>";
                $.colorbox({ html: iframe, fixed:true, top:"20%"});
            }
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

    fcc.events.cart.process = new FC.client.event();
    
    fcc.events.cart.process.add(function(e){
    var href = '';
    if (typeof(e) === "string") {
        href = e;
    } else if (e.tagName == 'A') {
        href = e.href;
    } else if (e.tagName == 'FORM') {
        href = 'https://'+storedomain+'/cart?'+jQuery(e).serialize();
    }
    if (href.match("cart=(checkout|updateinfo)") || href.match("redirect=") || href.match("receipt(\.php)?\\?id=")) {
        return true;
    } else {
        jQuery.colorbox({
            href: href,
            iframe: true,
            top: "20%",
            fixed:true,
            width: colorbox_width,
            height: colorbox_height,
            onOpen: function() {jQuery("#colorbox").addClass("fc_cbox");},
            close: colorbox_close,
            onClosed: function(){jQuery("#colorbox").removeClass("fc_cbox"); fcc.events.cart.postprocess.execute(e);}
        });
        return false;
    }
});
});

