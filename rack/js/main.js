$(document).ready(function() {
   var introtext = document.getElementById('intro');
   console.log("main.js infotext");
   //window.alert("KEIJOO");
  // TweenMax.to(introtext, 1.35, {marginLeft: '29.03%'});
});

//Script for handling the anchor scrolling
//
$('a[href*=#]:not([href=#])').click(function() {
   if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 400);
        return false;
      }
   }
});
//});


