/*
	jquery.tooltip.delegate.js
	desc: delegate based, ajaxproof
	version: 0.1
	author: Krzysztof Urbas, @krzysu, myviews.pl, 2011

	how to use?
	for example #foo is parent element

	<div id="foo">
	    <a href='#' title='text to be shown in tooltip'>hover me</a>
	    <a href='#' title='text to be shown in tooltip'>hover me</a>
	    <a href='#' title='text to be shown in tooltip'>hover me</a>
	</div>

	init: 		$('#foo').tooltip();
	destroy: 	$('#foo').tooltip('destroy');
 
	copyright (c) 2011-2012 Krzysztof Urbas. jquery.tooltip.pack is available under the MIT license.
	http://github.com/krzysu/jquery.tooltip.pack
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
					.html(title)
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
