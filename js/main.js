/*------------------------------------    
    06. Search Bar
--------------------------------------*/ 
    
$( '.search-open' ).on( 'click', function () {
    $( 'body' ).toggleClass( 'search-box-show-hide' );
    return false;
});

$( '.search-close-btn .search-close-btn-icon' ).on( 'click', function () {
    $( 'body' ).toggleClass( 'search-box-show-hide' );
    return false;
});

/*--------------------------
    05. ScrollUp
---------------------------- 
$.scrollUp({
    scrollText: '<i class="zmdi zmdi-chevron-up"></i>',
    easingType: 'linear',
    scrollSpeed: 900,
    animation: 'fade'
});*/

/*------------------------------------    
    07. Shopping Cart Area
--------------------------------------*/
$('#shopping-cart').on('click', function(e) {
    e.preventDefault();
    $('.shp-cart-panel').addClass('shp-cart-on');
    $('.body__overlay').addClass('is-visible');

});

$('.shp-cart-btn-close').on('click', function(e) {
    e.preventDefault();
    $('.shp-cart-panel').removeClass('shp-cart-on');
    $('.body__overlay').removeClass('is-visible');
});

/*-----------------------------------------------
    20 Slider Activations
-------------------------------------------------*/

if ($('.slider-activation-wrap').length) {
    $('.slider-activation-wrap').owlCarousel({
        loop: true,
        margin:0,
        nav:true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        smartSpeed: 1000,
        autoplay: false,
        navText: [ '<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>' ],
        autoplayTimeout: 10000,
        items:1,
        dots: false,
        lazyLoad: true,
        responsive: {
            0: {
                items: 1,
            },
            767: {
                items: 1,
            },
            991: {
                items: 1,
            }
        } 
    });
}

var SCROLLING_NAVBAR_OFFSET_TOP = 50;
  $(window).on('scroll', function () {
    var $navbar = $('.navbar');

    if ($navbar.length) {
      if ($navbar.offset().top > SCROLLING_NAVBAR_OFFSET_TOP) {
          //fondo Personalizado
        $('.scrolling-navbar').addClass('bg_menu');
        $('.scrolling-navbar').removeClass('navbar-transparent');
        $("#navbarLogo").attr("src","img/logo_dark.gif");
      } else {
          //transparente
        $('.scrolling-navbar').removeClass('bg_menu');
        $('.scrolling-navbar').addClass('navbar-transparent');
        $("#navbarLogo").attr("src","img/logo_transparent.png");
      }
    }
  });