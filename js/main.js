/*---------------------------------------------------------------------
    File Name: custom.scroll-up.js
---------------------------------------------------------------------*/





(function($) {
  "use strict"; // Start of use strict


  new WOW().init();


//close menu collapse when click

  $('.nav-link').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

//scroll-up
   $('.js-gotop').on('click', function(event){
    event.preventDefault();
       $('html, body').animate({
        scrollTop: $('html').offset().top
       }, 1500, 'easeInOutExpo');
     return false;
    });

  $(window).scroll(function(){

    var $win = $(window);
    if ($win.scrollTop() > 200) {
      $('.js-top').addClass('active');
    } else {
      $('.js-top').removeClass('active');
    }

  });

})(jQuery); // End of use strict