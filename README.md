jquery.tooltip.pack
===================

#### tooltips for every occasion ####


In the pack so far:

-   jquery.tooltip.delegate

But in the near future:

-   jquery.megatooltip


jquery.tooltip.delegate
-----------------------
Plugin is based on jquery delegate function and by default works with all elements that have set attribute 'title'. Content of this attribute will be presented in tooltip.

### Example ###

#### HTML ####

	<div id="foo">
		<a href='#' title='text to be shown in tooltip'>hover me</a>
		<a href='#' title='text to be shown in tooltip'>hover me</a>
		<a href='#' title='text to be shown in tooltip'>hover me</a>
	</div>
	
#### JavaScript ####
	$('#foo').tooltip();

	
* * *
Copyright (c) 2011 Krzysztof Urbas (@krzysu). jquery.tooltip.pack is available under the MIT license.