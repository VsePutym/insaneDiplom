/* eslint-disable max-len */
class Style {
    constructor() {
        this.count = 0;
        this.mobileSlideCounter = 0;
    }
    getMaineSlidePopup(count) { //? смотрим на активный навигационный эл. и даём видимость главному слайду в попап
        const popupDesignsSliders = document.querySelectorAll('.popup-designs-slider'); //? Главная картинка на попап слайдере
        const slideInSlider = document.querySelectorAll('.popup-design-slider__style-slide'); //? в попап окне Главный слайд + навигация
        popupDesignsSliders[0].style.display = 'flex';
        popupDesignsSliders.forEach((item, index) => {
            item.style.display = 'none';
            if (count === index) {
                item.style.display = 'flex';
                slideInSlider.forEach(items => {
                    items.style.display = 'none';
                    if (item.contains(items)) {
                        items.style.display = 'block';
                    }
                });
            }
        });
    }
    choiceStyle() {
        const styles = document.querySelectorAll('.designs-nav__item_base'); //? кнопки навигациис выбора стиля с active
        const stylesInPopup = document.querySelectorAll('.designs-nav__item_popup'); //? кнопки навигациис выбора стиля с active а попап
        const designsList = document.getElementById('designs-list'); //? Родитель Элементов навигации в попап окне
        const mainSlider = document.querySelectorAll('.designs-slider__style'); //? все cлайды
        const width = document.documentElement.clientWidth;

        if (width > 500) {
            //? получаем index с навигации и даём её класс active.
            //? Родитель Элементов навигации в попап окне
            designsList.addEventListener('click', e => {
                const target = e.target;
                styles.forEach((item, index) => { //? кнопки навигациис выбора стиля с active
                    item.classList.remove('active');
                    if (target === item) {
                        item.classList.add('active');
                        this.showPreview(index);
                    }
                });
            });
        } else {
            const reviewCode = (elem, index) => {
                elem.forEach(item => { //? кнопки навигациис выбора стиля с active
                    item.style.display = 'none';
                    item.classList.remove('active');
                });
                elem[index].classList.add('active'); //? кнопки навигациис выбора стиля с active
                elem[index].style.cssText = `display: block; margin-left: 40px position: relative; left: 20px;}`; //? кнопки навигациис выбора стиля с active
            };
            const newStyleMaine = index => { //? принимаем индекс и делаем главный слайд
                const nowCounter = document.getElementById('style_countNow'); //? Cчётчик слайдов в попап окне от 1 до 5+-
                reviewCode(styles, index);
                reviewCode(stylesInPopup, index);
                this.mobileShowPreviw(index); //? пердаём индес от нажатия на кнопку навигации
                nowCounter.textContent = 1; //? Cчётчик слайдов в попап окне от 1 до 5+-
            };

            styles.forEach(item => { //? кнопки навигациис выбора стиля с active
                item.style.display = 'none';
            });
            styles[0].style.cssText = `display: block; margin-left: 40px`; //? кнопки навигациис выбора стиля с active
            mainSlider[0].style.display = 'block';
            mainSlider[0].classList.add('activeStyle');

            document.addEventListener('click', e => { //? получаем index с навигации и даём её класс active
                e.preventDefault();
                const target = e.target;
                if (target.closest('#nav-arrow-designs_right') || target.closest('#nav-arrow-popup-designs_right')) {
                    this.count++;
                    this.mobileSlideCounter = 0;
                    if (this.count > 4) {
                        this.count = 0;
                    }
                    newStyleMaine(this.count);
                    this.getMaineSlidePopup(this.count);
                } else if (target.closest('#nav-arrow-designs_left') || target.closest('#nav-arrow-popup-designs_left')) {
                    this.count--;
                    this.mobileSlideCounter = 0;
                    if (this.count < 0) {
                        this.count = 4;
                    }
                    newStyleMaine(this.count);
                    this.getMaineSlidePopup(this.count);
                }
                if (target.closest('#design_left')) {
                    this.mobileSlideCounter--;
                    this.test(this.mobileSlideCounter);
                } else if (target.closest('#design_right')) {
                    this.mobileSlideCounter++; //? счётчик для слайдов
                    this.test(this.mobileSlideCounter); //? отправляем индекс в тест
                }
            });
        }
    }

