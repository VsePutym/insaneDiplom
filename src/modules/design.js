/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
class Design {
    constructor() {
        this.mobileNavCount = 0;
        this.countNow = 1;
        this.countTotal = 0;
        this.slideInSlider = 0;
    }

    navMenuMobile() {
        const width = document.documentElement.clientWidth;
        if (width < 500) {
            const navItem = document.querySelectorAll('.designs-nav__item_base'); //? кнопки навигации
            const navDesigns = document.querySelector('.nav-designs'); //? родитель родителя для кнопок навигации
            const parentNavItem = document.getElementById('designs-list'); //? родитель прямой для кнопок навигации
            const section = document.querySelector('.designs'); //? главная секция
            const countNow = document.getElementById('style_countNow'); //? слайд в данный момент в мобилдьной версии
            const countTotal = document.getElementById('style_total'); //? Общий счётчик слайдов в мобильной версии
            const parentSliders = document.querySelectorAll('.designs-slider__style'); //? родители слайдеров Slide1,Slide2...
            const slidersInStyle = document.querySelectorAll('.designs-slider__style-slid'); //? слайды в parentSleders
            // const allSliders = document.querySelectorAll('.designs-slider__style-slide');
            // const scand = document.querySelectorAll('.scand'); //? скандинавия стиль
            // const trad = document.querySelectorAll('.trad'); //? традиционный стиль
            // const minimal = document.querySelectorAll('.minimal'); //? минимализм стиль
            // const modern = document.querySelectorAll('.modern'); //? модерн стиль

            parentNavItem.margin = `auto`;
            navDesigns.style.maxWidth = `${(width / 2) + 20}px`;

            const getItem = () => { //? удаляем класс active у всех elems
                navItem.forEach(item => {
                    item.style.display = 'none';
                    item.classList.remove('active');
                });
            };

            const getMaineSlider = ind => { //? по индексу item в навигации открываем родители слайдеров
                parentSliders.forEach((item, index) => {
                    item.style.display = 'none';
                    console.log(index);
                    console.log(ind);
                    if (ind === index) {
                        slidersInStyle.forEach(elems => {
                            if (item.contains(elems)) {
                                item.style.display = 'block';
                                console.log(elems);
                            }
                        });
                    }
                });
            };

            getItem();
            navItem[0].style.display = 'block';
            navItem[0].classList.add('active');

            section.addEventListener('click', e => { //? //? кнопки навигации, ставим класс active на кнопки в мобилке
                const target = e.target;
                if (target.closest('#nav-arrow-designs_right')) {
                    this.mobileNavCount++;
                    if (this.mobileNavCount > 4) {
                        this.mobileNavCount = 0;
                    }
                    getItem();
                    getMaineSlider(this.mobileNavCount);
                    navItem[this.mobileNavCount].style.display = 'block';
                    navItem[this.mobileNavCount].classList.add('active');
                } else if (target.closest('#nav-arrow-designs_left')) {
                    this.mobileNavCount--;
                    if (this.mobileNavCount < 0) {
                        this.mobileNavCount = 4;
                    }
                    getItem();
                    getMaineSlider(this.mobileNavCount);
                    navItem[this.mobileNavCount].style.display = 'block';
                    navItem[this.mobileNavCount].classList.add('active');
                } else if (target.closest('#design_right')) { //? next in slider mobile
                    this.slideInSlider++;
                    getMaineSlider(this.mobileNavCount);
                } else if (target.closest('#design_left')) { //? prev in slider mobile
                    this.slideInSlider--;
                    getMaineSlider(this.mobileNavCount);
                }
            });
        }
    }
    getNavMenu() { //? кнопки навигации, ставим класс active на кнопки
        const navItem = document.querySelectorAll('.designs-nav__item_base'); //? кнопки навигации
        const parentNavItem = document.getElementById('designs-list'); //? родитель прямой для кнопок навигации
        const designsSlider = document.querySelector('.designs-slider'); //? родитель главных сладеров

        parentNavItem.addEventListener('click', e => {
            const target = e.target;
            navItem.forEach((item, index) => {
                item.classList.remove('active');
                if (target === item) {
                    item.classList.add('active');
                }
            });
        });

    }
}

const design = new Design();

export default design;