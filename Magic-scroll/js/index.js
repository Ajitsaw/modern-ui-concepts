const left = document.getElementById('left_side')

const onHandleMove = e => {

    const p = e.clientX / window.innerWidth * 100

    left.style.width = `${p}%`
}

document.onmousemove = e => onHandleMove(e)

// For Mobiles
document.ontouchmove = e => onHandleMove(e.touches[0]);



// Slider

new Swiper('.logo_slider .slider', {
    direction: 'horizontal',
    loop: true,
    speed: 6000,
    freeMode: true,
    freeModeMomentum: false,
    freeModeMomentumBounce: false,
    grabCursor: false,
    slidesPerView: 'auto',
    allowTouchMove: false,
    autoplay: {
      delay: 1,
      disableOnInteraction: false,
    }
});