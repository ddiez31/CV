$(document).ready(function() {

    /*======= Skillset *=======*/

    $('.level-bar-inner').css('width', '0');
    $(window).on('load', function() {
        $('.level-bar-inner').each(function() {
            var itemWidth = $(this).data('level');
            $(this).animate({
                width: itemWidth
            }, 2000);
        });
    });

    // konami code
    if (window.addEventListener) {
        var kkeys = [];
        var checkCode = 0;
        konami = "38,38,40,40,37,39,37,39,66,65";
        window.addEventListener("keydown", function(e) {
            kkeys.push(e.keyCode);
            if (kkeys.toString().indexOf(konami) >= 0 && checkCode == 0) {
                checkCode = 1;
                $(".test").append('<div class="golden" style="background:url(../images/approved.png) no-repeat; background-position: center; height:350px; width:350px; color:#545E6C;"></div>');
                $(".test").append('<div class="golden" style="height:350px; width:350px; color:#545E6C;"><h4 style="text-align: center">Profil intéressant!</h4><p style="text-align: center">Il me faut ce gars dans mon équipe!</p><p style="text-align: center"><a href="https://twitter.com/intent/tweet?original_referer=&text=Je%20te%20veux%20dans%20mon%20équipe&tw_p=tweetbutton&via=DavidDiez31">Envoyez-moi un Twit</a></p></div>');
                kkeys = [];
            }
            if (kkeys.toString().indexOf(konami) >= 0 && checkCode == 1) {
                location.reload(true);
            };
        })
    };
});