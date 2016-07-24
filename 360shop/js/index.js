var swiper = new Swiper('.swiper-container1', {
        pagination: '.swiper-pagination',
        //nextButton: '.swiper-button-next',
        //prevButton: '.swiper-button-prev',
        paginationClickable: true,
       // spaceBetween: 30,
        loop:true,
        centeredSlides: true,
        autoplay: 2500,
        autoplayDisableOnInteraction: false
});

var swiper = new Swiper('.swiper-container2', {
    slidesPerView: 3,
    slidesPerGroup:3,
});