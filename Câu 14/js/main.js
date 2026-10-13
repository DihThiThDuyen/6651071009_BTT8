$(document).ready(function () {
	var $images = $('.image-effect img');

	function applyTheme(isOn) {
		$images.removeClass('fadeEffect');
		if (isOn) {
			$images.eq(1).addClass('fadeEffect');
			$('body').removeClass('dark-theme');
		} else {
			$images.eq(0).addClass('fadeEffect');
			$('body').addClass('dark-theme');
		}
	}

	applyTheme($('.toggle-switch-2').is(':checked'));

	$('.toggle-switch-2').on('change', function () {
		applyTheme(this.checked);
	});
});
