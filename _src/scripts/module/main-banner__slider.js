import {tns} from "tiny-slider";

const bannerSlider = tns({
    container: '.main-banner__slider-content',
    items: 1,
    slideBy: 'page',
    controls: false,
    autoplay: true,
    loop: true,
    autoHeight: false,
    autoplayButtonOutput: false,
});

export {bannerSlider};