/* eslint-disable no-unused-vars */
/* eslint-disable strict */
class TypesRepairSlider {
    constructor() {
        this.count = 0; //? номер слайдера
        this.repair1 = 5;
        this.repair2 = 4;
        this.repair3 = 3;
        this.repair4 = 2;
        this.repair5 = 5;
        this.slideCount = 5;
        this.indexRepair = 1;
        this.mobileCount = 0;
    }


    nextSlide(elem, i) {
        const nowSlide = document.querySelector('.slider-counter-content__current');
        const slide = document.querySelectorAll(`.repair-types-slider__slide`);
        slide.forEach(item => {
            item.style.display = 'none';
        });
        console.log(i);
        elem[i].style.display = 'block';
        nowSlide.textContent = i + 1;
    }

    prevSlide(elem, i) {
        const nowSlide = document.querySelector('.slider-counter-content__current');
        const slide = document.querySelectorAll(`.repair-types-slider__slide`);
        slide.forEach(item => {
            item.style.display = 'none';
        });
        elem[i].style.display = 'block';
        nowSlide.textContent = i + 1;
    }
    showSlide(index) {
        // eslint-disable-next-line prefer-const
        let allCounter = document.querySelector('.slider-counter-content__total');
        const nowSlide = document.querySelector('.slider-counter-content__current');
        if (index === 0) {
            allCounter.textContent = this.repair1;
            this.count = 0;
            this.slideCount = 5;
            this.indexRepair = 1;
            nowSlide.textContent = 1;
        } else if (index === 1) {
            allCounter.textContent = this.repair2;
            this.count = 0;
            this.slideCount = 4;
            this.indexRepair = 2;
            nowSlide.textContent = 1;
        } else if (index === 2) {
            allCounter.textContent = this.repair3;
            this.count = 0;
            this.slideCount = 3;
            this.indexRepair = 3;
            nowSlide.textContent = 1;
        } else if (index === 3) {
            allCounter.textContent = this.repair4;
            this.count = 0;
            this.slideCount = 2;
            this.indexRepair = 4;
            nowSlide.textContent = 1;
        } else if (index === 4) {
            allCounter.textContent = this.repair5;
            this.count = 0;
            this.slideCount = 5;
            this.indexRepair = 5;
            nowSlide.textContent = 1;
        }
    }

    test() {
        const slids = document.querySelectorAll(`.repair-types-slider__slide`);
        slids.forEach(item => {
            item.style.display = 'none';
        });
        const slide = document.querySelector(`.repair-types-slider__slide${this.indexRepair}`);
        slide.style.display = 'block';
    }

    activeType() {
        const navListRepair = document.querySelector('.nav-list-repair');
        navListRepair.addEventListener('click', e => {
            const target = e.target;
            const typesRepair = document.querySelectorAll('.repair-types-nav__item');
            typesRepair.forEach((item, i) => {
                if (target === item) {
                    item.classList.add('active');
                    this.showSlide(i);
                    this.test();
                } else {
                    item.classList.remove('active');
                }
            });
        });
    }

    mobileTypeActive(countMobile) { //! для мобильной версии переключаем типы работ
        const mobileTypes = document.querySelector('.nav-list-repair');
        mobileTypes.style.marginLeft = `${countMobile}px`;
    }

    arrowStart() {
        const mainSection = document.querySelector('.repair-types');
        const allCounter = document.querySelector('.slider-counter-content__total');
        allCounter.textContent = this.repair1;
        mainSection.addEventListener('click', e => {
            const slide = document.querySelectorAll(`.repair-types-slider__slide${this.indexRepair}`);
            const target = e.target;
            if (target.closest('#repair-types-arrow_left')) {
                this.count--;
                if (this.count === -1) {
                    this.count = this.slideCount - 1;
                }
                this.prevSlide(slide, this.count);
            } else if (target.closest('#repair-types-arrow_right')) {
                this.count++;
                if (this.count >= this.slideCount) {
                    this.count = 0;
                }
                this.nextSlide(slide, this.count);
            } else if (target.closest('#nav-arrow-repair-left_base')) { //? Для мобилки слайдер типа
                this.mobileCount += 200;
                console.log(this.mobileCount);
                if (this.mobileCount > 0) {
                    this.mobileCount = -800;
                    console.log(this.mobileCount);
                }
                this.mobileTypeActive(this.mobileCount);
            } else if (target.closest('#nav-arrow-repair-right_base')) {
                this.mobileCount -= 200;
                if (this.mobileCount < -800) {
                    this.mobileCount = 0;
                }
                this.mobileTypeActive(this.mobileCount);
            }
        });
    }
}

const runTypesRepair = new TypesRepairSlider();
export default runTypesRepair;