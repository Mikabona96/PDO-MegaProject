import { idx, rtl } from '../..';
import '../../assets/img/2nd-section-slide-img.png';
import '../../assets/img/2nd-section-slide-img2.png';
import '../../assets/img/2nd-section-slide-img3.png';
import '../../assets/img/arrow.png';

export const secondSectionFunction = () => {
    window.addEventListener('DOMContentLoaded', () => {
        const buttons = document.querySelectorAll('.secondsection .navigation .nav-buttons .nav-btn');
        const leftArrow = document.querySelector('.secondsection .navigation .arrows .left-arrow');
        const rightArrow = document.querySelector('.secondsection .navigation .arrows .right-arrow');
        const slidesWrapper = (document.querySelector('.secondsection .slider .slides-wrapper')) as HTMLElement;
        const slide = (document.querySelector('.secondsection .slider .slides-wrapper .slide')) as HTMLElement;
        const slides = document.querySelectorAll('.secondsection .slider .slides-wrapper .slide');
        const header = document.querySelector('.Header');
        const headerContent = document.querySelector('.header-content');
        let slideWidth = slide.offsetWidth;
        let index = idx;


        const removeActiveBtn = () => {
            buttons.forEach((btn, i) => {
                i === index.value ? btn.classList.add('active') : btn.classList.remove('active');
            });
        };

        const goToSlide = () => {
            slidesWrapper.style.transform = `translateX(${rtl ? '' : '-'}${index.value * (slideWidth + 40)}px)`;
        };

        rightArrow?.addEventListener('click', () => {
            index.value >= slides.length - 1 ? index.value = slides.length - 1 : index.value += 1;
            removeActiveBtn();
            goToSlide();
        });
        leftArrow?.addEventListener('click', () => {
            index.value <= 0 ? index.value = 0 : index.value -= 1;
            removeActiveBtn();
            goToSlide();
        });

        buttons.forEach((btn, i) => {
            btn.addEventListener('click', () => {
                index.value = i;
                goToSlide();
                removeActiveBtn();
            });
        });
        // =========== Swipe Events =============
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        let initialPosition = 0;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        let moving = false;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        let transform = 0;
        let diff = 0;
        let currentPosition = 0;

        slidesWrapper?.addEventListener('touchstart', (event: any) => {
            initialPosition = event.touches[ 0 ].clientX;
            moving = true;
            const transformMatrix = window.getComputedStyle(slidesWrapper).getPropertyValue('transform');
            if (transformMatrix !== 'none') {
                transform = Number(transformMatrix.split(',')[ 4 ].trim());
            }
        });
        slidesWrapper?.addEventListener('touchmove', (event: any) => {
            if (moving) {
                currentPosition = event.touches[ 0 ].clientX;
                diff = currentPosition - initialPosition;

                slidesWrapper.style.transform = `translateX(${transform + diff}px)`;
            }
        });
        slidesWrapper?.addEventListener('touchend', () => {
            moving = false;
            if (rtl) {
                if (diff > 0) {
                    index.value += 1;
                    if (buttons && index.value >= buttons?.length - 1) {
                        index.value = buttons.length - 1;
                    }
                    slidesWrapper.style.transform = `translateX(${(slideWidth + 40) * index.value}px)`;
                } else {
                    index.value -= 1;
                    if (index.value < 0) {
                        index.value = 0;
                    }
                    slidesWrapper.style.transform = `translateX(${(slideWidth + 40) * index.value}px)`;
                }
                removeActiveBtn();
            } else {
                if (diff < 0) {
                    index.value += 1;
                    if (buttons && index.value >= buttons?.length - 1) {
                        index.value = buttons.length - 1;
                    }
                    slidesWrapper.style.transform = `translateX(-${(slideWidth + 40) * index.value}px)`;
                } else {
                    index.value -= 1;
                    if (index.value < 0) {
                        index.value = 0;
                    }
                    slidesWrapper.style.transform = `translateX(-${(slideWidth + 40) * index.value}px)`;
                }
                removeActiveBtn();
            }
        });

        function debounce<F extends (...params: any[]) => void>(fn: F, delay: number) {
            // eslint-disable-next-line init-declarations
            let timeoutID: number;

            return function(this: any, ...args: any[]) {
                clearTimeout(timeoutID);
                timeoutID = window.setTimeout(() => fn.apply(this, args), delay);
                slideWidth = slide.offsetWidth;
            } as F;
        }

        window.addEventListener('resize', debounce(function() {
            header?.classList.remove('active');
            headerContent?.classList.remove('active');
            slidesWrapper.style.transform = `translateX(${rtl ? '' : '-'}${index.value * (slideWidth + 40)}px)`;
        }, 400));
    });
};

secondSectionFunction();
