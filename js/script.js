$(function() {

	$('.menu a').on('click', function(e) {
		e.preventDefault();

		// highlight current menu
		RemoveHighlightMenu(this);

		var $selector = $(this).attr('href');
		var $h = $($selector);
		
		$('html, body').animate({
			// menu is fixed, margin-top for content is 80px
			scrollTop: $h.offset().top - 80
		}, 800);

	});

	$btnScrollToTop = $('.scrollToTop');

	$(window).scroll(function() {
		//$btnScrollToTop = $('.scrollToTop');
		if ($(document).scrollTop() > 500) {
			$btnScrollToTop.css('display', 'block');
		} else {
			$btnScrollToTop.css('display', 'none');
		}
	});

	$btnScrollToTop.hover(function() {
		$(this).css('background', 'rgba(51, 51, 51, 1)');
	}, function() {
		$(this).css('background', 'rgba(51, 51, 51, 0.5)');
	}).on('click', function() {
		$('html, body').animate({
			// menu is fixed, margin-top for content is 80px
			scrollTop: $('#about').offset().top - 80
		}, 800);
		// remove highlight current menu
		RemoveHighlightMenu();
	});

});

RemoveHighlightMenu = function(menu) {
	$('.menu a').removeClass('active').filter(menu).addClass('active');
}