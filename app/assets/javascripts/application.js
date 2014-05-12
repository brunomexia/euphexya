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


$(function() {
  	
    $(document).ready(function(){

        /*//EdiSlider

        var EdiSlider = $('.home-slider');

        EdiSlider.find('.home-slide').each(function(index) {
            var ite = $(this).attr("id");
            document.write(ite);
        });*/



    	//HOMEPAGE JS
    	if ($("#welcome.index").length) {

    		// Code 
    		$('.loader div').css('margin-top', $(window).height()/2 - $('.loader div').outerHeight()/2);

    		// Body Positioning
    		var mhHeight = $('.mainhead').outerHeight();
            var windowWidth = $(window).width();
    		var windowHeight = $(window).height();
    		var homedesHeight = $('.home-destaque').outerHeight();


            //Get the slider and fix the height
            $('#home-slider').bjqs({
                'width' : windowWidth,
                'height' : windowHeight - mhHeight - homedesHeight,
                'animtype' : 'slide',
                'usecaptions' : true,                
                'responsive' : true
            });

    		setTimeout(function() {
    		    $('.body').css('margin-top', mhHeight);

    		    

    		    // Load animation
    		    setTimeout(function(){
    		        $('.loader div').css({'margin-top': 0, 'opacity': 0});
    		        $('.loader').delay(500).fadeOut(250);
    		    }, 185);
    		}, 1500);  

      	}

    });



});