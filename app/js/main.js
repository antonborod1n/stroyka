$ (function(){
    $('.slider').slick({
        arrows: false,
        autoplay: true,
        speed: 800,
        dots: true,
    });
    $('.reviews__slider').slick({
        prevArrow: '<button type="button" class="slick-prev"><img src="images/slider/arrow-left.svg" alt="arrow"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="images/slider/arrow-right.svg" alt="arrow"></button>',
        arrows: true,
        dots: false,
    });
});

$('.arrow-up').click(function () {
    $('body,html').animate({ scrollTop: 0}, 800);
});

$(window).scroll(function() {
    let scrolled = $(window).scrollTop();

    if(scrolled > 350) {
        $('.arrow-up').addClass('arrow-up--active');
    } else {
        $('.arrow-up').removeClass('arrow-up--active');
    }
});

$(document).ready(function() {
    $('.question__title').click(function(event) {
        if($('.question__inner').hasClass('question__one')){
            $('.question__title').not($(this)).removeClass('active');
            $('.question__text').not($(this).next()).slideUp(200);
        }
        $(this).toggleClass('active').next().slideToggle(200);
    });
});






