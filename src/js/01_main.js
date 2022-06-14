function storySlider() {
    // if (!init) {
    //     return
    // }
    var swiper = new Swiper('.story .swiper-container', {
        slidesPerView: "auto",
        spaceBetween: 0,
        // loop: true,
        pagination: {
            el: '.story .swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
        breakpoints: {
            320: {
                allowTouchMove: true
            },
            768: {
                allowTouchMove: false
            },
        }
    })
}


$(document).ready(function() {
    $('input[type="tel"]').mask('+7 999 999-9999', { placeholder: '+7             ' });
    storySlider()


    $(".header__burger").click(function() {
        $(this).toggleClass("header__burger--active")
        $(".header__mob").toggleClass("header__mob--active")
        $("body").toggleClass("fixed-body")
    })

    $(".train__answer").click(function() {
        let answerTrue = $(this).attr("data-answer")

        if (answerTrue === "true") {
            $(this).addClass("train__answer--true")
            $(".train__desc").slideDown()
        } else {
            $(this).addClass("train__answer--false")
            setTimeout(() => {
                $(this).removeClass("train__answer--false")
                $(".train__answers").removeClass("train__answers--disabled")
            }, 2000);
        }

        $(".train__answers").addClass("train__answers--disabled")


    })

    $(".quiz__answer").click(function() {
        let answerTrue = $(this).attr("data-answer")

        if (answerTrue === "true") {
            $(this).addClass("quiz__answer--true")
        } else {
            $(this).addClass("quiz__answer--false")
            setTimeout(() => {
                $(this).removeClass("quiz__answer--false")
                $(".quiz__answers").removeClass("quiz__answers--disabled")
            }, 2000);
        }

        $(".quiz__answers").addClass("quiz__answers--disabled")
    })


    initSlider()
    let slidesLength = $(".lesson__img").length
    console.log(slidesLength);

    function initSlider() {
        let seconds = +$(".lesson__img--active").attr("data-delay")
        let num = +$(".lesson__img--active").attr("data-num")
        changeSlide(seconds, num)
    }

    function changeSlide(seconds, num) {

        setTimeout(() => {
            $(".lesson__img").removeClass("lesson__img--active")
            if (num < slidesLength) {
                $(`.lesson__img[data-num="${num+1}"]`).addClass("lesson__img--active")
            } else {
                $(`.lesson__img[data-num="1"]`).addClass("lesson__img--active")
            }

            initSlider()
        }, seconds * 1000);
    }
});