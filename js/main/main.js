const swiperProgressBar = document.querySelector(".swiper-progress-bar");
// const swiperButtonPlay = document.querySelector(".swiper-button-play .play");
// const swiperButtonStop = document.querySelector(".swiper-button-play .stop");

let swiper = new Swiper(".swiper-container", {
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  speed: 500,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },
  on: {
    init: function () {
      // console.log("swiper 초기화 직후에 실행");
      swiperProgressBar.classList.remove("animate");
      swiperProgressBar.classList.remove("active");
      swiperProgressBar.classList.add("animate");
      swiperProgressBar.classList.add("active");
    },
    slideChangeTransitionStart: function () {
      // console.log(
      //   "다른 슬라이드(다음 또는 이전)로의 애니메이션 시작 시 이벤트가 발생"
      // );
      swiperProgressBar.classList.remove("animate");
      swiperProgressBar.classList.remove("active");
      swiperProgressBar.classList.add("active");
    },
    slideChangeTransitionEnd: function () {
      // console.log(
      //   "다른 슬라이드(다음 또는 이전)로의 애니메이션 후 이벤트가 시작"
      // );
      swiperProgressBar.classList.add("animate");
    },
  },
});
// $(".swiper-container").hover(
//   function () {
//     swiper.autoplay.stop();
//     $(".swiper-progress-bar").removeClass("animate");
//   },
//   function () {
//     swiper.autoplay.start();
//     $(".swiper-progress-bar").addClass("animate");
//   }
// );

// swiperButtonPlay.addEventListener("click", function () {
//   swiper.autoplay.start();
//   return false;
// });

// swiperButtonStop.addEventListener("click", function () {
//   swiper.autoplay.stop();
//   return false;
// });
