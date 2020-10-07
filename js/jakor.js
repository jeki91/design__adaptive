//<a href="#yak1">1</a>
//<div id="yak1"></div>


$(document).ready(function(){
    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top - 65; //65 высота шапки
        $('body,html').animate({scrollTop: top}, 500);
    });
});