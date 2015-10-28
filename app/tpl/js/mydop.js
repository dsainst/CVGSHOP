/**
 * Created by Сергей on 28.10.2015.
 */
$(function() {
    $( document ).tooltip();
});
jQuery(document).ready(function($){
    window.onload = function() {
        $('.airSticky').airStickyBlock({
            stopBlock: '.airSticky__stop-block'
        });
        $('.airSticky2').airStickyBlock({
            stopBlock: '.airSticky__stop-block'
        });
    };
    var className;
    $('.low-menu li a').hover(function(){
        className = $(this).attr('class');
        $(this).addClass(className+"1");
    },function() {
        $(this).removeClass(className+"1");
    });
    $('.carousel-complects').slick({
        dots: false,
        infinite: true,
        speed: 300,
        arrows: true,
        slidesToShow: 5,
        centerMode: false,
        slidesToScroll: 5,
        prevArrow: '<div class="btn-arrow-left"><a class="slick-prev"><i class="fa fa-chevron-left"></i></a></div>',
        nextArrow: '<div class="btn-arrow-right"><a class="slick-next"><i class="fa fa-chevron-right"></i></a></div>',
        responsive: [
            {
                breakpoint: 1384,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 680,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
});