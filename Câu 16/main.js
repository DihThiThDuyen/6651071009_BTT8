$(document).ready(function () {
	$('#datepicker').datepicker({
		dateFormat: 'dd/mm/yy'
	});

	$('.add-row').on('click', function () {
		var name = $('#name').val().trim();
		var email = $('#email').val().trim();
		var birthdate = $('#datepicker').val().trim();

		if (name === '' || email === '' || birthdate === '') {
			alert('Vui lòng nhập đầy đủ thông tin!');
			return;
		}

		var row = '<tr>' +
			'<td><input type="checkbox" class="row-check"></td>' +
			'<td>' + name + '</td>' +
			'<td>' + email + '</td>' +
			'<td>' + birthdate + '</td>' +
			'</tr>';
		$('table tbody').append(row);

		$('#name').val('');
		$('#email').val('');
		$('#datepicker').val('');
	});

	$('.delete-row').on('click', function () {
		var checked = $('table tbody .row-check:checked');
		if (checked.length === 0) {
			alert('Vui lòng chọn hàng cần xóa!');
			return;
		}
		checked.closest('tr').remove();
	});
});
