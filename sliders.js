function initSwiper(selector, options = {}) {
    // Default configuration
    const defaultConfig = {
        slidesPerView: 5,
        spaceBetween: 20,
        loop: true,
        navigation: {
            nextEl: `#${selector.substring(1)}-next`,  // Changed to use ID selector
            prevEl: `#${selector.substring(1)}-prev`,  // Changed to use ID selector
        },
        pagination: {
            el: `${selector}-pagination`,
            clickable: true,
        },
        breakpoints: {
            640: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 15,
            },
            1024: {
                slidesPerView: 5,
                spaceBetween: 20,
            },
        }
    };

    // Merge default config with custom options
    const config = { ...defaultConfig, ...options };
    
    // Initialize and return new Swiper instance
    return new Swiper(selector, config);
}

// Usage examples:
const swiper1 = initSwiper('.mySwiper');

const popularslider = initSwiper('.popularswiper', {
    slidesPerView: 4,
    spaceBetween: 8,
    centeredSlides: false,
    loop: false,
    navigation: {
        nextEl: '#popularswiper-next',
        prevEl: '#popularswiper-prev'
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 8,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 8,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 8,
        }
    }
});
const recentviewed = initSwiper('.recentviewswiper', {
    slidesPerView: 'auto',
    spaceBetween: 8,
    centeredSlides: false,
    loop: false,
    navigation: {
        nextEl: '#recentviewswiper-next',
        prevEl: '#recentviewswiper-prev'
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 8,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 8,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 8,
        }
    }
});
const ondedaytours = initSwiper('.ondedaytoursswiper', {
    slidesPerView: 4,
    spaceBetween: 8,
    centeredSlides: false,
    loop: false,
    navigation: {
        nextEl: '#ondedaytoursswiper-next',
        prevEl: '#ondedaytoursswiper-prev'
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 8,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 8,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 8,
        }
    }
});
const mostpopular = initSwiper('.mostpopularswiper', {
    slidesPerView: 2,
    spaceBetween: 8,
    centeredSlides: false,
    loop: false,
    navigation: {
        nextEl: '#mostpopularswiper-next',
        prevEl: '#mostpopularswiper-prev'
    },
    breakpoints: { 
          320: {
        slidesPerView: 1,
        spaceBetween: 8,
    },
  
        1024: {
            slidesPerView: 2,
            spaceBetween: 8,
        }
    }
});
const toptours = initSwiper('.toptoursswiper', {
    slidesPerView: 1,
    spaceBetween: 8,
    centeredSlides: false,
    loop: false,
    navigation: {
        nextEl: '#toptoursswiper-next',
        prevEl: '#toptoursswiper-prev'
    },
    breakpoints: {
        1024: {
            slidesPerView: 1,
            spaceBetween: 8,
        }
    }
});
const swipercarousel = initSwiper('.swipercarousel', {
    effect: 'fade', // Apply the fade effect
    fadeEffect: {
        crossFade: true, // Ensures smooth fading
    },
    loop: false, // Disable looping for fade effect
    autoplay: {
        delay: 3000, // Slides will change every 5 seconds
    },
    navigation: {
        nextEl: '#swipercarousel-next',
        prevEl: '#swipercarousel-prev'
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    speed: 1000, // Transition speed (in milliseconds)
    breakpoints: {
        640: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 1,
        },
        1024: {
            slidesPerView: 1,
        },
    },
});
const travelsay = initSwiper('.travelsayswiper', {
    slidesPerView: 1,
    spaceBetween: 8,
    centeredSlides: false,
    loop: false,
    navigation: {
        nextEl: '#travelsayswiper-next',
        prevEl: '#travelsayswiper-prev'
    },
    breakpoints: {
        1024: {
            slidesPerView: 1,
            spaceBetween: 8,
        }
    }
});
const explorecountries = initSwiper('.explorecountriesswiper', {
    slidesPerView: 5,
    spaceBetween: 8,
    centeredSlides: false,
    loop: false,
    navigation: {
        nextEl: '#explorecountriesswiper-next',
        prevEl: '#explorecountriesswiper-prev'
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 8,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 8,
        },
        1024: {
            slidesPerView: 5,
            spaceBetween: 8,
        }
    }
});
const explorecities = initSwiper('.explorecitiessswiper', {
    slidesPerView: 5,
    spaceBetween: 8,
    centeredSlides: false,
    loop: false,
    navigation: {
        nextEl: '#explorecitiessswiper-next',
        prevEl: '#explorecitiessswiper-prev'
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 8,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 8,
        },
        1024: {
            slidesPerView: 5,
            spaceBetween: 8,
        }
    }
});
// You can initialize as many swipers as you need
