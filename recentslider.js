function initializeSwiper(selector, slidesPerView) {
    new Swiper(selector, {
        slidesPerView: slidesPerView,
  
        loop: true,
        navigation: {
            nextEl: `${selector} .swiper-button-next`,
            prevEl: `${selector} .swiper-button-prev`,
        },
        pagination: {
            el: `${selector} .swiper-pagination`,
            clickable: true,
        },
        breakpoints: {
            640: {
                slidesPerView: 1,
             
            },
            768: {
                slidesPerView: 2,
              
            },
            1024: {
                slidesPerView: slidesPerView,
            
            },
        },
    });
}

document.addEventListener('DOMContentLoaded', function() {
    // Initialize first slider with 5 slides per view
    initializeSwiper('.mySwiper1', 2, 20);

    // Initialize second slider with 3 slides per view
    initializeSwiper('.mySwiper2', 3, 20);
});
