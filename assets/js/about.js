/* scripts specific to about page */

//onload
$(function () {
  
  // invoke animations & audio via click icon - for android support 
  $('#iii-click').on('click', startAOSequence);

  
  //remove iii items when third animation animation completes 
  $('#iii-text-3').one('webkitAnimationEnd oanimationend msAnimationEnd animationend',
    function(e) {
      //code to execute after animation ends
      $('.hide-end1').fadeOut(2000);
    });

  // remove iii items when fourth animation animation completes 
  $('#iii-text-4').one('webkitAnimationEnd oanimationend msAnimationEnd animationend',
    function(e) {
      //code to execute after animation ends
      $('.hide-end2').fadeOut(2800);
    });
  
});


/* function to invoke animations & audio */
function startAOSequence() {
  console.log('clicked icon');
  //togger containers
  $('.ao-iii-text-wrapper.a').css('visibility','hidden');
  $('.ao-iii-text-wrapper.b').css('visibility','visible');
  //add animated classed
  $('.ao-iii-text').addClass('animated zoomIn');
  //fire audio
  $('#background-music').trigger('play');
}


/* ScrollMagic controller - matchMedia disables on mobile */
$(function () {

  var mql = window.matchMedia('all and (min-width: 768px)');  //returns MediaQueryList obj

  var ctrlCreated, scene, scene2, controller;

  var handleMatchMedia = function(mediaQuery) {
    if(mql.matches) {
      //media query matches >= 768
      console.log('debug: matchMedia fired - matches=' + mql.matches);
      // init controller
      controller = new ScrollMagic.Controller();
      ctrlCreated = true;    //used for destroying if RWD< 768

      // build scene
      scene = new ScrollMagic.Scene({triggerElement: "#skills", duration: 520, offset: 365})
        .setPin("#pin1", {pushFollowers: false})   //,{pushFollowers: false}
        // .addIndicators({name: "steve test 1 (duration: 750)",   // required additional library
        //   colorStart: "blue", colorEnd: "purple", colorTrigger: "orange"})
        .addTo(controller);

      // build scene
      scene2 = new ScrollMagic.Scene({triggerElement: "#skills", duration: 520, offset: 365})
        .setPin("#pin2", {pushFollowers: false})   //,{pushFollowers: false}
        // .addIndicators({name: "steve test 1 (duration: 750)",   // required additional library
        //   colorStart: "blue", colorEnd: "purple", colorTrigger: "orange"})
        .addTo(controller);

    } else {
      //mobile - disabled scroll pin effect
      console.log('debug: matchMedia fired - matches=' + mql.matches);

      if (ctrlCreated) {
        // remove multiple scenes from the controller
        scene.removePin(true);
        scene2.removePin(true);
        controller.removeScene([scene, scene2]);
        // controller.destroy(true);
      }
    }
  };
  handleMatchMedia(mql); 						  //execute on load
  mql.addListener(handleMatchMedia);  //execute when MediaQueryList matches prop changes



  /* tweek duration for wider screens */
  var mql2 = window.matchMedia('all and (min-width: 1024px)');  //returns MediaQueryList obj
  var handleMatchMedia2 = function(mediaQuery) {
    if(mql2.matches) {
      //media query matches >= 1024
      console.log('debug: matchMedia2 fired - matches=' + mql.matches);
      scene.duration(600);
      scene2.duration(600);
    } else {
      if (ctrlCreated) {
        scene.duration(520);
        scene2.duration(520);
      }
    }
  }
  handleMatchMedia2(mql2); 						  //execute on load
  mql2.addListener(handleMatchMedia2);  //execute when MediaQueryList matches prop changes


});







/* Note: Waypoints invoking <audio> play() method, PARKED at MO
         - issues with Android (& mbl) needing user event to invoke Html5 audio 
         Starting to look into Audio Libraries that have cross-browser           */

/*
$(function () {

   //when scroll to iii section
   var waypoint = new Waypoint({
   element: document.getElementById('iii'),   //watch not js, no #
   handler: function(direction) {
   if (direction == 'down') {
   //console.log('You have scrolled down to iii');
   //add animate class
   $('.ao-iii-text').addClass('animated zoomIn');
   }
   //else {
   //console.log('You have scrolled up to iii');
   //}
   },
   offset: 'bottom-in-view'
   });
   */
  /*
   //reset iii section
   var waypoint = new Waypoint({
   element: document.getElementById('iii'),   //watch not js, no #
   handler: function(direction) {
   if (direction == 'up') {
   //console.log('You have scrolled down to iii');
   //add animate class
   $('.ao-iii-text').removeClass('animated zoomIn');
   }
   },
   offset: '100%'
   });
   */

  /*
   //background music triggered on ii section
   var inSession = false;
   var waypoint = new Waypoint({
   element: document.getElementById('iii'),   //watch not js, no #
   handler: function(direction) {
   if (direction == 'down') {
   console.log('You have scrolled down to skills');
   //trigger background music
   if (!inSession) {
   //event listener for load, invokes play method
   //              $('#background-music').bind('load',function(){
   //                $('#background-music').trigger('play');
   //              });
   //              $('#background-music').trigger('load');
   $('#background-music').trigger('play');
   inSession = true;
   }
   }
   //else {
   //console.log('You have scrolled up to iii');
   //}
   },
   offset: 'bottom-in-view'
   });
 
});
*/
