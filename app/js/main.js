$(function() {
    $('.slider-choice__inner ').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        /* autoplay: true, */
        autoplaySpeed: 2000,
        variableWidth: true,

    });

    $('.reviews__slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2300,
        variableWidth: true,

    });

    $('.actions__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        autoplay: true,
        vertical: true,
        verticalSwiping: true,
        autoplaySpeed: 2000,

    });

    $(".star").rateYo({
        starWidth: "20px",
        ratedFill: "#ADC431",
        normalFill: "#ccccce",

        readOnly: true

    });

});