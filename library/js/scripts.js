/*
Bones Scripts File
Author: Eddie Machado

This file should contain any js scripts you want to add to the site.
Instead of calling it in the header or throwing it inside wp_head()
this file will be called automatically in the footer so as not to
slow the page load.

*/

// as the page loads, call these scripts
jQuery(document).ready(function($) {

    /*
    Responsive jQuery is a tricky thing.
    There's a bunch of different ways to handle
    it so, be sure to research and find the one
    that works for you best.
    */
    
    /* getting viewport width */
    var responsive_viewport = $(window).width();
    
    /* if is below 481px */
    if (responsive_viewport < 481) {
    
    } /* end smallest screen */
    
    /* if is larger than 481px */
    if (responsive_viewport > 481) {
        
    } /* end larger than 481px */
    
    /* if is above 768px */
    if (responsive_viewport > 768) {
    
        /* load gravatars */
        $('.comment img[data-gravatar]').each(function(){
            $(this).attr('src',$(this).attr('data-gravatar'));
        });
        
    }
    
    /* off the bat large screen actions */
    if (responsive_viewport > 1030) {
        
    }
    
	
	// add all your scripts here
	
	/*var liMargin=parseInt($("header.header div#inner-header nav div.menu ul li").css('margin'));
	var liWidth=2*liMargin;
	$("header.header div#inner-header nav div.menu ul li").each(function(){
		liWidth+=$(this).width();
		alert($(this).width());
		changeWidth();
	});
	function changeWidth()
	{
		$("header.header div#inner-header nav").width(liWidth);	
	}*/
	/*var stateArray = Array();
	var stateIndex = 0;
	window.history.replaceState(0,'this page',null);
	window.onpopstate = popStateHandler;
	initLinks();
	function initLinks(){
	
	$("a").bind('click',function(){
		changeContent($(this).attr('href'));
		return false;
	});
	
	}
	function changeContent(attribute){
		$.post(attribute,function(data){
				setTitle(data);
				$("#inner-content").html(data);
				$("a").unbind('click');
				
				
			});
		stateArray.push(attribute);
		stateIndex++;
		window.history.pushState(stateIndex,'hello',attribute);
		//alert('still here');
		initLinks();	
	}
	function setTitle(data)
	{
		document.title = $("title",$(data)).html();
		//alert($("title",$(data)));
	}
	function popStateHandler(event){
		if(event.state!=null)
		{
			changeContent(stateArray[event.state]);	
			stateIndex--;
			stateArray.pop();
		}
	}
	
	*/
	
	
 
}); /* end of as page load scripts */


/*! A fix for the iOS orientationchange zoom bug.
 Script by @scottjehl, rebound by @wilto.
 MIT License.
*/
(function(w){
	// This fix addresses an iOS bug, so return early if the UA claims it's something else.
	if( !( /iPhone|iPad|iPod/.test( navigator.platform ) && navigator.userAgent.indexOf( "AppleWebKit" ) > -1 ) ){ return; }
    var doc = w.document;
    if( !doc.querySelector ){ return; }
    var meta = doc.querySelector( "meta[name=viewport]" ),
        initialContent = meta && meta.getAttribute( "content" ),
        disabledZoom = initialContent + ",maximum-scale=1",
        enabledZoom = initialContent + ",maximum-scale=10",
        enabled = true,
		x, y, z, aig;
    if( !meta ){ return; }
    function restoreZoom(){
        meta.setAttribute( "content", enabledZoom );
        enabled = true; }
    function disableZoom(){
        meta.setAttribute( "content", disabledZoom );
        enabled = false; }
    function checkTilt( e ){
		aig = e.accelerationIncludingGravity;
		x = Math.abs( aig.x );
		y = Math.abs( aig.y );
		z = Math.abs( aig.z );
		// If portrait orientation and in one of the danger zones
        if( !w.orientation && ( x > 7 || ( ( z > 6 && y < 8 || z < 8 && y > 6 ) && x > 5 ) ) ){
			if( enabled ){ disableZoom(); } }
		else if( !enabled ){ restoreZoom(); } }
	w.addEventListener( "orientationchange", restoreZoom, false );
	w.addEventListener( "devicemotion", checkTilt, false );
})( this );