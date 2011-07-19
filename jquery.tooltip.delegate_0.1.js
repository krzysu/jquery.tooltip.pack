/*
 * jquery.tooltip.delegate.js
 * desc: delegate based, ajaxproof
 * version: 0.1
 * 
 * how to use?
 * init: 		$(parent_selector).tooltip();
 * destroy: 	$(parent_selector).tooltip('destroy');
*/ 


(function($) {
    
	$.fn.tooltip = function( method ) {

		if ( methods[method] ) {
			return methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ));
		} else if ( typeof method === 'object' || ! method ) {
			return methods.init.apply( this, arguments );
		} else {
			$.error( 'Method ' +  method + ' does not exist on jQuery.tooltip' );
		}    
	};
	
	var methods = {
		init: function( options ) {
			
			var defaults = {
				shiftY: 15,
				shiftX: 15
	  		};
		  	var settings = $.extend({}, defaults, options);
		  	
		  	var $tooltip = $('<div id="tooltip" />').appendTo('body').hide().css({position: 'absolute'});
	
			this.delegate('*[title]', 'mouseover.tooltip', function(e){
				var $this = $(this);
				var title;
				
				if( typeof($this.attr('tiptitle') ) !== 'undefined') {
				
					title = $this.attr('tiptitle');
				} 
				else {
					title = $this.attr('title');
					$this.attr('tiptitle', title);
					$this.attr('title', '');
					$this.removeAttr('alt');
				}

				$tooltip
					.text(title)
					.css({
				  		top: e.pageY + settings.shiftY,
				  		left: e.pageX + settings.shiftX
				  	})
				  	.show();
			});
			
			this.delegate('*[title]', 'mouseout.tooltip', function(e){
				$tooltip.hide().text('');
			});
			
			this.delegate('*[title]', 'mousemove.tooltip', function(e){
			
				$tooltip.css({
                    top: e.pageY + settings.shiftY,
                    left: e.pageX + settings.shiftX
                });
			});
			
			return this;
		},
	
		destroy: function() {
			this.undelegate('.tooltip');
			return this;
		}
	};
    
})(jQuery);
