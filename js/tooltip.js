$(function(){
	$('.ontips').hover(function(event) {
		var setting = $(this).attr('tooltip-settings');
		var title = $(this).attr('title');
		if (setting && title) {
			$(this).prepend('<div class="tooltip jquery-tooltip ' + setting +'">' + title + '</div>');
		}
		return false;
	}, function(event) {
		$(this).children().filter('.jquery-tooltip').first().remove();
		return false;
	});
});