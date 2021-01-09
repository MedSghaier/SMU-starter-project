import 'bootstrap'
import './sass/main.scss'
import 'bootstrap-select';


$(document).ready(function () {
    /*
    -----------------------------------------
    Header Scroll
    -----------------------------------------
    */

    var headerScroll;
    (headerScroll = function () {
        var windowOffset = $(window).scrollTop(),
            triggerOffset = 25;

        if (windowOffset >= triggerOffset) {
            $('.header').addClass('is-scrolling');
        } else {
            $('.header').removeClass('is-scrolling');
        }
    })();

    $(window).on('scroll', headerScroll);

    /*
    -----------------------------------------
    Scroll to section
    -----------------------------------------
    */

    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault()

        $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top - 70, }, 800, function(){
            $('.header__links').removeClass('is-open') ;
            $('.nav-trigger').removeClass('active')
        })
    })
    /*
    -----------------------------------------
    Navigation
    -----------------------------------------
    */
    $('.nav-trigger').on('click', function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $('.header__links').removeClass('is-open');

        } else {
            $(this).addClass('active');
            $('.header__links').addClass('is-open');
        }
    })

    /*
    -----------------------------------------
    Close Navigation
    -----------------------------------------
    */

})
