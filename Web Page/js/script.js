(function ($) {
    'use strict';

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