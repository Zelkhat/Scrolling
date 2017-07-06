$(function() {

	$('.menu a').on('click', function(e) {
		e.preventDefault();

		// highlight current menu
		HighlightMenu(this);

		var $selector = $(this).attr('href');
		var $h = $($selector);
		
		$('html, body').animate({
			// menu is fixed, margin-top for content is 80px
			scrollTop: $h.offset().top - 80
		}, 800);

	});

	$btnScrollToTop = $('.scrollToTop');

	$(window).scroll(function() {
		if ($(document).scrollTop() > 500) {
			$btnScrollToTop.fadeIn(1000);
		} else {
			$btnScrollToTop.fadeOut(1000);
		}
	});

	$btnScrollToTop.hover(function() {
		$(this).css('background', 'rgba(51, 51, 51, 1)');
	}, function() {
		$(this).css('background', 'rgba(51, 51, 51, 0.5)');
	}).on('click', function() {
		$('html, body').animate({
			scrollTop: 0
		}, 800);
		// remove highlight current menu
		HighlightMenu();
	});

});

HighlightMenu = function(menu) {
	$('.menu a').removeClass('active').filter(menu).addClass('active');
}