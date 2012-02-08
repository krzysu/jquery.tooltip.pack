/*
	jquery.tooltip.img.js
	desc: tooltip with image as a content, with optional caption
	version: 0.1
	author: Krzysztof Urbas, @krzysu, myviews.pl

	how to use?
	init: 		$(selector).imgTooltip(options);
	destroy: 	$(selector).imgTooltip('destroy');

	options: {
		shiftY: 15, // Y distance from mouse pointer, default value
		shiftX: 15
	}

	html structure:
	<a href="path_to_full_img">
		..
		<span class="caption">optional image caption</span>
	</a>

	plugin creates div#img-tooltip container with img and div.caption inside, to add styles use (SCSS syntax):
	#img-tooltip {
		img { .. }
		.caption { .. }
	}

	copyright (c) 2011-2012 Krzysztof Urbas. jquery.tooltip.pack is available under the MIT license.
	http://github.com/krzysu/jquery.tooltip.pack
*/


(function($) {
    
	$.fn.imgTooltip = function( method ) {

		if ( methods[method] ) {
			return methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ));
		} else if ( typeof method === 'object' || ! method ) {
			return methods.init.apply( this, arguments );
		} else {
			$.error( 'Method ' +  method + ' does not exist on jQuery.imgTooltip' );
		}    
	};
	
	var methods = {
		init: function( options ) {
			
			var defaults = {
				shiftY: 15,
				shiftX: 15
	  		};
		  	var settings = $.extend({}, defaults, options);
		  	
		  	var $tooltip = $('#img-tooltip');
		  	if( $tooltip.length === 0 ) {
		  		$tooltip = $('<div id="img-tooltip" />').appendTo('body').hide().css({position: 'absolute'});
		  	}
	
			this.each( function(index, el) {
				var $el = $(el),
					source = $el.attr('href'),
					caption = $el.find('.caption').text(),
					$img = $('<img />'),
					$caption = $('<div />');
				$img.attr('src', source);
				$caption.addClass('caption').text(caption);

				$el.on('mouseover.imgTooltip', function(e) {
					$tooltip
						.append($img)
						.css({
					  		top: e.pageY + settings.shiftY,
					  		left: e.pageX + settings.shiftX
					  	})
					  	.show();

					if(caption.length > 0) {
						$tooltip.append($caption);
					};
				});

				$el.on('mouseout.imgTooltip', function(e) {
					$tooltip.hide().html('');
				});

				$el.on('mousemove.imgTooltip', function(e) {
					$tooltip.css({
	                    top: e.pageY + settings.shiftY,
	                    left: e.pageX + settings.shiftX
	                });
				});
			});

			return this;
		},
	
		destroy: function() {
			this.each( function(index, el) {
				$(el).off('.imgTooltip')
			});
			$('#img-tooltip').remove();
			return this;
		}
	};
    
})(jQuery);
