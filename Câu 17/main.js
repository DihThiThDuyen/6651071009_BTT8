$(document).ready(function () {
	$('.box').hide();

	$('h3').on('click', function () {
		var $box = $(this).next('.box');
		$('.box').not($box).slideUp();
		$box.slideToggle();
	});
});
