$(document).ready(function () {

	$('.banner-slider').slick({
		slidesToShow: 1,
		fade: true,
		arrows: true,
		dots: false,
		infinite: true,
		prevArrow: $('.banner-slider-wrap .slider-navigation .slick-prev'),
		nextArrow: $('.banner-slider-wrap .slider-navigation .slick-next'),
	});

	$('.reception-slider').slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		arrows: true,
		dots: false,
		infinite: true,
		prevArrow: $('.reception-slider-wrap .slider-navigation .slick-prev'),
		nextArrow: $('.reception-slider-wrap .slider-navigation .slick-next'),
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					fade: true,
				}
					},
				  ]
	});

	$('.certificates-slider').slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		arrows: true,
		dots: false,
		infinite: true,
		prevArrow: $('.certificates-slider-wrap .slider-navigation .slick-prev'),
		nextArrow: $('.certificates-slider-wrap .slider-navigation .slick-next'),
		responsive: [
			{
				breakpoint: 1201,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
		},
			{
				breakpoint: 993,
				settings: {
					slidesToShow: 3,
				}
		},
			{
				breakpoint: 601,
				settings: {
					slidesToShow: 2,
				}
		},
			{
				breakpoint: 401,
				settings: {
					slidesToShow: 1,
				}
		},
		]
	});

	$('.select-wrap select').select2({
		minimumResultsForSearch: 6,
	});

	var parallax = document.getElementsByClassName('parallax');

	$.each(parallax, function (key, value) {

		var parallaxInstance = new Parallax(value, {
			relativeInput: true
		});
	});

	$(".drop-menu").on("click", function (e) {
		e.preventDefault();
		$("body").addClass("overflow");
		$(".mobile-menu-wrap").addClass("opened");
	});

	$(".close-menu").on("click", function (e) {
		e.preventDefault();
		$("body").removeClass("overflow");
		$(".mobile-menu-wrap").removeClass("opened");
	});

	$(".sidebar-menu li a").on("click", function (e) {
		e.preventDefault();
		$(this).closest("li").find(".sidebar-drop-menu").slideToggle();
	});

	$('.product-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		infinite: true,
		asNavFor: '.product-slider-thumb',
	});

	$('.product-slider-thumb').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.product-slider',
		focusOnSelect: true,
		infinite: true,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1
				}
    },
			{
				breakpoint: 501,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
    }
  ]
	});

	$(".anchor-menu li a").on("click", function (e) {
		e.preventDefault();
		$(".anchor-menu li").removeClass("active");
		$(this).closest("li").addClass("active");
	});

	$('.anchor-menu li a').smoothScroll({
		speed: 600,
	});


});