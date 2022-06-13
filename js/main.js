$(function() {

    /*БУРГЕР МЕНЮ НА JQUERY*/
    $('.menu__btn').on('click', function() {
        $('.header__top').toggleClass('header__top--active');
        $('.header__burger-menu').toggleClass('header__burger-menu--active');
        $('.menu__btn').toggleClass('menu__btn--active');
    });

});


/*КОД АККОРДЕОНА ВЗЯТ ИЗ ИНТЕРНЕТА, ПОНЯТИЮ НЕ ИМЕЮ КАК ОН РАБОТАЕТ*/
var accordion = function() {
    var data = $(".accordion").attr("data-accordion");

    $(".breaking-item__title").on("click", function() {

        if (data === "close") {
            $(".breaking-item__inner").slideDown();
            if ($(this).hasClass("active")) {
                $(this).toggleClass("active");
            } else {
                $(".accordion__item-header").removeClass("active");
                $(this).toggleClass("active");
            }
        } else {
            $(this).toggleClass("active");
        }
        $(this).next(".breaking-item__inner").not(":animated").slideToggle();
    });
};
accordion();

/* НАСТРОЙКА И ПОДКЛЮЧЕНИЕ SLIDER SWIPER*/
/*КОД СЛАЙДЕРА "ПОЧЕМУ ВЫБИРАЮТ" */
let swiper = new Swiper('.slider-choice__inner', {

    centeredSlides: true,
    slidesPerView: "auto",
    spaceBetween: 57,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },


});
/*КОД СЛАЙДЕРА "ОТЗЫВЫ" */
let reviewsSwiper = new Swiper('.reviews__slider', {

    centeredSlides: true,
    slidesPerView: "auto",
    spaceBetween: 44,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },



});

/*КОД КНОПКИ "НАВЕРХ" */
let btn = $('.button-up');

$(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});

btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '300');
});