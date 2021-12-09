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

