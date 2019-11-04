function getOffsets() {
	topOffset = $(".header_site").outerHeight();
	bottomOffset = $(".footer_section").outerHeight();
	$(".content_section").css({
		"padding-top" : topOffset + "px",
		"padding-bottom" : bottomOffset + "px"
	});
}

var w = window,
d = document,
e = d.documentElement,
g = d.getElementsByTagName('body')[0],
bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

var topOffset,
    bottomOffset;

$(window).load(function() {

});

$(window).resize(function() {
	getOffsets();
});

$(document).scroll(function() {

});

$(document).ready(function() {
	getOffsets();

	$(".big_slider").each(function() {
		var galleryName = $(this).attr("data-gallery");
		$(".big_slider[data-gallery = '"+galleryName+"']").not(".slick-initialized").slick({
			dots: false,
			arrows: false,
			autoplaySpeed: 4000,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1,
			fade: true,
			asNavFor: $(".miniature_slider"),
		});
		$(".miniature_slider[data-gallery = '"+galleryName+"']").not(".slick-initialized").slick({
			dots: false,
            arrows: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            vertical: true,
            verticalSwiping: true,
            focusOnSelect: true,
            asNavFor: $(".big_slider")
            // responsive: [
            //     {
            //       breakpoint: 1140,
            //       settings: {
            //         slidesToShow: 5,
            //         slidesToScroll: 1
            //       }
            //     },
            //     {
            //       breakpoint: 960,
            //       settings: {
            //         slidesToShow: 4,
            //         slidesToScroll: 1
            //       }
            //     },
            //     {
            //       breakpoint: 768,
            //       settings: {
            //         slidesToShow: 3,
            //         slidesToScroll: 1
            //       }
            //     },
            //     {
            //       breakpoint: 510,
            //       settings: {
            //         slidesToShow: 2,
            //         slidesToScroll: 1
            //       }
            //     },
            //     {
            //       breakpoint: 400,
            //       settings: {
            //         slidesToShow: 1,
            //         slidesToScroll: 1
            //       }
            //     }
            //   ]
		});
	});

   $(".respmenubtn").click(function() {
         if( $("#resp_nav").is(":hidden") ) {
               $("#resp_nav").fadeIn(300);
         $(this).addClass("active");
         } else {
               $("#resp_nav").fadeOut(300);
               $(this).removeClass("active");
         }
   });

   $(this).keydown(function(eventObject){
     if (eventObject.which == 27 &&
         $("#resp_nav").is(":visible") ) {
             $("#resp_nav").fadeOut(300);
             $(".respmenubtn").removeClass("active");
     }
   });

});