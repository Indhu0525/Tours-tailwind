const swiper = new Swiper('.mySwiper', {
    slidesPerView: 5,
    spaceBetween: 20,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
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
    },
});
// most recent tours
const swiper2 = new Swiper('.mySwiper2', {
    slidesPerView: 'auto', // Dynamically adjusts to slide content width
    spaceBetween: 8, // Adjust spacing between slides
    centeredSlides: false, // Ensures the last slide is fully visible
    loop: false, // Disable looping for better alignment
    
 
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
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
            slidesPerView: 3,
            spaceBetween: 8,
        },
    },
});

document.getElementById('next-button2').addEventListener('click', () => {
    swiper2.slideNext();
  });

  document.getElementById('prev-button2').addEventListener('click', () => {
    swiper2.slidePrev();
  });
//most popular trips 
const swiper3 = new Swiper('.mySwiper3', {
    slidesPerView: 'auto', // Dynamically adjusts to slide content width
    // spaceBetween: 8, // Adjust spacing between slides
    centeredSlides: false, // Ensures the last slide is fully visible
    loop: false, // Disable looping for better alignment
    
 
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
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
            slidesPerView: 4,
            // spaceBetween: 8,
        },
    },
});


document.getElementById('next-button3').addEventListener('click', () => {
    swiper3.slideNext();
  });

  document.getElementById('prev-button3').addEventListener('click', () => {
    swiper3.slidePrev();
  });

  // popular trips themes
const swiper4 = new Swiper('.mySwiper4', {
    slidesPerView: 'auto', // Dynamically adjusts to slide content width
    // spaceBetween: 8, // Adjust spacing between slides
    centeredSlides: false, // Ensures the last slide is fully visible
    loop: false, // Disable looping for better alignment
    
 
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
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
            slidesPerView: 2,
            // spaceBetween: 8,
        },
    },
});


document.getElementById('next-button4').addEventListener('click', () => {
    swiper4.slideNext();
  });

  document.getElementById('prev-button4').addEventListener('click', () => {
    swiper4.slidePrev();
  });


    // popular trips themes
const swipercarousel = new Swiper('.swipercarousel', {
    slidesPerView: 'auto', 
    centeredSlides: false, 
    loop: true, 
    
    autoplay: {
        delay: 5000, // Slides will change every 3 seconds
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
       
        },
        768: {
            slidesPerView: 1,
        
        },
        1024: {
            slidesPerView: 1,
            // spaceBetween: 8,
        },
    },
});


document.getElementById('next-button5').addEventListener('click', () => {
    swipercarousel.slideNext();
  });

  document.getElementById('prev-button5').addEventListener('click', () => {
    swipercarousel.slidePrev();
  });