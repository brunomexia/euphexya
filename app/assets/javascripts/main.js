$(function() {    

    //HOMEPAGE JS
    if ($("#welcome.index").length) {

        var progress = $('#progress'),
            slideshow = $( '.cycle-slideshow' );

        slideshow.on( 'cycle-initialized cycle-before', function( e, opts ) {
            progress.stop(true).css( 'width', 0 );
        });

        slideshow.on( 'cycle-initialized cycle-after', function( e, opts ) {
            if ( ! slideshow.is('.cycle-paused') )
                progress.animate({ width: '100%' }, opts.timeout, 'linear' );
        });

        slideshow.on( 'cycle-paused', function( e, opts ) {
           progress.stop(); 
        });

        slideshow.on( 'cycle-resumed', function( e, opts, timeoutRemaining ) {
            progress.animate({ width: '100%' }, timeoutRemaining, 'linear' );
        });
    	
    	$(window).load(function(){

    		// Center Loader 
    		$('.loader div').css('margin-top', $(window).height()/2 - $('.loader div').outerHeight()/2);

    		// Body Positioning
    		var windowWidth = $(window).width(),
                windowHeight = $(window).height(),
                mhHeight = $('.mainhead').outerHeight(),                
                homedesHeight = $('.home-destaque').outerHeight();

            // Proper Height Space
            $('.body').css('margin-top', mhHeight);
            // Proper Slider Height
            $('.cycle-slide').css('height', windowHeight - mhHeight - homedesHeight);
            // Assign respective DIV Backgrounds
            $('.cycle-slide').each(function() {
                var imgBg = $(this).attr('data-image-insert');
                $(this).css('background', 'url("' + imgBg + '")');
            });
            
        });
    
    }

});