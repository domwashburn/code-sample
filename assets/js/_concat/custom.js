$(document).ready (function(){
	var videoBkg = function() {
		var docHeight = $(document).height();
		var docWidth = $(window).width();
		$('.videoBackground').css('height', docHeight);
		$('.videoBackground').css('width', docWidth);
	};

videoBkg();

$(window).resize(videoBkg);

});