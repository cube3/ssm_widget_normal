$(document).ready(function(){

  $('.products-holder').slick({
    
    infinite: false,
    draggable: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: true,
    appendDots: $(".section-header"),
    dotsClass: "nav-bullet",
    customPaging: function(slider, i) {
          return "";
      },
    prevArrow: $(".prevArrow"),
    nextArrow: $(".nextArrow")

  });

});