    test(mobileSlideCounter) { //?
        const mainSlider = document.querySelectorAll('.designs-slider__style'); //? все cлайды
        const childrenmainSlider = document.querySelectorAll('.designs-slider__style-slide');
        const nowCounter = document.getElementById('style_countNow');

        mainSlider.forEach(items => { //? все cлайды
            items.style.display = 'none';
            if (items.classList.contains('activeStyle')) {
                nowCounter.textContent = mobileSlideCounter + 1;
                if (mobileSlideCounter > items.children.length - 1) {
                    mobileSlideCounter = 0;
                    nowCounter.textContent = 1;
                    this.mobileSlideCounter = 0;
                } else if (mobileSlideCounter < 0) {
                    nowCounter.textContent = items.children.length;
                    mobileSlideCounter = items.children.length - 1;
                    this.mobileSlideCounter = items.children.length - 1;
                }
                childrenmainSlider.forEach(item => {
                    item.style.display = 'none';
                    items.style.display = 'block';
                });
                items.children[mobileSlideCounter].style.display = 'block';
            }
        });
    }

    //! принимаем индес от кнопки навигации
    mobileShowPreviw(index) { //? принимаем индес от кнопки навигации
        const mainSlider = document.querySelectorAll('.designs-slider__style'); //? все cлайды
        mainSlider.forEach((items, indexs) => { //? все cлайды
            items.classList.remove('activeStyle'); //? рендер: убираем класс у главных типов стилей
            items.style.display = 'none'; //? рендер: убираем видимость у главных типов стилей
            if (indexs === index) { //? проверка: какая кнопка навигации активна, тот главный тип слайдов будет активен
                items.style.display = 'block'; //? главный тип стиля слайдов видим
                items.classList.add('activeStyle'); //? заберает себе класс
                items.children[0].style.display = 'block'; //? его первый ребёнок тоже видим, это первый слайд у активного , главного типа стиля
                const tatalCounter = document.getElementById('style_total'); //? общий счётчик в  окне в дизайнерском слайдере
                // const totalCounterPopup = document.getElementById('slider-counter-content__current');//? общий счётчик в попап оке
                tatalCounter.textContent = items.children.length; //? сколько слайдов в активном типе стиля , таков и счётчик
                // totalCounterPopup.textContent = items.children.length;
            }
        });
    }
    showPreview(index) {
        if (index === undefined) {
            index = 0;
        }
        const preview = document.querySelectorAll('.preview-block'); //? активный блок превью
        const previewActive = document.querySelectorAll('.preview-block__item-inner'); //? активное мини превью
        const section = document.getElementById('designs'); //? секция
        const mainSlider = document.querySelectorAll('.designs-slider__style'); //? все cлайды

        section.addEventListener('click', e => {
            const target = e.target;

            preview.forEach((item, i) => { //? по index показываем определенный превью блок
                item.classList.remove('visible');
                if (i === index) {
                    item.classList.add('visible');
                }
            });

            mainSlider.forEach((items, indexs) => { //? все cлайды
                items.style.display = 'none';
                if (indexs === index) {
                    items.style.display = 'block';
                    items.children[0].style.display = 'block';
                }
            });

            previewActive.forEach((elem, ind) => { //? активное мини превью
                elem.classList.remove('preview_active');
                if (target === elem) {
                    elem.classList.add('preview_active');
                    this.showSlide(ind);
                }
            });
        });
    }
    showSlide(ind) {
        if (ind === undefined) {
            ind = 0;
        }

        const mainSlider = document.querySelectorAll('.designs-slider__style-slide');
        mainSlider.forEach((item, index) => {
            item.style.display = 'none';
            if (ind === index) {
                item.style.display = 'block';
            }
        });
    }

}

const designStyle = new Style();
export default designStyle;