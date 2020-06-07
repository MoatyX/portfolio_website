$(document).ready(function() {
    $('.prj-slider-wrapper').slick({
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 20000,
        nextArrow: $('.next'),
        prevArrow: $('.prev'),
        mobileFirst: true,
      });
});