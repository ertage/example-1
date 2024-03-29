/* jshint devel:true */

(function() {
  $(document).ready(function init(){
    initSlider();
    initDynamicNews();
    initMenu();
  });

  function initSlider() {
    var slideSpeed = 1000;
    var slideTimeOut  = 5000;

    var slider = $('.slider');
    var slides = $('.slider__img');
    var btnPrev = $('.slider__btn-prev');
    var btnNext = $('.slider__btn-next');
    var controls  = $('.slider__controls-item');

    var slideNumber = 0;
    var slideTimer;
    var slidesCount = slides.length;

    var timer;

    slides.hide().first().show();


    btnNext.click(function() {
      nextSlide();
      return false;
    });

    btnPrev.click(function() {
      prevSlide();
      return false;
    });

    controls.click(function(){
      useSlide(controls.index(this));
      return false;
    })

    //setInterval(nextSlide, slideTimeOut);

    function nextSlide() {
      var prevSlideNumber = slideNumber;
      if (slideNumber === slidesCount - 1) {
        slideNumber = 0;
      } else {
        slideNumber = slideNumber + 1;
      }

      changeSlide(prevSlideNumber, slideNumber);
    }

    function prevSlide() {
      var prevSlideNumber = slideNumber;
      if (slideNumber == 0) {
        slideNumber = slidesCount - 1;
      } else {
        slideNumber = slideNumber - 1;
      }
      changeSlide(prevSlideNumber, slideNumber);
    }

    function useSlide(number){
      var prevSlideNumber = slideNumber;
      slideNumber = number;
      changeSlide(prevSlideNumber, slideNumber);
    }

    function changeSlide(prevSlideNumber, currentSlideNumber){

      slides.stop(true, true);
      slides.eq(prevSlideNumber).fadeOut(slideSpeed);
      slides.eq(currentSlideNumber).fadeIn(slideSpeed);

      controls.eq(prevSlideNumber).removeClass('controls-item_type_active');
      controls.eq(currentSlideNumber).addClass('controls-item_type_active');
    }
  }

  function initDynamicNews() {
    var tmp = true;
    var newsContainer = $('.content__dynamic-news');

    function updateNews(){
      if (tmp) {
        newsContainer.load('news/1.html');
      } else {
        newsContainer.load('news/2.html');
      }
      tmp = !tmp;
    }

    setInterval(updateNews, 10000);
  }

  function initMenu() {
    var menu = $('.header__content');

    $('.header__icon-burger').click(function(){
      menu.addClass('content_type_open');
    });

    $('.header__icon-close').click(function(){
      menu.removeClass('content_type_open');
    });
  }
})();



