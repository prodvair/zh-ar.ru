$(function() {

	resizeWindow();

	$(window).on('resize', function(){
		resizeWindow();
	});

	function resizeWindow() {
		var height = $('.works').css('height');
		$('.works__bg').css({'height' : height});
	}

	
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
			$('html, body').animate({ scrollTop: $(id).offset().top }, 600);
		}
	});

	function scrollBtn(el){
		var id = $(el).attr('href');
		$('html, body').animate({ scrollTop: $(id).offset().top }, 600);
	}

	$('.header__content__arrow-bottom a').on('click', function (e) {
		e.preventDefault();
		scrollBtn(this);
	});
	$('.header__top__btn a').on('click', function (e) {
		e.preventDefault();
		scrollBtn(this);
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
		autoplay: true,
		autoplaySpeed: 5000,
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

// Слайдер Рекомендаций Start->

$('.recomendation__slider__content').slick({
	infinite: true,
	slidesToShow: 4,
	slidesToScroll: 1,
	arrows: false,
	dots: true,
	autoplay: true,
	autoplaySpeed: 5000,
	responsive: [
		{
			breakpoint: 1367,
			settings: {
				slidesToShow: 3
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 2
			}
		},
		{
			breakpoint: 576,
			settings: {
				slidesToShow: 1
			}
		}
	]
});

$('.recomendation__slider-right').on('click', function (e) {
	e.preventDefault();
	$('.recomendation__slider__content').slick('slickNext');
});

$('.recomendation__slider-left').on('click', function (e) {
	e.preventDefault();
	$('.recomendation__slider__content').slick('slickPrev');
});


// <-End Слайдер Рекомендаций

// ===============================================================

// Слайдер Работ Start->

$('.works__slider__content').slick({
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	centerMode: true,
	arrows: false,
	dots: true,
	useCSS: false,
	useTransform: false,
	variableWidth: true,
	autoplay: true,
	autoplaySpeed: 6000
});

$('.works__slider-right').on('click', function (e) {
	e.preventDefault();
	$('.works__slider__content').slick('slickNext');
});

$('.works__slider-left').on('click', function (e) {
	e.preventDefault();
	$('.works__slider__content').slick('slickPrev');
});

// <-End Слайдер Работ

});
