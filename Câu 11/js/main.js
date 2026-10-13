$(document).ready(function () {
	$('#fileupload').on('change', function () {
		var file = this.files[0];
		if (file) {
			var fileName = file.name;
			var fileExt = fileName.split('.').pop();
			$('.filename').html('Tên file: <strong>' + fileName + '</strong> &nbsp;|&nbsp; Phần mở rộng: <strong>.' + fileExt + '</strong>');
		} else {
			$('.filename').text('Ex: sample.jpg');
		}
	});
});
