class Scheme {
    constructor() {
        this.count = 0;
    }
    mobile() { //? в мобильной версии выравниваем навигацию и удаляем все кроме первого нав. меню
        const schemeNavItem = document.querySelectorAll('.scheme-nav__item'); //? кнопки навигации
        const width = document.documentElement.clientWidth;
        if (width < 500) {
            schemeNavItem.forEach(item => {
                item.style.display = 'none';
            });
            schemeNavItem[0].style.cssText = `display; block; margin-left: 40px`;
        }
    }
    addActive(target) {
        const mainSlider = document.querySelectorAll('.scheme-slider__slide'); //? главный слайд
        const textSlider = document.querySelectorAll('.scheme-description-block'); //? текст к каждому слайдеру
        const schemeNavItem = document.querySelectorAll('.scheme-nav__item'); //? кнопки навигации
        const showTextForSlider = ind => {
            textSlider.forEach((items, index) => {
                items.classList.remove('visible-content-block'); //? текст к каждому слайдеру
                if (ind === index) {
                    items.classList.add('visible-content-block'); //? текст к каждому слайдеру
                }
            });
            mainSlider.forEach((item, index) => { //? переключаем главный слайд по навигации
                console.log(item);
                item.style.cssText = `transform: translateY(595px); position: absolute; top: 0; display: none`;
                if (ind === index) {
                    item.style.cssText = `transform: translateY(0px);`;
                }
            });
        };
        schemeNavItem.forEach((item, index) => { //? кнопки навигации
            item.classList.remove('active');
            if (target === item) {
                showTextForSlider(index);
                item.classList.add('active');
                item.style.display = 'block';
            }
        });
    }
    nextNavElem() { //? активируем в мобильной версии переключения текста и главного слайда
        const textSlider = document.querySelectorAll('.scheme-description-block'); //? текст к каждому слайдеру
        const schemeNavItem = document.querySelectorAll('.scheme-nav__item'); //? кнопки навигации
        const mainSlider = document.querySelectorAll('.scheme-slider__slide'); //? главный слайд
        const goOver = elems => {
            elems.forEach(item => {
                item.style.display = 'none';
            });
        };
        goOver(textSlider);
        goOver(schemeNavItem);
        goOver(mainSlider);
        schemeNavItem[this.count].style.cssText = `display; block; margin-left: 40px`; //? кнопки навигации
        schemeNavItem[this.count].classList.add('active'); //? кнопки навигации
        textSlider[this.count].classList.add('visible-content-block'); //? текст к каждому слайдеру
        textSlider[this.count].style.display = 'block'; //? текст к каждому слайдеру
        mainSlider[this.count].style.cssText = `display; block;`; //? кнопки навигац
    }
    getNavDesctop() { //? вешаем класс active по навигации desctop
        const section = document.querySelector('.scheme');
        section.addEventListener('click', e => {
            const target = e.target;
            this.addActive(target);
            if (target.closest('#nav-arrow-scheme_right')) {
                this.count++;
                if (this.count > 5) {
                    this.count = 0;
                }
                this.nextNavElem(); //? в попап окне выюираем нав меню
            } else if (target.closest('#nav-arrow-scheme_left')) {
                this.count--;
                if (this.count < 0) {
                    this.count = 5;
                }
                this.nextNavElem(); //? в попап окне выюираем нав меню
            }
        });
    }
}

const scheme = new Scheme();

export default scheme;