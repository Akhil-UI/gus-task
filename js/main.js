(function($) {
  
  "use strict";
    $(window).on('beforeunload', function() {
      $('body').hide();
      $(window).scrollTop(0);
    });
      
     //   preloader
    $(window).ready(function() {
        $('#preloader').delay(200).fadeOut('fade');
    });
  
  
    /* 
   One Page Navigation
   ========================================================================== */


    $(window).on('load', function() {
       
        $('body').scrollspy({
            target: '.navbar-collapse',
            offset: 195
        });

        $(window).on('scroll', function() {
            if ($(window).scrollTop() > 100) {
                $('.fixed-top').addClass('menu-bg');
            } else {
                $('.fixed-top').removeClass('menu-bg');
            }
        });

    });
    
     $("html").easeScroll();


 /*Services Box Slider*/
 $("#aboutus-slider").owlCarousel({
     autoplay: false,
     autoplayTimeout: 3000,
     autoplayHoverPause: true,
     smartSpeed: 1200,
     loop: true,
     nav: false,
     navText: false,
     dots: false,
     mouseDrag: true,
     touchDrag: true,
     center: true,
     responsive: {
         0: {
             items: 1
         },
         640: {
             items: 3
         }
     }
 });

 /*Services Box Slider*/
 $("#courses-slider").owlCarousel({

     loop: true,
     margin: 30,
     nav: true,
     dots: true,
     autoplay: true,
     navText: ["<i class='fas fa-arrow-left'></i>", "<i class='fas fa-arrow-right'></i>"],
     responsive: {
         0: {
             items: 1
         },
         640: {
             items: 3
         }
     }
 });

 /*sliderBlog Slider*/
 $("#sliderBlog").owlCarousel({
     stagePadding: 14,
     autoplay: true,
     autoplayTimeout: 3000,
     autoplayHoverPause: true,
     smartSpeed: 1200,
     margin: 30,
     loop: true,
     nav: true,
     navText: ["<i class='fas fa-arrow-left'></i>", "<i class='fas fa-arrow-right'></i>"],
     dots: false,
     mouseDrag: true,
     touchDrag: true,

     responsive: {
         0: {
             items: 1
         },
         640: {
             items: 3
         }
     }
 });



  //jQuery for page scrolling feature - requires jQuery Easing plugin
    $(function() {
        $(document).on('click', 'a.page-scroll', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top-59
            }, 900, 'easeInOutExpo');
            event.preventDefault();
        });
    });
  /* 
   Back Top Link
   ========================================================================== */
    var offset = 200;
    var duration = 500;
    $(window).scroll(function() {
      if ($(this).scrollTop() > offset) {
        $('.back-to-top').fadeIn(400);
      } else {
        $('.back-to-top').fadeOut(400);
      }
    });

    $('.back-to-top').on('click',function(event) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: 0
      }, 600);
      return false;
    })





}(jQuery));

