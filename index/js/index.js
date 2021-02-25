document.addEventListener('scroll',function () {
    const rightBiulding = document.querySelector("#layer1");
    const leftBiulding = document.querySelector("#layer2");
    const bg_text = document.querySelector("#text")
    const scroll=window.scrollY;

    console.log(scroll);
    rightBiulding.style.width=(100+scroll/5)+'%';
    rightBiulding.style.left=scroll/50+'%';
    leftBiulding.style.width=(100+scroll)+'%';
    bg_text.style.top= - scroll/20+'%';
});


var h = document.querySelector(".laxLogo").offsetTop
window.onload = function () { 
    lax.init()
    // Add a driver that we use to control our animations
    lax.addDriver('scrollY', function () {
        return window.scrollY
        console.log(window.scrollY);
    })
    // Add animation bindings to elements
    lax.addElements('#logo', {
        scrollY: {
            translateX: [
                [h,h+400],[0,800]
            ],
            scale: [
                [h+600,h+1200,h+1400],[1, 4,0],
            ],
            rotate: [
                [h + 800,h + 1200],[0, 720],
            ],
            opacity: [
                [h ,h + 1100,h + 2000],[0,1,0],
            ]
        }
    })
    lax.addElements('.slogan', {
        scrollY: {
            opacity: [
                [h+2000,h+2800],[0.5,1]
            ],
            translateX: [
                 [h + 2200,h + 2800],[0,700],
            ]
        }
    })
    lax.addElements('.slogan2', {
        scrollY: {
            opacity: [
                [h+2800,h+3000],[0.5,1]
            ],
            translateX: [
                 [h + 2400,h + 2800],[1200,700],
            ]
        }
    })
}

let galleryThumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: 10,
    slidesPerView: 4,
    loop: true,
    freeMode: true,
    loopedSlides: 5, //looped slides should be the same
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
  });
  let galleryTop = new Swiper('.gallery-top', {
    spaceBetween: 10,
    loop: true,
    loopedSlides: 5, //looped slides should be the same
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    thumbs: {
      swiper: galleryThumbs,
    },
  });