import {tns} from "tiny-slider";
import SmoothScroll from "smooth-scroll"
import AOS from 'aos';
import navMenu from "./module/nav-menu";
import modal from "./module/modal-window";
import sendForm from "./module/send-form";

window.addEventListener("DOMContentLoaded", () => {
    let screenWidth = window.screen.width;

    tns({
        container: '.main-banner__slider-content',
        items: 1,
        slideBy: 'page',
        controls: false,
        autoplay: true,
        loop: true,
        autoHeight: false,
        autoplayButtonOutput: false,
    });

    new SmoothScroll('a[href*="#"]', {
        speed: 300,
    });

    AOS.init({
        duration: 600,
        disable: 'phone'
    });

    navMenu();

    modal("modal-certificate");

    sendForm();

})