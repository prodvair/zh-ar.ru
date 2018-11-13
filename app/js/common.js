$(function() {

	$('.header__top__mmenu__burger').on('click', function(e) {
		e.preventDefault();
		$('.header__top__mmenu').toggleClass('header__top__mmenu-active');
		$('.header__top__btn .btn').toggleClass('black');
	});

});
