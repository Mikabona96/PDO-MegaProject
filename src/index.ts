// Styles
import 'normalize.css';
import './main.scss';

// Images

// TS Modules
import './components';
import './elements';


const rtlSwitcher = document.querySelector('.header-links-second-row .header-link.rtl');
const mobileRtlSwitcher = document.querySelector('.Header .header-nav .header-content .content-links.first .content-link.rtl');
const header = (document.querySelector('.Header')) as HTMLElement;
const footer = (document.querySelector('.Footer')) as HTMLElement;
const sections = document.querySelectorAll('section');
const slidesWrapper = (document.querySelector('.secondsection .slider .slides-wrapper')) as HTMLElement;
const slide = (document.querySelector('.secondsection .slider .slides-wrapper .slide')) as HTMLElement;
let slideWidth = slide.offsetWidth;
export const idx = { value: 0 };

export let rtl = false;

const switchRtlHelper = () => {
    rtl = !rtl;
    rtl ? header.classList.add('rtl') : header.classList.remove('rtl');
    rtl ? footer.classList.add('rtl') : footer.classList.remove('rtl');
    sections.forEach((section) => {
        rtl ? section.classList.add('rtl') : section.classList.remove('rtl');
    });
    slidesWrapper.style.transform = `translateX(${rtl ? '' : '-'}${idx.value * (slideWidth + 40)}px)`;
};
mobileRtlSwitcher?.addEventListener('click', () => {
    rtl ? mobileRtlSwitcher.innerHTML = 'RTL' : mobileRtlSwitcher.innerHTML = 'LTR';
    rtl ? rtlSwitcher!.innerHTML = 'RTL' : rtlSwitcher!.innerHTML = 'LTR';
    switchRtlHelper();
});

rtlSwitcher?.addEventListener('click', () => {
    rtl ? rtlSwitcher.innerHTML = 'RTL' : rtlSwitcher.innerHTML = 'LTR';
    rtl ? mobileRtlSwitcher!.innerHTML = 'RTL' : mobileRtlSwitcher!.innerHTML = 'LTR';
    switchRtlHelper();
});

window.addEventListener('resize', () => {
    slideWidth = slide.offsetWidth;
});

