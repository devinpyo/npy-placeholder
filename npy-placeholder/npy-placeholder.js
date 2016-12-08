$(function() { $('input[placeholder]').each(npyPlaceholder); });

function npyPlaceholder() {
	var o = $(this);
	var p = o.attr('placeholder');
	o.attr('placeholder', '');
	
	var v = o.val().length > 0;
	if (!v) o.addClass('_npyPlaceholder').val(p);
	
	o.on('focus', function() {
		if (o.hasClass('_npyPlaceholder')) o.removeClass('_npyPlaceholder').val('');
	}).on('focusout', function() {
		v = o.val().length > 0;
		if (!v) o.addClass('_npyPlaceholder').val(p);
	});
};