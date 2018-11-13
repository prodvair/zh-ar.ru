$(function() {

// Мобильное меню Start->

	function mmenu() {
		$('.header__top__mmenu').toggleClass('header__top__mmenu-active');
		if ($(window).width() < 768) {
			$('.header__top__btn .btn').toggleClass('black');	
		}
	}

	$('.header__top__mmenu__burger').on('click', function(e) {
		e.preventDefault();
		mmenu();
	});

	$('.header__top__mmenu__overlay').on('click', function () {
		mmenu();
	});

// <-End Мобильное меню

// Функционал меню Start->

	$('nav ul li a').on('click', function (e) {
		e.preventDefault();
		var id = $(this).attr('href');
		$('nav ul li a').removeClass('active');
		$(this).addClass('active');
		mmenu();
		if ($(id).length != 0) {
			$('html, body').animate({ scrollTop: $(id).offset().top() }, 600);
		}
	});

// <-End Функционал меню

// ===============================================================

});
