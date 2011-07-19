jquery.tooltip.pack
===================
#### tooltips for every occasion ####


In the pack so far
------------------

-   jquery.tooltip.delegate

But in the near future:

-   jquery.megatooltip


jquery.tooltip.delegate
-----------------------
Plugin is based on jQuery `delegate` function and by default works with all elements that have set attribute `title`.
Content of this attribute will be presented in tooltip. You can use HTML tags in the `title` content.

Plugin is Ajaxproof which means that all dynamic content of your page will have tooltip if you define parent element right.
Parent element should be first, never changed in page life, element which is parent of elements that we want to have tooltips.

### Example ###

#### HTML ####
`#foo` is parent element

	<div id="foo">
		<a href='#' title='text to be shown in tooltip'>hover me</a>
		<a href='#' title='text to be shown in tooltip'>hover me</a>
		<a href='#' title='text to be shown in tooltip'>hover me</a>
	</div>
	
#### JavaScript ####
initialization
	$('#foo').tooltip();
unbind all events
	$('#foo').tooltip('destroy');

	
* * *
Copyright (c) 2011 Krzysztof Urbas (@krzysu). jquery.tooltip.pack is available under the MIT license.