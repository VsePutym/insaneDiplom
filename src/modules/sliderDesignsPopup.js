/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
const sliderDesignsPopup = () => {

    const designsNav = document.querySelectorAll('.designs-nav__item_popup'); //? Элементы навигации в попап окне
    const designsNavList = document.getElementById('nav-list-popup-designs'); //? Родитель Элементов навигации
    const popupDesignsSliders = document.querySelectorAll('.popup-designs-slider'); //? Главная картинка на попап слайдере
    const styles = document.querySelectorAll('.designs-nav__item_base'); //? Элементы навигации в обычном окне
    const popupDisign = document.querySelector('.popup-design'); //? самый главный попап
    const slideInSlider = document.querySelectorAll('.popup-design-slider__style-slide'); //? в попап окне Главный слайд + навигация
    const slider1 = document.querySelector('.popup-designs-slider__style1'); //! варианты вариаций стилий
    const slider2 = document.querySelector('.popup-designs-slider__style2');
    const slider3 = document.querySelector('.popup-designs-slider__style3');
    const slider4 = document.querySelector('.popup-designs-slider__style4');
    const slider5 = document.querySelector('.popup-designs-slider__style5');
    const width = document.documentElement.clientWidth; //? разрешение экрана пользователя


    let count = 0;
    let countMax = 0;
    let counterSlides = 0;
    let countPopup = 0;

    const showSlide = ind => {
        popupDesignsSliders.forEach((item, i) => { //? Главная картинка на попап слайдере
            item.style.display = 'none';
            popupDesignsSliders[0].style.display = 'block';
            if (ind === i) {
                slideInSlider.forEach(elem => { //? в попап окне Главный слайд + навигация
                    if (item.contains(elem)) {
                        if (item === slider1) { //! варианты вариаций стилий
                            counterSlides = 2;
                        } else if (item === slider2) {
                            counterSlides = 3;
                        } else if (item === slider3) {
                            counterSlides = 4;
                        } else if (item === slider4) {
                            counterSlides = 5;
                        } else if (item === slider5) {
                            counterSlides = 3;
                        }
                        if (count > counterSlides) {
                            count = 0;
                        } else if (count < 0) {
                            count = counterSlides;
                        }
                        if (width > 500) {
                            countMax = count * -825;
                            item.style.cssText = `display: flex; margin-left: ${countMax}px; transition: all 1s;`;
                        }
                    }
                });
            }
        });
    };

    const choiceStylePopup = ind => {
        designsNav.forEach((item, index) => { //? Элементы навигации в попап окне
            item.classList.remove('active');
            if (index === ind) {
                item.classList.add('active');
                showSlide(ind);
            }
        });
        designsNavList.addEventListener('click', e => { //? Родитель Элементов навигации в попап окне
            const target = e.target;
            designsNav.forEach((item, index) => { //? Элементы навигации в попап окне
                item.classList.remove('active');
                if (target === item) {
                    item.classList.add('active');
                    showSlide(index);
                    count = 0;
                }
            });
        });
    };

    const searchIndex = () => {
        designsNav.forEach((item, index) => { //? Элементы навигации в попап окне
            if (item.matches('.active')) {
                choiceStylePopup(index);
            }
        });
    };

    const nextSlidePopup = () => {
        slideInSlider.forEach((item, index) => {
            item.style.display = 'none';
            if (countPopup === index) {
                item.style.display = 'block';
            }
        });
    };

    document.addEventListener('click', e => {
        const target = e.target;
        if (target.closest('.designs-slider__style')) {
            popupDisign.style.visibility = 'visible'; //? самый главный попап
            styles.forEach((item, index) => { //? Элементы навигации в обычном окне
                if (item.matches('.active')) {
                    choiceStylePopup(index);
                }
            });
        } else if (target.closest('#popup_design_left')) {
            count--;
            countPopup--;
            searchIndex();
            nextSlidePopup(countPopup);
        } else if (target.closest('#popup_design_right')) {
            count++;
            countPopup++;
            searchIndex();
            nextSlidePopup(countPopup);
        }
    });
};

export default sliderDesignsPopup;