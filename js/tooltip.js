$(function(){
	$('.ontips').hover(function(event) {
		var setting = $(this).attr('tooltip-settings');
		var content = $(this).attr('tooltip-content');
		if (setting && content) {
			$(this).prepend('<div class="tooltip jquery-tooltip ' + setting +'">' + content + '</div>');
		}
		return false;
	}, function(event) {
		$(this).children().filter('.jquery-tooltip').first().remove();
		return false;
	});
});