import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';

const swiperS01 = new Swiper("#project-section01 .swiper", {
    modules: [Navigation, Pagination, Autoplay],
    slidesPerView : 2,
    spaceBetween: 10,
    centeredSlides : true,
    loop: true,
    autoplay: {
        delay: 2500
    },
    pagination: {
        el : '#project-section01 .swiper-pagination',
        clickable: true
    },
    navigation: {
        prevEl : '#project-section01 .swiper-button-prev' ,
        nextEl : '#project-section01 .swiper-button-next'
    },
});

// const swiperS02 = new Swiper("#project-section02 .swiper", {
//     modules: [Navigation, Pagination, Autoplay],
//     slidesPerView : 2,
//     spaceBetween: 10,
//     centeredSlides : true,
//     loop: true,
//     autoplay: {
//         delay: 2500
//     },
//     pagination: {
//         el : '#project-section02 .swiper-pagination',
//         clickable: true
//     },
//     navigation: {
//         prevEl : '#project-section02 .swiper-button-prev' ,
//         nextEl : '#project-section02 .swiper-button-next'
//     },
// });

const swiperS03 = new Swiper("#project-section03 .swiper", {
    modules: [Navigation, Pagination, Autoplay],
    slidesPerView : 2,
    spaceBetween: 10,
    centeredSlides : true,
    loop: true,
    autoplay: {
        delay: 2500
    },
    pagination: {
        el : '#project-section03 .swiper-pagination',
        clickable: true
    },
    navigation: {
        prevEl : '#project-section03 .swiper-button-prev' ,
        nextEl : '#project-section03 .swiper-button-next'
    },
});

const swiperS04 = new Swiper("#project-section04 .swiper", {
    modules: [Navigation, Pagination, Autoplay],
    slidesPerView : 3,
    spaceBetween: 10,
    centeredSlides : true,
    loop: true,
    autoplay: {
        delay: 2500
    },
    pagination: {
        el : '#project-section04 .swiper-pagination',
        clickable: true
    },
    navigation: {
        prevEl : '#project-section04 .swiper-button-prev' ,
        nextEl : '#project-section04 .swiper-button-next'
    },
});