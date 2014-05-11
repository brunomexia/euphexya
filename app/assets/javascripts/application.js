// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

$(document).ready(function(){
	// Code
	
    $('.loader div').css('margin-top', $(window).height()/2 - $('.loader div').outerHeight()/2);
});

$(window).load(function() {

	// Body Positioning
	var mhHeight = $('.mainhead').outerHeight();
	var windowHeight = $(window).height();
	var homedesHeight = $('.home-destaque').outerHeight();

	$('.body').css('margin-top', mhHeight);
	$('.cycle-slide').height(windowHeight - mhHeight - homedesHeight);
	// Load animation
	setTimeout(function(){
		$('.loader div').css({'margin-top': 0, 'opacity': 0});
		$('.loader').delay(500).fadeOut(150);
	}, 185);






	var progress = $('#progress'),
        slideshow = $( '.home_banner_cycle .cycle-slideshow' );

    slideshow.on( 'cycle-initialized cycle-before', function( e, opts ) {
        progress.stop(true).css( 'width', 0 );
    });

    slideshow.on( 'cycle-initialized cycle-after', function( e, opts ) {
        if ( ! slideshow.is('.cycle-paused') )
            progress.animate({ 'width' : slideshow.width() }, opts.timeout, 'linear' );
    });

    slideshow.on( 'cycle-paused', function( e, opts ) {
       progress.stop(); 
    });

    slideshow.on( 'cycle-resumed', function( e, opts, timeoutRemaining ) {
        progress.animate({ 'width' : slideshow.width() }, timeoutRemaining, 'linear' );
    });  
    
    
    $(".cycle-togglePause").toggle(function(){
        console.log('paused');
        slideshow.cycle("pause");
        $(".cycle-togglePause").text('► ');
    },function(){
        console.log('resumed');
        slideshow.cycle("resume");
        $(".cycle-togglePause").text('||');
    });

});