$(document).ready(function(){
    var windowHeight = $(window).height();
	var barraAltura = $('.navbar').innerHeight();
	$(window).scroll(function(){
		var scroll = $(window).scrollTop();
		if (scroll > windowHeight) {
			$('.navbar').addClass('fixed-top');
			$('body').css({'margin-top': barraAltura+'px'})
		} else {
			$('.navbar').removeClass('fixed-top');
			$('body').css({'margin-top': '0px'})
		}
	});
	
	$(".nav-link").click(function(){
		$('#navbarTogglerDemo02').removeClass('show');
	});

	$(".navbar-brand").click(function() {
		$('body,html').animate({
            scrollTop: $('#cover').offset().top
        }, 1000);
        return false;
	});

	$(".brands").click(function() {
		$('body,html').animate({
            scrollTop: $('#our-section').offset().top
        }, 1000);
        return false;
	});

	$("#contact").click(function() {
		$('body,html').animate({
            scrollTop: $('#contact-section').offset().top
        }, 1000);
        return false;
	});
});