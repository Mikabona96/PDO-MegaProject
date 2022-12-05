import '../../assets/img/2nd-section-slide-img.png';
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
        const slideWidth = slide.offsetWidth;
        let index = 0;
        let rtl = false;


        const removeActiveBtn = () => {
            buttons.forEach((btn, i) => {
                i === index ? btn.classList.add('active') : btn.classList.remove('active');
            });
        };

        const goToSlide = () => {
            slidesWrapper.style.transform = `translateX(${rtl ? '' : '-'}${index * slideWidth}px)`;
        };

        rightArrow?.addEventListener('click', () => {
            index >= slides.length - 1 ? index = slides.length - 1 : index += 1;
            removeActiveBtn();
            goToSlide();
            console.log(index);
        });
        leftArrow?.addEventListener('click', () => {
            index <= 0 ? index = 0 : index -= 1;
            removeActiveBtn();
            goToSlide();
            console.log(index);
        });

        buttons.forEach((btn, i) => {
            btn.addEventListener('click', () => {
                index = i;
                goToSlide();
                removeActiveBtn();
            });
        });
    });
};

secondSectionFunction();
