import PhotoSwipeLightbox from 'photoswipe/dist/photoswipe-lightbox.esm.js';

const lightbox = new PhotoSwipeLightbox({
    gallery: '#my-gallery',
    children: 'a',
    pswpModule: () => import('photoswipe/dist/photoswipe.esm.js')
});
lightbox.init();

const navHamburger = (action) =>{
    const openBtn = document.querySelector('.nav_switch');
    const nav = document.querySelector('.nav_container');
    if(action === "open"){
    openBtn.style.visibility = "hidden";
    nav.style.transform = "translateX(0)";
    }
    if(action === "close"){
        nav.style.transform = "translateX(20rem)";
        openBtn.style.visibility = "visible";
    }
}
document.querySelector('.nav_switch').addEventListener("click", () => navHamburger("open"));
document.querySelector('.nav_container__closeBtn').addEventListener('click', () => navHamburger("close"));
