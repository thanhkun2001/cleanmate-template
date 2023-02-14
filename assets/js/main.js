$(function () {
  AOS.init();

  $(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        (this.scrollY > 20) ? $('.banner').addClass("show-index") : $('.banner').removeClass("show-index")
        if(this.scrollY > 500){
            $('.navbar-sticky').addClass("sticky");
            $('.nav-menu-header').removeClass('logo-dark')
        }else{
            $('.navbar-sticky').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });
    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });
});
});







$(".banner-image").slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  dots: true,
});

$(".multiple-items").slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  dots: true,
  responsive: [
    {
      breakpoint: 575,
      settings: {
        arrows: false,
      } 
    },
  ],
});

//   $('.my-slider').slick({
//     slidesToShow: 3,
//     slidesToScroll: 3,
//     arrows: true,
//     dots: true,
//     speed: 300,
//     infinite: true,
//     autoplaySpeed: 5000,
//     autoplay: true,
//     responsive: [
//   {
//     breakpoint: 991,
//     settings: {
//       slidesToShow: 3,
//     }
//   },
//   {
//     breakpoint: 767,
//     settings: {
//       slidesToShow: 3,
//     }
//   },

// ]
//   });
