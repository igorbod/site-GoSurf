window.addEventListener('DOMContentLoaded', function () {
'use strict';

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

  // change header map parts
  let buttonSlider = document.querySelectorAll('img[class*="header-slide-"]'),
      sliderIndex = 0;

  buttonSlider.forEach(function(button) {
    button.addEventListener('click', function() {
      let sliderCur = document.querySelector('.slick-current'),
          sliderIndex = sliderCur.getAttribute('data-slick-index'),
          dots = document.querySelectorAll('path[class^="header__map-dot"]'),
          paths = document.querySelectorAll('path[class^="header__map-path"]'),
          placesName = document.querySelectorAll('div[class^="header__map-place"]');

      dots.forEach(function(item) {
        item.removeAttribute('stroke');
        item.removeAttribute('stroke-width');
        item.removeAttribute('stroke-linejoin');
      });

      paths.forEach(function (item) {
        item.style.display = "none";
      });

      placesName.forEach(function (item) {
        item.style.display = "none";
      });

      for (let i = 0; i <= paths.length; i++) {
        if (sliderIndex == i) {
          dots[i].setAttribute('stroke', '#4AF6CD');
          dots[i].setAttribute('stroke-width', '10px');
          dots[i].setAttribute('stroke-linejoin', 'round');
          placesName[i].style.display = "block";
          paths[i].style.display = "block";
          paths[i].classList.add('line-animation');
          }
        }
      });
  });

  // Get and set current date
  let curDate = new Date(),
      curDay = document.querySelector('.header__date-day'),
      curMonth = document.querySelector('.header__date-month'),
      curYear = document.querySelector('.header__date-year');

  // add null when get 1 digit
  function zero(num) {
    if (num <= 9) {
      return '0' + num;
    } else return num;
  }

  curDay.textContent = curDate.getDate();
  curMonth.textContent = zero(curDate.getMonth()+1);
  curYear.textContent = zero(curDate.getFullYear());

  // Get and set current location

  if (YMaps.location) // Check available
  {
    $(".header__location-name").html(YMaps.location.city);
  } else
    alert("Please, allow access to your geoposition!");
    $(".header__location-name").html("Unknown");
  });