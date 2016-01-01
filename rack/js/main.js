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
$(document).ready(function() {
  $('.skill-element').click(function(event) {
    var infofield = "#skill-info_field";
    
    var elementsId = $(this).attr('id');
    console.log(elementsId);
    var result="";
    if(elementsId == "skill-java"){
      //window.alert("Keijo2");
      result = "g: how to java";
    }
    else if(elementsId =="skill-js"){
      result = "Familiar with Bootstrap framework. jQuery and vanilla is very familiar and currently trying to get know better React.js.";
    }
    else if(elementsId =="skill-html"){
      result = "Familiar with Bootstrap framework. Strong understanding of HTML-elements";
    }
    else if(elementsId =="skill-scss"){
      result = "Familiar with Sass-preprocessing language and currently using it. Trying to get know better mixins.";
    }
    else{
      result = "Coming soon";
    }
    $(infofield).text(result);
  });
  $('.portfolio-polaroid')       
        .mouseover(function() { 
            var src = $(this).children('img').attr("src").match(/[^\.]+/) + "-thumb.png";
            $(this).attr("src", src);
        })
        .mouseout(function() {
            var src = $(this).attr("src").replace("-thumb.png", ".png");
            $(this).attr("src", src);
        });
});
//});


