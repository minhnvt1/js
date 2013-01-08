(function($) {
	$.fn.reverseText = function(params) {
		//merge default and user parameters
		params = $.extend({minLength:0, maxLength:99999}, params);
		//traverse all nodes
		this.each(function() {
			//express a single  node as a jQuery object
			var $t = $(this);
			//find text
			var origText = $t.text(), newText = '';
			if (origText.length >= params.minLength && origText.length <= params.maxLength) {
				for (var i = origText.length-1; i>=0; i--) newText += origText.substr(i, 1);
				$t.text(newText);
			}
		});
		
		return this;
	};
})(jQuery);