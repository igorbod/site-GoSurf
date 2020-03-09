$(function() {
  // main slider
  $('.header__slider').slick({
    infinite: true,
    fade: true,
    prevArrow: '<img src="img/icons/arrow-left.svg" alt="Previous" class="slick-prev header-slide-prev">',
    nextArrow: '<img src="img/icons/arrow-right.svg" alt="Next" class="slick-next header-slide-next">',
    asNavFor: '.slider-dots'
  });
  
  // nav for Main slider
  $('.slider-dots').slick({
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
    asNavFor: '.header__slider'
  });

});