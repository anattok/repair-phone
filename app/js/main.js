$(function() {

    /*БУРГЕР МЕНЮ НА JQUERY*/
    $('.menu__btn').on('click', function() {
        $('.menu__list').toggleClass('menu__list--active');
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



let swiper = new Swiper('.slider-choice__inner', {

    centeredSlides: true,
    slidesPerView: "auto",
    spaceBetween: 57,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    /* autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    }, */


});