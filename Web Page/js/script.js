(function ($) {
    'use strict';

    $('.item2 li').hover(function () {
        $(this).find('svg.fa-arrow-circle-right').removeClass("hidden1");
        $(this).find('svg.fa-circle').addClass("hidden1");
    }, function () {
        $(this).find('svg.fa-arrow-circle-right').addClass("hidden1");
        $(this).find('svg.fa-circle').removeClass("hidden1");
    });

    $('.image-content').hover(function () {
        $(this).find('.circle-icon').toggleClass("circle-icon-hover");
    }, function () {
        $(this).find('.circle-icon').toggleClass("circle-icon-hover");
    });

    $('a[href="#"]').click(function ($) {
        $.preventDefault()
    });

    var $window = $(window);

    if ($window.width() > 767) {
        new WOW().init();
    }

    $window.on('scroll', function () {
        if ($window.scrollTop() > 0) {
            $('.nav-menu').addClass('sticky');
        } else {
            $('.nav-menu').removeClass('sticky');
        }
    });

})(jQuery);