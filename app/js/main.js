$(function() {
    $('.slider-choice__inner ').slick({
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        variableWidth: true,
        responsive: [{
                breakpoint: 1199,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
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

    $('.star').rateYo({
        starWidth: "20px",
        ratedFill: "#ADC431",
        normalFill: "#ccccce",

        readOnly: true

    });


    $('.menu__btn').on('click', function() {
        $('.menu__list').toggleClass('menu__list--active');
    });

});

/*пытаюсь сделать кнопку на jquery "показать ещё"*/

/* $(function() {


    $(".price__service-line-hide").hide();
    $(".price__btn-load").click(function() {
        $(this).next(".price__service-line-hide").slideToggle();

    });
}); */