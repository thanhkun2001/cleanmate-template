$(function () {
  AOS.init();

  $(document).ready(function () {
    $(window).scroll(function () {
      // sticky navbar on scroll script
      // scroll-up button show/hide script
      if (this.scrollY > 500) {
        $(".scroll-up-btn").addClass("show");
      } else {
        $(".scroll-up-btn").removeClass("show");
      }
    });
    // slide-up script
    $(".scroll-up-btn").click(function () {
      $("html").animate({ scrollTop: 0 });
      // removing smooth scroll on slide-up button click
      $("html").css("scrollBehavior", "auto");
    });
  });
});

$(".banner-image").slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  dots: true,
  speed: 300,
  infinite: true,
  autoplaySpeed: 5000,
  autoplay: true,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        arrows: false,
        dots: false,
      },
    },
    {
      breakpoint: 575,
      settings: {
        arrows: false,
        dots: false,
      },
    },
    {
      breakpoint: 1230,
      settings: {
        arrows: false,
        dots: false,
      },
    },
  ],
});

$(".multiple-items").slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  dots: true,
  speed: 300,
  infinite: true,
  autoplaySpeed: 5000,
  autoplay: true,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        arrows: false,
        dots: false,
      },
    },
    {
      breakpoint: 575,
      settings: {
        arrows: false,
        dots: false,
      },
    },
    {
      breakpoint: 1230,
      settings: {
        arrows: false,
        dots: false,
      },
    },
  ],
});

$(".text-slider").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  dots: true,
  speed: 300,
  infinite: true,
  autoplaySpeed: 5000,
  autoplay: true,
  responsive: [
    {
      breakpoint: 575,
      settings: {
        arrows: false,
      },
    },
    {
      breakpoint: 992,
      settings: {
        arrows: false,
        dots: false,
      },
    },
    {
      breakpoint: 1230,
      settings: {
        arrows: false,
        dots: false,
      },
    },
  ],
});
