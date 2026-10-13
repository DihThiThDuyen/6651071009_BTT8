$(document).ready(function () {
	var $tabLinks = $('.tab-wrapper ul li a');

	function showTab(target) {
		$('.tab-item').hide();
		$(target).show();
		$('.tab-wrapper ul li').removeClass('active');
		$('.tab-wrapper ul li a[href="' + target + '"]').parent().addClass('active');
	}

	showTab($tabLinks.first().attr('href'));

	$tabLinks.on('click', function (e) {
		e.preventDefault();
		showTab($(this).attr('href'));
	});
});
