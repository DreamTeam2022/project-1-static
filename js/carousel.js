var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 60,
  centeredSlides: true,

  pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      "@0.00": {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      "@0.50": {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      "@0.75": {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      "@1.00": {
        slidesPerView: 4.5,
        spaceBetween: 24,
      },
      "@1.50": {
        slidesPerView: 5,
        spaceBetween: 50,
      },
    },

  slidesPerGroup: 1,
  loop: false,
  loopFillGroupWithBlank:false,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
