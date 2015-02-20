$(function(){
	$('.ontips').hover(function(event) {
		var setting = $(this).attr('skytip-settings');
		var content = $(this).attr('skytip-content');
		var title = $(this).attr('title');
		if (setting && content) {
			if (title) {
				$(this).removeAttr('title');
				$(this).attr('title-backup', title);
			}
			$(this).prepend('<span class="skytip jquery-skytip ' + setting +'">' + content + '</span>');
		}
		return false;
	}, function(event) {
		var title = $(this).attr('title-backup');
		if (title) {
			$(this).attr('title', title);
			$(this).removeAttr('title-backup');
		}
		$(this).children().filter('.jquery-skytip').first().remove();
		return false;
	});
});