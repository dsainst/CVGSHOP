jQuery(document).ready(function(i){i(document).tooltip(),window.onload=function(){if(i(window).width()>"1220"){var t=i("#main-block").height(),e=i(".h-main").height(),s=i(".h-main2").height();s>e&&(t>e?(i(".h-main").height(t),i(".h-main2").height(t)):i(".h-main").height(s)),e>s&&(t>e?(i(".h-main").height(t),i(".h-main2").height(t)):i(".h-main2").height(e)),i(".airSticky").stick_in_parent({parent:".airSticky__stop-block"}),i(".airSticky2").stick_in_parent({parent:".airSticky__stop-block"})}};var t=i("#overlay"),e=i(".open_modal"),s=i(".modal_close, #overlay"),a=i(".modal_div");e.click(function(e){e.preventDefault();var s=i(this).attr("href");t.fadeIn(400,function(){i(s).css("display","block").animate({opacity:1,top:"50%"},200)})}),s.click(function(){a.animate({opacity:0,top:"45%"},200,function(){i(this).css("display","none"),t.fadeOut(400)})}),i(window).on("resize",function(t){return function(t){i(document.body).trigger("sticky_kit:recalc");var e=i("#main-block").height(),s=i(".h-main").height(),a=i(".h-main2").height();a>s&&(e>s?(i(".h-main").height(e),i(".h-main2").height(e)):i(".h-main").height(a)),s>a&&(e>s?(i(".h-main").height(e),i(".h-main2").height(e)):i(".h-main2").height(s))}}(this));var o=!0;i(window).scroll(function(){return o?void i(".animateNum").each(function(){var t=i(this).offset().top,e=i(window).scrollTop(),s=i(window).height(),a=i(this).attr("data-separator"),n=i(this).attr("data-num");a?comma_separator_number_step=i.animateNumber.numberStepFactories.separator(" "):comma_separator_number_step=!1,e+s>t&&(i(this).stop().animateNumber({number:n,numberStep:comma_separator_number_step},2e3),o=!1)}):!1});var n;i(".low-menu li a").hover(function(){n=i(this).attr("class"),i(this).addClass(n+"1")},function(){i(this).removeClass(n+"1")}),i(".carousel-complects").slick({dots:!1,infinite:!0,speed:300,arrows:!0,slidesToShow:5,centerMode:!1,slidesToScroll:5,prevArrow:'<div class="btn-arrow-left"><a class="slick-prev"><i class="fa fa-chevron-left"></i></a></div>',nextArrow:'<div class="btn-arrow-right"><a class="slick-next"><i class="fa fa-chevron-right"></i></a></div>',responsive:[{breakpoint:1604,settings:{slidesToShow:4,slidesToScroll:4}},{breakpoint:1300,settings:{slidesToShow:3,slidesToScroll:3}}]}),i(".partners-carousel").slick({dots:!1,infinite:!0,speed:300,arrows:!0,slidesToShow:7,centerMode:!1,slidesToScroll:7,prevArrow:'<div class="btn-arrow-left"><a class="slick-prev"><i class="fa fa-chevron-left"></i></a></div>',nextArrow:'<div class="btn-arrow-right"><a class="slick-next"><i class="fa fa-chevron-right"></i></a></div>',responsive:[{breakpoint:1600,settings:{slidesToShow:6,slidesToScroll:6}},{breakpoint:1300,settings:{slidesToShow:5,slidesToScroll:5}},{breakpoint:900,settings:{slidesToShow:4,slidesToScroll:4}},{breakpoint:480,settings:{slidesToShow:3,slidesToScroll:3}}]})});