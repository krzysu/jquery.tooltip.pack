
(function($){
	$.fn.megatooltip = function(options) {
		var defaults = {
		  	correspondingId: '',
			shiftY: 20,
		    shiftX: 15
		}
		var settings = $.extend({}, defaults, options);

		this.each(function() {
		  	var $this = $(this);
			var $id = $(settings.correspondingId);
			
			$id.appendTo('body');
			$id.hide().css({position: 'absolute'});

			$this.hover(
				function(e) {
					$id.css({
						top: e.pageY + settings.shiftY,
					     left: e.pageX + settings.shiftX,
					}).show();
				},
				function() {
					$id.hide();
				}
			);

			$this.mousemove(function(e) {
				$id.css({
					top: e.pageY + settings.shiftY,
					left: e.pageX + settings.shiftX,
			    });
			});
		});
		// returns the jQuery object to allow for chainability.
		return this;
	}
})(jQuery);
