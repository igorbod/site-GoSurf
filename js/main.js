window.addEventListener('DOMContentLoaded', function () {
'use strict';

  // main slider
  $('.header__slider').slick({
    infinite: true,
    fade: true,
    prevArrow: '<img src="img/icons/arrow-left.svg" alt="Previous" class="slick-prev slider-prev slider-prev_header slider-btn-header">',
    nextArrow: '<img src="img/icons/arrow-right.svg" alt="Next" class="slick-next slider-next slider-next_header slider-btn-header">',
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

  // Section "Surf" slider
  $('.surf-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<img src="img/icons/arrow-left.svg" alt="Previous" class="slick-prev slider-prev">',
    nextArrow: '<img src="img/icons/arrow-right.svg" alt="Next" class="slick-next slider-next">',
    asNavFor: '.surf-slider__map'
  });

  $('.surf-slider__map').slick({
    slidesToShow: 8,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.surf-slider',
    focusOnSelect: true
  });

  // Section holder slider
  $('.holder__slider, .shop__slider').slick({
    infinite: true,
    fade: true,
    prevArrow: '<img src="img/icons/arrow-left.svg" alt="Previous" class="slick-prev slider-prev slider-prev_holder slider-btn-holder">',
    nextArrow: '<img src="img/icons/arrow-right.svg" alt="Next" class="slick-next slider-next slider-next_holder slider-btn-holder">'
  });

  /* COUNTERS ==========================================================================*/
  $('<div class="quantity-nav"><div class="quantity-button quantity-down">-</div></div><div class="quantity-button quantity-up">+</div>').insertAfter('.quantity input');
  $('.quantity').each(function () {
    var spinner = $(this),
      input = spinner.find('input[type="number"]'),
      btnUp = spinner.find('.quantity-up'),
      btnDown = spinner.find('.quantity-down'),
      min = input.attr('min'),
      max = input.attr('max');

    btnUp.click(function () {
      var oldValue = parseFloat(input.val());
      if (oldValue >= max) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue + 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });

    btnDown.click(function () {
      var oldValue = parseFloat(input.val());
      if (oldValue <= min) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue - 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });
  });

  // calculate current price depends of nights and guests
  function calcPrice() {
    let summ = Math.round(($('.slick-current .sleep__nights').val() * $('.slick-current .sleep__summ').data('nights')) + ($('.slick-current .sleep__guests').val() * $('.slick-current .sleep__summ').data('guests')));

    $('.slick-current .sleep__summ').html('$' + summ);
  }

  calcPrice();
  $('.slider-btn-holder').on('click', calcPrice);
  $('.quantity-button').on('click', calcPrice);
  
  /* =================================================================================== */


  // Section Shop hide/show text on surfboard when click "+"/"-" button
  $('.surfboard-box__circle').on('click', function() {
    $(this).toggleClass('active');
  });

  // change header map parts
  let buttonSlider = document.querySelectorAll('.slider-btn-header'),
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

  /* // Get and set current location using "ipwhois"
  let ipaddress = "";
  let ipwhois = request_ipwhois(ipaddress);
  $(".header__location-name").html(ipwhois.city);
  $(".header__map-current").html(ipwhois.city); */

  $('.menu-btn').on('click', function() {
    $('.menu').toggleClass('active');
  });
});