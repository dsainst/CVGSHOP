/**
 * Created by Сергей on 28.10.2015.
 */
$(function() {
    $( document ).tooltip();
});

jQuery(document).ready(function($){
    window.onload = function() {
        if ($(window).width()>'1220') {
            $('.h-main').height($('#main-block').height());
            $(".airSticky").stick_in_parent({
                parent: ".airSticky__stop-block"
            });
            $(".airSticky2").stick_in_parent({
                parent: ".airSticky__stop-block"
            });
        }
    };

    $(window).on("resize", (function(_this) {
        return function(e) {
            $(document.body).trigger("sticky_kit:recalc");
            return $('.h-main').height($('#main-block').height());
        };
    })(this));

    var show = true;
    $(window).scroll(function() {
        if (!show) return false;
        $('.animateNum').each(function() {
            var imagePos = $(this).offset().top,
                topOfWindow = $(window).scrollTop(),
                mheight = $(window).height(),
                separator = $(this).attr("data-separator"),
                datanum = $(this).attr('data-num');


            if (separator) comma_separator_number_step = $.animateNumber.numberStepFactories.separator(' ');
            else comma_separator_number_step = false;

            if (imagePos < topOfWindow + mheight) {
                $(this).stop().animateNumber({
                    number: datanum,
                    numberStep: comma_separator_number_step
                }, 2000);
                show = false;
            }
        });
    });


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
                breakpoint: 1604,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4
                }
            },
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            }
        ]
    });

    $('.partners-carousel').slick({
        dots: false,
        infinite: true,
        speed: 300,
        arrows: true,
        slidesToShow: 7,
        centerMode: false,
        slidesToScroll: 7,
        prevArrow: '<div class="btn-arrow-left"><a class="slick-prev"><i class="fa fa-chevron-left"></i></a></div>',
        nextArrow: '<div class="btn-arrow-right"><a class="slick-next"><i class="fa fa-chevron-right"></i></a></div>',
        responsive: [
            {
                breakpoint: 1600,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 6
                }
            },
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
});