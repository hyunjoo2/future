$(document).ready(function () {
    $('#fullpage').fullpage({
        'verticalCentered': false,
        'css3': true,
        'anchors': ['firstPage', 'footer'],
        verticalCentered: false,
		responsiveWidth: 1920,
        responsiveHeight: 1920,
        'navigation': true,
        'navigationPosition': 'right',
        'navigationTooltips': ['Main', 'Notice', ],
       

        //        autoScrolling: true,
        //		scrollBar: hasScrollBar,
        //		fitToSection:false,

        //'afterLoad': function (anchorLink, index) {
        //    if (index == 2) {
        //        $('#iphone3, #iphone2, #iphone4').addClass('active');
        //    }
        //},

        'onLeave': function (index, nextIndex, direction) {
            if (index == 3 && direction == 'down') {
                $('.section').eq(index - 1).removeClass('moveDown').addClass('moveUp');
            } else if (index == 3 && direction == 'up') {
                $('.section').eq(index - 1).removeClass('moveUp').addClass('moveDown');
            }

            $('#staticImg').toggleClass('active', (index == 2 && direction == 'down') || (index == 4 && direction == 'up'));
            $('#staticImg').toggleClass('moveDown', nextIndex == 4);
            $('#staticImg').toggleClass('moveUp', index == 4 && direction == 'up');
        }

    });

    //swiper slide
    // var mainSwiper = new Swiper('.swiper-container.first', {
    //     //loop: true,
    //     //spaceBetween: 30,
    //     //effect: 'fade',
    //     //centeredSlides: true,
    //     //        autoplay: {
    //     //            delay: 2500,
    //     //            disableOnInteraction: false,
    //     //        },
    //     //speed: 3000,
    //     pagination: {
    //         el: ".swiper-pagination.first-bullet",
    //         clickable: true,
    //       },

    // });
    // var pagingSwiper = new Swiper(".swiper-container.first", {
    //     //loop: true,
    //     pagination: {
    //         el: ".swiper-pagination2.first-fraction",
    //         type: "fraction",
    //         renderFraction: function (currentClass, totalClass) {
    //             return '<span class="' + currentClass + '"></span>' +
    //                    //' | ' +
    //                    '<span class="' + totalClass + '"></span>';
    //         }
    //     },
    // });

    //mainSwiper.controller.control = pagingSwiper;

    
	//썸네일 슬라이드
	var swiperThumbBottom = new Swiper(".thumb-swiper__right", {
		direction: "vertical",
		//spaceBetween: 10,
        slidesPerView: "auto",
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
		observer: true,
		observeParents: true,
        
        breakpoints: {
            720: {
                freeMode: true,
                scrollbar: {
                    el: ".swiper-scrollbar",
                },
                mousewheel: true,
            },
        },
      });
	var swiperThumbTop = new Swiper(".thumb-swiper__left .swiper-container", {
        slidesPerView:1,
		//spaceBetween: 10,
        navigation: {
          nextEl: ".swiper-arrow .swiper-button-next",
          prevEl: ".swiper-arrow .swiper-button-prev"
        },
        // thumbs: {
        //   swiper: swiperThumbBottom
        // },
		observer: true,
		observeParents: true,
      });


    //swiper slide
    var bannerSwiper = new Swiper('.swiper-container.banner', {
        loop: true,
        //spaceBetween: 30,
        //effect: 'fade',
        //centeredSlides: true,
        //        autoplay: {
        //            delay: 2500,
        //            disableOnInteraction: false,
        //        },
        //speed: 3000,
        pagination: {
            el: ".swiper-pagination.bullet",
            clickable: true,
        },
        

    });
    var pagingSwiper2 = new Swiper(".swiper-container.banner", {
        loop: true,
        pagination: {
            el: ".swiper-pagination2.fraction",
            type: "fraction",
            renderFraction: function (currentClass, totalClass) {
                return '<span class="' + currentClass + '"></span>' +
                       //' | ' +
                       '<span class="' + totalClass + '"></span>';
            }
        },
    });

    //bannerSwiper.controller.control = pagingSwiper2;



    //footer-banner slide
    var footerBannerSwiper = new Swiper('.footer-banner .swiper-container', {
        loop: true,
        spaceBetween: 57,
        //effect: 'fade',
        //centeredSlides: true,
        //        autoplay: {
        //            delay: 2500,
        //            disableOnInteraction: false,
        //        },
        //speed: 3000,
        slidesPerView: 7,
        spaceBetween: 30,
        navigation: {
            nextEl: ".swiper-button-next.footer",
            prevEl: ".swiper-button-prev.footer",
        },
        breakpoints: {
            1200: {
                slidesPerView: 4,
                //spaceBetween: 40
            },
            720: {
                slidesPerView: 1,
                //spaceBetween: 40
            }
        }

    });
    



});


