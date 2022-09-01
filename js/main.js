// Features tab section
// Tab Activation
$("#tab-1").click(function () {
  $(this).addClass("active");
  $("#tab-2").removeClass("active");
  $("#tab-3").removeClass("active");
});
$("#tab-2").click(function () {
  $(this).addClass("active");
  $("#tab-1").removeClass("active");
  $("#tab-3").removeClass("active");
});
$("#tab-3").click(function () {
  $(this).addClass("active");
  $("#tab-1").removeClass("active");
  $("#tab-2").removeClass("active");
});
// Content Show & Hide
$("#tab-1").click(function () {
  $(".tab-1").fadeIn("slow");
  $(".tab-2").hide();
  $(".tab-3").hide();
});
$("#tab-2").click(function () {
  $(".tab-2").fadeIn("slow");
  $(".tab-1").hide();
  $(".tab-3").hide();
});
$("#tab-3").click(function () {
  $(".tab-3").fadeIn("slow");
  $(".tab-1").hide();
  $(".tab-2").hide();
});

// owl-carousel js
$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  dots: false,
  autoplay: true,
  autoplayTimeout: 4000,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});

// WOW JS
new WOW().init();