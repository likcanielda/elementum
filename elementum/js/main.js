jQuery(document).ready(function ($) {
     
    "use strict";
    $('.slider').ripples({
        dropRadius: 13,
        perturbance: 0.01
       
    });
    
    $(".text").typed({
        strings: ["<strong>Lorem ipsum </strong>dolor<strong class='primary'> sit amet...</strong>"],
        typespeed: 0,
        loop: true
    });
    
   
    $(window).scroll(function () {
        var top = $(window).scrollTop();
        if (top >= 50)
            {
                $("nav").addClass('secondary');
            }
              else if ($("nav").hasClass('secondary'))
               {
                $("nav").removeClass('secondary');
            }
    });
    
    $('.work').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    });
    
    $("#team-members").owlCarousel({
              items:3,
              autoplay:true,
              smartSpeed:300,
              loop:true,
              autoplayHoverPause:true,
                responsive:{
                  0:{

                     items:1
                  }, 
                 480:{

                     items:2
                  }, 

                 768:{

                     items:3
                  } 
                }

          });
    
     $('.counter').counterUp({
                delay: 10,
                time: 5000
            });
    
   $("a.smooth-scroll").click(function (event) {

        event.preventDefault();
        
        var section = $(this).attr("href");

        $('html, body').animate({
            scrollTop: $(section).offset().top - -2
        }, 1250, "easeInOutExpo");
    });
     new WOW().init();
    
    
    
});