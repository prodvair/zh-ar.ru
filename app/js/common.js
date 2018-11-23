$(function() {

// Кастомизация Start->

	resizeWindow();

	$(window).on('resize', function(){
		resizeWindow();
	});

	$(".proposals__content__form__input-tel").mask("+7(999) 999-99-99");

	function resizeWindow() {
		var height = $('.works').css('height');
		$('.works__bg').css({'height' : height});
	}

// <-End Кастомизация

// ===============================================================
	
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
		var id = $(this).attr('href'),
			mt = 0;
		$('nav ul li a').removeClass('active');
		$(this).addClass('active');
		mmenu();
		if ($(id).length != 0) {
			if (id == '#contacts') {
				mt = 100;
			}
			$('html, body').animate({ scrollTop: ($(id).offset().top - mt) }, 600);
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

	dots('.partners__slider__content');

	$('.partners__slider__content').on('afterChange', function(event, slick, currentSlide, nextSlide){
		dots('.partners__slider__content');
	});

// <-End Слайдер партнёры

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

	dots('.works__slider__content');

	$('.works__slider__content').on('afterChange', function(event, slick, currentSlide, nextSlide){
		dots('.works__slider__content');
	});

// <-End Слайдер Работ

// Попап окно Работ Start->

	$('.works__slider__content__item').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		closeBtnInside: true,
		fixedContentPos: true,
		mainClass: 'mfp-no-margins mfp-with-zoom', 
		image: {
			verticalFit: true
		},
		zoom: {
			enabled: true,
			duration: 300 
		}
	});

// <-End Попап окно Работ

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

	dots('.recomendation__slider__content');

	$('.recomendation__slider__content').on('afterChange', function(event, slick, currentSlide, nextSlide){
		dots('.recomendation__slider__content');
	});

// <-End Слайдер Рекомендаций

// Попап окно Рекомендаций Start->

	$('.recomendation__slider__content__item').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		closeBtnInside: true,
		fixedContentPos: true,
		mainClass: 'mfp-no-margins mfp-with-zoom', 
		image: {
			verticalFit: true
		},
		zoom: {
			enabled: true,
			duration: 300 
		}
	});

// <-End Попап окно Рекомендаций

// ===============================================================

// Отображение точек слайдера Start->

	function dots(slider) {
		var pos   = $(slider).slick('slickCurrentSlide'),
			count = $(slider).slick("getSlick").slideCount -1;

		$(slider + ' .slick-dots li').hide();

		var active = $(slider + ' .slick-dots').find(".slick-active");

		active.show();
		active.prev().show();
		active.prev().prev().show();
		active.next().show();
		active.next().next().show();

		// console.log(count);
		if (pos == 0) {
			active.next().next().next().show();
			active.next().next().next().next().show();
		}
		if (pos == 1) {
			active.next().next().next().show();
		}
		if (pos == count) {
			active.prev().prev().prev().show();
			active.prev().prev().prev().prev().show();
		}
		if (pos == count - 1) {
			active.prev().prev().prev().show();
		}
	}

// <-End Отображение точек слайдера

// ===============================================================

// Фильтр Start->

	var startId = $('.works__filter ul li .active').attr('href');
	filter(startId);

	$('.works__filter ul li a').on('click', function (e) {
		e.preventDefault();
		var id = $(this).attr('href');
		$('.works__filter ul li a').removeClass('active');
		$('.works__filter ul li a').attr('title', '');
		$(this).addClass('active');
		$(this).attr('title', 'Уже выбран');
		filter(id);
	})

	function filter(id) {
		$('.works__slider__content').hide();
		$(id).show();
	}

// <-End

// ===============================================================

// API из Instagram Start->

	var userId  	= '',
		accessToken = '',
		count		= '50';

	$.ajax({
		url: 'https://api.instagram.com/v1/users/' + userId + '/media/recent',
		dataType: 'jsonp',
		type: 'GET',
		data: {access_token: accessToken, count: count}, // передаем параметры, которые мы указывали выше
		success: function(result){
			console.log(result);
			$('#instargam').slick('slickRemove',0);
			for( x in result.data ){
				$('#instagram').slick('slickAdd','<img src="'+result.data[x].images.standard_resolution.url+'">');
				// result.data[x].images.thumbnail.url - URL картинки 150х150
				// result.data[x].images.standard_resolution.url - URL картинки 612х612
				// result.data[x].link - URL страницы данного поста в Инстаграм 
			}
		},
		error: function(result){
			console.log(result); 
		}
	});

// <-End

// ===============================================================

// Загрузка картинок для слайдеров Start->

	$(".works__slider__content").each(function(index) {
		var id = $(this).attr('id');
		console.log(index + ": " + id);
		if (id != 'instargam') {
			$('#' + id).slick('slickRemove',0);
			loadImages(1,id);
		}
	});

	function loadImages(i,slider){
		i = i || 1;
		var img = new Image();    
		img.onload = function () {
			$('#' + slider).slick('slickAdd','<div class="works__slider__content__item" href="img/work/' + slider + '/' + i + '.jpg"><img src="img/work/' + slider + '/' + i + '.jpg" alt=""></div>');
			loadImages(++i,slider);
		};
		img.onerror = function(){
			dots(slider);
			resizeWindow();
			console.clear();
			return false;
		}
		img.src = '../img/work/' + slider + '/' + i + '.jpg';
	}

// <-End Загрузка картинок для слайдеров

// ===============================================================

// Форма обратной связи Start->

	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "script/mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Ваша заявка принята");
			setTimeout(function() {
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

// <-End Форма обратной связи

});
