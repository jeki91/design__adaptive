$(document).ready(function() {
	$('.header__burger').click(function(event) {
		$('.header__burger,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});



		$('.menu__list').click(function(event) {
        $('.header__burger,.header__menu').removeClass('active');
        $('body').removeClass('lock');
     });




	$('.slider').slick({
		arrows:false,
		dots:true,
		adaptiveHeight:true,

	});

}); 