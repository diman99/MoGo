$(function () {
  let header = $("#header"),
    introH = $("#intro").innerHeight(),
    scrollOfset = $(window).scrollTop(); // изначальное кол-во px для скролла страницы
  checkScroll(scrollOfset);

  /*Fixed Header*/
  $(window).on("scroll", function () {

    scrollOfset = $(this).scrollTop();

    checkScroll(scrollOfset);
  });

  function checkScroll(scrollOfset) {

    if (scrollOfset >= introH) {
      header.addClass("fixed");
    } else {
      header.removeClass("fixed");
    }
  }

  /*Smoth Scroll*/

  $("[data-scroll]").on("click", function (event) {
    event.preventDefault();

    let
      $this = $(this),
      blockId = $this.data('scroll'),
      blockOffset = $(blockId).offset().top;
      $("#nav a").removeClass("active");
      $this.addClass("active");

    $("html, body").animate({
      scrollTop: blockOffset
    }, 500);


  });

  /*Menu nav toggle*/

  $("#nav_toggle").on("click", function(event) {
    event.preventDefault();

    $(this).toggleClass("active");
    $("#nav").toggleClass("active");
  });

  /*Collapse*/

  $("[data-collapse]").on("click", function(event) {
    event.preventDefault();
    let
      $this = $(this),
      blockId = $this.data('collapse');

      $this.toggleClass("active");

  });

  /*Slider*/

$("[data-slider]").slick({
  infinite: true,
  fade: false,
  slidesToShow: 1,
  slidesToScroll: 1

});

});

