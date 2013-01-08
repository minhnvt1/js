(function($) {
	$.fn.popup = function(options) {
		var defaults = {
			width:"300px",
			height:"200px",
			title:"Title"
		};
		var options = $.extend(defaults, options);
		$("body").append("<div id='background'></div>");
		var $this = $(this);
		$this.prepend("<div class='popuptitle'>"+options.title+"<a href='' class='close'>X</a></div>");
		$this.addClass('popup');
		$this.width(options.width).height(options.height);
		$this.hide();
		
		$('.close').click(function(e) {
			closePopup();
			e.preventDefault();
		});
		$('#background').click(function() {
			closePopup();
		});
		return this;
	};
	$.fn.openPopup = function() {
		var dHeight = window.innerHeight;
		var dWidth = window.innerWidth;
		$('#background').width(dWidth).height(dHeight);
		$('#background').fadeTo('slow', 0.8);
		
		$(this).css('top', (dHeight-$(this).height())/2);
		$(this).css('left', (dWidth-$(this).width())/2);
		
		$(this).fadeIn();
		return this;
	};
})(jQuery);

function closePopup() {
	 $("#background").fadeOut();
	 $(".popup").hide();
}