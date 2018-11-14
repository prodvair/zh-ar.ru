$(function() {

	var width = $('.container').css('width');
	console.log(width);
	$('.works__slider').css({'width' : width});
	$('.works__slider__content img').css({'width' : width});

	
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

// Слайдер партнёры Start->

	$('.partners__slider__content').slick({
		infinite: true,
		slidesToShow: 5,
		slidesToScroll: 1,
		arrows: false,
		dots: true,
		rows: 2,
		responsive: [
			{
			  breakpoint: 1367,
			  settings: {
					slidesToShow: 4
			  }
			},
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 3
				}
			}
		  ]
	});

	$('.partners__slider-right').on('click', function (e) {
		e.preventDefault();
		$('.partners__slider__content').slick('slickNext');
	});
	
	$('.partners__slider-left').on('click', function (e) {
		e.preventDefault();
		$('.partners__slider__content').slick('slickPrev');
	});
	

// <-End Слайдер партнёры

// ===============================================================

// Слайдер работ Start->

$('.works__slider__content').slick({
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	centerMode: true,
	arrows: false,
	dots: true,
});

$('.works__slider-right').on('click', function (e) {
	e.preventDefault();
	$('.works__slider__content').slick('slickNext');
});

$('.works__slider-left').on('click', function (e) {
	e.preventDefault();
	$('.works__slider__content').slick('slickPrev');
});


// <-End Слайдер партнёры

// ===============================================================


});
