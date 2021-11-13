'use strict';
(function() {
  const faqLeft = document.querySelector('.faq__arrow-left');
  const faqRight = document.querySelector('.faq__arrow-right');

  const faqSwiper = new Swiper('.faq__container', {
    slidesPerView: 1,
    // loop: true,
    spaceBetween: 24,

    breakpoints: {
      500: {
        slidesPerView: 2,
      },
      700: {
        slidesPerView: 3,
      },

      1024: {

        slidesPerView: 4,
      }
    },
    navigation: {
      nextEl: '.faq__arrow-right',
      prevEl: '.faq__arrow-left',
    },

  });

  faqSwiper.on('slideChange', function() {
    if (faqSwiper.realIndex == 0) {
      faqLeft.classList.add('hidden');
    } else if (faqSwiper.isEnd) {
      faqRight.classList.add('hidden');
    } else {
      faqRight.classList.remove('hidden');
      faqLeft.classList.remove('hidden');
    }
  })
})();