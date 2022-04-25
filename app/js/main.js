$(document).ready(function() {
    let burgerBtn = $('.header__burger');
    let burgerMenu = $('.header__nav');
    let searchBtn = $('.loupe');
    let searchPanel = $('.search-panel');

    burgerBtn.on('click', function() {
        burgerMenu.toggleClass('active');
        burgerBtn.toggleClass('active');
        $('body').toggleClass('active');
    });

    searchBtn.on('click', function() {
        searchPanel.toggleClass('active');
    });

    $('.main-screen__slider-body').on('init reInit afterChange', function(event, slick, currentSlide, nextSlide) {
        let mainScreenSliderItems = $('.main-screen__slider-item');
        let mainScreenSliderItemsImages = $('.main-screen__slider-item img');
        let mainScreenSliderContents = $('.main-screen__slider-content');

        for (let i = 0; i < mainScreenSliderItems.length; i++) {
            let dataSlider = $(mainScreenSliderItems[i]).attr('data-slider');
            $(mainScreenSliderItemsImages[i]).attr('src', `images/main-screen-slider/0${dataSlider}-grey.png`);
            if ($(mainScreenSliderItems[i]).parent().parent().hasClass('slick-center')) {
                $(mainScreenSliderItemsImages[i]).attr('src', `images/main-screen-slider/0${dataSlider}.png`);
                var num = dataSlider;
            }
        }

        for (let j = 0; j < mainScreenSliderContents.length; j++) {
            $(mainScreenSliderContents[j]).removeClass('active');
            $(mainScreenSliderContents[num - 1]).addClass('active');
        }
    });

    $('.main-screen__slider-body').slick({
        arrows: false,
        variableWidth: true,
        slidesToShow: 5,
        infinite: true,
        centerMode: true,
        focusOnSelect: true,
        speed: 1000,
        touchThreshold: 15
    });

    let $status = $('.most-visited__slider-status');
    let $slickElement = $('.most-visited__slider-body');

    $slickElement.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide) {
        var i = (currentSlide ? currentSlide : 0) + 1;
        $status.html(i + `<span>/ ${slick.slideCount}</span>`);
    });

    $slickElement.slick({
        arrows: true,
        appendArrows: $('.most-visited__slider-arrows'),
        prevArrow: '<button type="button" class="slick-arrow slick-arrow_prev"><img src="images/icons/slider-button-left.svg" alt=""></button',
        nextArrow: '<button type="button" class="slick-arrow slick-arrow_next"><img src="images/icons/slider-button-right.svg" alt=""></button'
    });

    $('.events__slider-body').slick({
        arrows: true,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-arrow slick-arrow_prev"><img src="images/icons/slider-button-left.svg" alt=""></button',
        nextArrow: '<button type="button" class="slick-arrow slick-arrow_next"><img src="images/icons/slider-button-right.svg" alt=""></button'
    });


    let moreItems = $('.more__item');

    for (let i = 0; i < moreItems.length; i++) {
        if ($(moreItems[i]).attr('data-size')) {
            let size = $(moreItems[i]).attr('data-size');
            let sizeArray = size.split('x');
            let itemWidth = parseInt(sizeArray[0]);
            let itemHeight = parseInt(sizeArray[1]);

            $(moreItems[i]).find('.more__item-top').css('width', `${itemWidth}px`);
            $(moreItems[i]).find('.more__item-top').css('height', `${itemHeight}px`);
        }
    }

    let navigationItems = $('.navigation__item');
    let sections = $('.section');
    let scrollSection = true;
    let mainScreenAncor = $('.main-screen__ancor');
    let navigationMenu = $('.navigation');

    mainScreenAncor.on('click', function() {
        scrollForSections($(this));
    });

    navigationItems.on('click', function() {
        scrollForSections($(this));
    });

    function scrollForSections(sectionSend) {
        scrollSection = false;

        let thisSection = sectionSend;
        let dataSection = $(thisSection).attr('data-section');
        let sectionToScroll = sections[dataSection - 1];
        let heightToScroll = $(sectionToScroll).offset().top;

        $('html, body').animate({
            scrollTop: heightToScroll
        }, 400);

        navigationItems.removeClass('active');
        $(thisSection).addClass('active');

        setTimeout(function() {
            scrollSection = true;
        }, 401);
    }

    $(window).on('scroll', function() {
        let scrolltop = $(this).scrollTop();

        if (scrolltop >= $(sections[0]).height() / 15) {
            $(navigationMenu).addClass('top');
        } else {
            $(navigationMenu).removeClass('top');
        }

        if (scrollSection) {

            for (let i = 0; i < sections.length; i++) {
                if (scrolltop >= $(sections[i]).offset().top - $(sections[i]).height() / 2) {
                    navigationItems.removeClass('active');
                    $(navigationItems[i]).addClass('active');
                }
            }
        }
    });

    $('.places__body').slick({
        arrows: false,
        slidesToShow: 3,
        infinite: true,
        focusOnSelect: true,
        autoplay: true,
        speed: 1000,
        responsive: [{
                breakpoint: 1250,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.social-media__body').slick({
        arrows: false,
        slidesToShow: 8.5,
        slidesToScroll: 3,
        infinite: true,
        touchThreshold: 10,
        rows: 3,
        responsive: [{
                breakpoint: 1250,
                settings: {
                    slidesToShow: 6.5
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 5.5
                }
            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 4.5
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 2.5
                }
            }
        ]
    });
    
    // $('.social-media__row_1').slick({
    //     arrows: false,
    //     slidesToShow: 8.5,
    //     infinite:true,
    //     slidesToScroll: 4
    // });
    // $('.social-media__row_2').slick({
    //     arrows: false,
    //     slidesToShow: 8.5,
    //     infinite:true,
    //     slidesToScroll: 4,
    //     asNavFor: '.social-media__row_1'
    // });
    // $('.social-media__row_3').slick({
    //     arrows: false,
    //     slidesToShow: 8.5,
    //     infinite:true,
    //     slidesToScroll: 4,
    //     asNavFor: '.social-media__row_1'
    // });

    $('.reviews__body').slick({
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 2,
        infinite: true,
        touchThreshold: 10,
        autoplay: true,
        speed: 1300
    });

    $('.more__body').slick({
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 3,
        infinite: false,
        touchThreshold: 10,
        autoplay: false,
        speed: 1300,
        variableWidth: true,
        adaptiveHeight: true,
        infinite: true
    });

    let moreFilterItem = $('.more__filter-item');
    let moreFilterSlides = $('.more__body').find('.slick-slide');

    for (let i = 0; i < moreFilterSlides.length; i++) {
        let moreFilterSlideClasses = $(moreFilterSlides[i]).find('.more__item').attr('class');
        $(moreFilterSlides[i]).addClass(moreFilterSlideClasses);
    }

    moreFilterItem.on('click', function() {
        let filterClass = $(this).attr('data-filter');

        $(moreFilterItem).removeClass('active');
        $(this).addClass('active');

        if (filterClass === 'all') {
            $('.more__body').slick('slickUnfilter');
        } else {
            $('.more__body').slick('slickUnfilter');
            $('.more__body').slick('slickFilter', `.${filterClass}`);
        }

    });
});