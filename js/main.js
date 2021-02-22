var swiper_top = new Swiper('.swiper-container.top', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: '.swiper-pagination',
    },
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    }
});

var swiper_bottom = new Swiper('.swiper-container.bottom', {
    pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
    },
});

$(function() {
var $menu_popup = $('.menu-popup');

$(".btn-menu, .btn-menu-close").click(function(){
    $menu_popup.slideToggle(300, function(){
        if ($menu_popup.is(':hidden')) {
            $('body').removeClass('body_pointer');
            $('.btn-menu').removeClass('close');
        } else {
            $('body').addClass('body_pointer');

            $('.btn-menu').addClass('close');
        }
    });
    return false;
});

$(document).on('click', function(e){
    if (!$(e.target).closest('.menu').length){
        $('body').removeClass('body_pointer');
        $menu_popup.slideUp(300);
    }
});
});


jQuery(document).ready(function($) {
    var btn = $('#button');
    $(window).scroll(function() {
        if ($(window).scrollTop() > 300) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });
    btn.on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop:0}, '300');
    });

    $('.nav li').on('click', function () {
        window.location = $(this).find('a').attr('href')
    });

    $('.nav li').hover(function() {
            $(this).find('a').addClass( "hover" );
        }, function() {
            $( this ).find('a').removeClass( "hover" );
        }
    );


});


function myMap() {
    var mapCanvas = document.getElementById("map");
    var mapOptions = {
        center: new google.maps.LatLng(51.5, -0.2),
        zoom: 10
    };
    var map = new google.maps.Map(mapCanvas, mapOptions);
}
