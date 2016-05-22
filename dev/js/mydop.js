/**
 * Created by ������ on 28.10.2015.
 */

$(function() {
    function imgLoaded(img){
        var $img = $(img);
        $img.parent().addClass('loaded');
    };
    function lazyLoad(){
        var $images = $('.lazy_load');
        jQuery.each( $images, function( i, val ) {

            $img = $(this),
                src = $img.attr('data-src');

            $img.removeAttr("data-src");

            $img
                .on('load',imgLoaded($img[0]))
                .attr('src',src);
        });
    }
    $(window).load(function(){
        lazyLoad();
    });
});

jQuery(document).ready(function($){
    $( ".catalog-sound" ).accordion({
        heightStyle: "content",
        collapsible: true
    });
    $(document).tooltip();
    window.onload = function() {
        if ($(window).width()>'1220') {
            var x1 = $('#main-block').height(),
                x2 = $('.h-main').height(),
                x3 = $('.h-main2').height();
            if (x3>x2)
                if (x1>x2) {
                    $('.h-main').height(x1);
                    $('.h-main2').height(x1);
                } else {
                        $('.h-main').height(x3);
                    }
            if (x2>x3)
                if (x1>x2) {
                    $('.h-main').height(x1);
                    $('.h-main2').height(x1);
                } else {
                    $('.h-main2').height(x2);
                }

            $(".airSticky").stick_in_parent({
                parent: ".airSticky__stop-block",
                offset_top: 95
            });
            $(".airSticky2").stick_in_parent({
                parent: ".airSticky__stop-block",
                offset_top: 95
            });
        }
    };

    /* !!!!!!!MODAL WINDOW!!!!!!!!! */
    var overlay = $('#overlay'); // �o��o��a, �o���a ���� o��a �a ���a����
    var open_modal = $('.open_modal'); // ��� ������, �o�o��� ����� o�����a�� o��a
    var close = $('.modal_close, #overlay'); // ���, ��o �a����a�� �o�a���o� o��o, �.�. ������� � o������-�o��o��a
    var modal = $('.modal_div'); // ��� ������� �o�a����� o��a

    open_modal.click( function(event){ // �o��� ���� �o ������ � ��a��o� open_modal
        event.preventDefault(); // �����a�� ��a��a���o� �o�������
        var div = $(this).attr('href'); // �o����� ���o�� � ������o�o� � �������o� ������
        overlay.fadeIn(400, //�o�a���a�� o������
            function(){ // �o��� o�o��a��� �o�a���a��� o������
                $(div) // ����� ���o�� � ������o�o� � ���a�� �� ��� jquery o�����
                    .css('display', 'block')
                    .animate({opacity: 1, top: '50%'}, 200); // ��a��o �o�a���a��
            });
    });

    close.click( function(){ // �o��� ���� �o �������� ��� o������
        modal // ��� �o�a����� o��a
            .animate({opacity: 0, top: '45%'}, 200, // ��a��o ������
            function(){ // �o��� ��o�o
                $(this).css('display', 'none');
                overlay.fadeOut(400); // ������ �o��o���
            }
        );
    });

    $(window).on("resize", (function(_this) {
        return function(e) {
            $(document.body).trigger("sticky_kit:recalc");
            var x1 = $('#main-block').height(),
                x2 = $('.h-main').height(),
                x3 = $('.h-main2').height();
            if (x3>x2)
                if (x1>x2) {
                    $('.h-main').height(x1);
                    $('.h-main2').height(x1);
                } else {
                    $('.h-main').height(x3);
                }
                if (x2>x3)
                    if (x1>x2) {
                        $('.h-main').height(x1);
                        $('.h-main2').height(x1);
                    } else {
                        $('.h-main2').height(x2);
                    }
        };
    })(this));

    var show = true;
    /* ----------- FIXED TOP MENU BEGIN -------------- */
    var h_hght = 174, // ������ �����
        h_mrg = 48;    // ������ ����� ����� ��� �� �����

    $(window).scroll(function() {
        var top = $(this).scrollTop();
        var elem = $('.top-menu');
            //elem2 = $('.top-line');
        //if (top>0) elem2.addClass('fixed-menu'); else elem2.removeClass('fixed-menu');
        if (top+h_mrg < h_hght) {
            elem.css('top', (h_hght-top));
            elem.removeClass('fixed-menu');
        } else {
            elem.css('top', h_mrg);
            elem.addClass('fixed-menu');
        }
        /* ----------- FIXED TOP MENU END -------------- */
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
        autoplay: true,
        autoplaySpeed: 2000,
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