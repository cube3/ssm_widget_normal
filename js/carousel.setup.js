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
    nextArrow: $(".nextArrow"),

     responsive: [
    {
      breakpoint: 930,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,

      }
    },
    {
      breakpoint: 540,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: true

      }
    }
    ]

  });

});