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


/* Note: Waypoints invoking <audio> play() mathod, PARKED at MO 
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
