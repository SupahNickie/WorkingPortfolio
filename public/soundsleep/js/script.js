$(document).ready(function () {
    var $home = $(".active[name=homemenu]");
    var $collections = $(".dropdown[name=collectionsmenu]");
    var $features = $(".dropdown[name=featuresmenu]");
    var $about = $(".dropdown[name=aboutmenu]");

    $collections.mouseenter(function () {
        $('#featurespopup').hide();
        $('#aboutpopup').hide();
        $('.indexfooter').css("margin-top", "-143px");
        $('.slidetoggle').css("margin-top", "100px");
        $('.dropdown-menu').css("display", "none");
        $('.popup').fadeTo("fast", 1);
        $('#collectionspopup').fadeTo("fast", 1);
    });

    $features.mouseenter(function () {
        $('#collectionspopup').hide();
        $('#aboutpopup').hide();
        $('.indexfooter').css("margin-top", "-143px");
        $('.slidetoggle').css("margin-top", "100px");
        $('.dropdown-menu').css("display", "none");
        $('.popup').fadeTo("fast", 1);
        $('#featurespopup').fadeTo("fast", 1);
    });

    $about.mouseenter(function () {
        $('#collectionspopup').hide();
        $('#featurespopup').hide();
        $('.indexfooter').css("margin-top", "-143px");
        $('.slidetoggle').css("margin-top", "100px");
        $('.popup').fadeTo("fast", 0);
        $('.dropdown-menu').css("display", "block");
    });

    $('.dropdown-menu').mouseleave(function () {
        $('.dropdown-menu').hide();
    });

    $('#mouse').mouseleave(function () {
        $('.dropdown-menu').css("display", "none");
    });

    $home.mouseenter(function () {
        $('#collectionspopup').css("display", "none");
        $('#featurespopup').css("display", "none");
        $('.indexfooter').css("margin-top", "-143px");
        $('.slidetoggle').css("margin-top", "100px");
        $('.dropdown-menu').css("display", "none");
        $('.popup').fadeTo("fast", 0);
    });

    $('.slidetoggle').click(function () {
        $('#indexfooter').slideToggle("slow");
    });

    $(document).on("mouseleave", ".popup", function () {
        $(this).hide();
        $('.slidetoggle').css("margin-top", "760px");
    });
});