/* js file */

$(function() {
    
    var ulWidth = 0;
    $("ul#menu li").each(function() {
        ulWidth = ulWidth + $(this).width()
    });

    function menuResponse() {
        var menuUl = $("ul#menu"),
            viewportWidth = $(window).width(),
            menuTrigger = $('#menu-trigger'),
            nav = $('nav');

        if((ulWidth + 250) > viewportWidth) {
          $(menuUl).addClass('mobile');
          $(menuTrigger).addClass('show');
        }
        else {
            $(menuUl).removeClass('mobile');
            $(menuTrigger).removeClass('show');
            $(nav).removeClass('hide');
        }
    }

    menuResponse();
    $(window).resize(function(){
        menuResponse();
    });

    $("#menu-trigger").click(function(){
        $('nav').toggleClass('hide');
    });

});

