$(function () {
  // scroll control variables
  var lastScrollTop = 0;
  var delta = 50;      //Note: movement tolerance (aka mouse sensitivity)
  var navbarHeight = $('header').outerHeight();  //dynamically find menu height

  /* optimized scroll technique.. aka throttling */
  var didScroll;
  $(window).scroll(function (event) {
    didScroll = true;
  });
  setInterval(function () {
    if (didScroll) {
      hasScrolled();
      didScroll = false;
    }
  }, 250);    //Note: slow it right down to check throttling

  function hasScrolled() {
    // console.log('>>fn hasScrolled start');
    var st = $(this).scrollTop();
    // console.log('....scrollTop (st):' + st);
    // console.log('....lastScrollTop:' + lastScrollTop);
    // console.log('....window height' + $(window).height());
    // console.log('....document height' + $(document).height());

    // stop progress if not scrolled more than delta
    if (Math.abs(lastScrollTop - st) <= delta) {
      lastScrollTop = st;  //Note: comment below

      return;
    }
    /* more speed of scroll, not total px amount scrolled
     basic always fires once threshold exceeded, alternative is relative to last position
     (if return last top then scroll has to be rapid (not slow), to exceed threshold)
     */

    // if scrolled down & past navbar, add class .nav-up.
    // (necessary so never see what is "behind" the navbar)
    if (st > lastScrollTop && st > (navbarHeight -80)) {
      // Scroll Down
      $('header').removeClass('nav-down').addClass('nav-up');
      $('.ao-hamburger-nav').addClass('ao-hide');
    } else {
      // Scroll Up
      // if did not scroll past the document (possible on mac)...!
      if (st + $(window).height() < $(document).height()) {
        $('header').removeClass('nav-up').addClass('nav-down');
      }
    }
    lastScrollTop = st;
  }

});


// show/hide hamburger
function toggleMobileMenu() {
    $('.ao-hamburger-nav').toggleClass('ao-hide');
};



/* toggles pc-mobile image when hover */
$(function () {

  $('#pc-mobile-img').hover(function () {
    this.src = 'assets/img/pc-mobile-orange.png';
  }, function () {
    this.src = 'assets/img/pc-mobile-blue.png';
  });

});

/* toggles notes image when hover */
$(function () {

  $('#notes-img').hover(function () {
    this.src = 'assets/img/music-orange-400.png';
  }, function () {
    this.src = 'assets/img/music-blue-400.png';
  });

});



/* --------
    parked
   --------*/

/* function animates scroll to 'info' section (index page) */
  function showContact() {

  $('html, body').stop(true, true).animate({
    scrollTop: parseInt($("#contact").offset().top -100)   //100
  }, {
    duration: 500,
    complete: function() {
      $('header').removeClass('nav-up').addClass('nav-down')
    }
  });
  //true subsequently fires href,  false stops href
  return false;
};
