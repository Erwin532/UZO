window.onscroll = function () {
    // console.log(document.documentElement.scrollTop);
}

var h = document.querySelector(".parallax-window").offsetTop

window.onresize = function () {
    console.log(parallax.offsetTop);
}

window.onload = function () {
    lax.init()

    // Add a driver that we use to control our animations
    lax.addDriver('scrollY', function () {
        return window.scrollY
    })
    // Add animation bindings to elements
    lax.addElements('.logo', {
        scrollY: {
            translateX: [
                [h,h+400 ],[0,600]
            ],
            scale: [
                [h+600,h+1200],[1, 4],
            ],
            rotate: [
                [h + 800,h + 1200],[0, 720],
            ],
            opacity: [
                [h + 1100,h + 1400],[1,0],
            ]
        }
    })
}