$(document).ready(function () {
	$('.checkme').on('change', function () {
		var card = $(this).closest('.checkbox-card');
		if (this.checked) {
			card.find('.passport-box').slideDown();
			card.find('.apply-box').slideDown();
		} else {
			card.find('.passport-box').slideUp();
			card.find('.apply-box').slideUp();
		}
	});
});
