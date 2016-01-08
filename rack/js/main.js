$(document).ready(function() {
   var introtext = document.getElementById('intro-pic');
   console.log("main.js infotext");
   //window.alert("KEIJOO");
  //TweenMax.to(introtext, 1.35, {opacity: '100'});
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
      result = "My first programming language. Basic knowledge of data structures, Swing-toolkit and database programming. Used JavaEE (Maven/Struts2) in one project.";
    }
    else if(elementsId =="skill-js"){
      result = "Familiar with Bootstrap framework. jQuery is the strongest library. VanillaJS is also one of my strengths, because my Java background. Currently trying to get know better ReactJS and NodeJS.";
    }
    else if(elementsId =="skill-html"){
      result = "Familiar with Bootstrap framework. Strong understanding of HTML-elements";
    }
    else if(elementsId =="skill-scss"){
      result = "Learned Sass-preprocessing language and currently using it. Trying to get know better mixins.";
    }
    else if(elementsId =="skill-php"){
      result = "Basic knowledge of PHP. Being a part of a project where used Laravel-framework.";
    }

    else if(elementsId =="skill-cpp"){
      result = "Knowledge of syntax. Participated C++ course.";
    }
    else if(elementsId =="skill-c"){
      result = "Knowledge of syntax. Participated C course.";
    }
    else if(elementsId =="skill-psql"){
      result = "Studied and used in our university courses. Used in one project";
    }
    else if(elementsId =="skill-msql"){
      result = "Knowledge of syntax. Used in one project.";
    }
    else if(elementsId =="skill-xml"){
      result = "Knowledge of syntax. Used Database programming course.";
    }
    else if(elementsId =="skill-json"){
      result = "Knowledge of syntax. Used in two project.";
    }
    else{
      result = "Coming soon";
    }
    $(infofield).text(result);
  });
});
//});

