/* eslint-disable no-unused-vars */
class PopupSliderPortfolio {
    constructor() {
        this.count = 0;
        this.indexImg = 0;
        this.curentCounter = 1;
    }
    showSlide() {
        const popupPortfolio = document.querySelector('.popup-portfolio');
        const portfolioSlider = document.querySelector('.popup-portfolio-slider');
        const imgFrame = document.querySelectorAll('.portfolio-slider__slide-frame-desktop');
        const imgFrameMobile = document.querySelectorAll('.portfolio-slider__slide-frame');
        const popupSliderSlider = document.querySelectorAll('.popup-portfolio-slider__slide');
        const popupSliderWrapper = document.querySelector('.popup-portfolio-item__wrapper');
        const counter = document.getElementById('popup-portfolio-counter');
        const curent = counter.querySelector('.slider-counter-content__current');
        const total = counter.querySelector('.slider-counter-content__total');
        const width = document.documentElement.clientWidth;
        total.textContent = '10';

        const getSlide = (item, index, target) => {
            if (target === item) {
                portfolioSlider.style.overflow = 'hidden';
                popupPortfolio.style.visibility = 'visible';
                popupSliderSlider.forEach(elem => {
                    elem.style.overflow = 'visible';
                    this.maineSide(index);
                });
            }
            if (target.closest('.close')) {
                popupPortfolio.style.visibility = 'hidden';
            }
        };
        document.addEventListener('click', e => {
            const target = e.target;
            if (width > 500) {
                imgFrame.forEach((item, index) => {
                    getSlide(item, index, target);
                });
            } else {
                imgFrameMobile.forEach((item, index) => {
                    getSlide(item, index, target);
                });
            }
            if (target.closest('#popup_portfolio_left')) {
                this.indexImg -= 1;
                this.curentCounter -= 1;
                if (width > 500) {
                    this.count += 810;
                    if (this.count > 0) {
                        this.count = -7290;
                        this.indexImg = 9;
                        this.curentCounter = 10;
                    }
                } else {
                    this.count += 320;
                    if (this.count > 0) {
                        this.count = -3600;
                        this.indexImg = 9;
                        this.curentCounter = 10;
                    }
                }
                this.maineSide(this.indexImg);
                curent.textContent = this.curentCounter;
                popupSliderWrapper.style.cssText = `display: flex; transform: translateX(${this.count}px); 
                transition: all 0.7s ease 0s;`;


            } else if (target.closest('#popup_portfolio_right')) {
                this.indexImg += 1;
                this.curentCounter += 1;
                if (width > 500) {
                    this.count -= 810;
                    if (this.count < -7290) {
                        this.count = 0;
                        this.indexImg = 0;
                        this.curentCounter = 1;
                    }
                } else {
                    this.count -= 320;
                    if (this.count < -3600) {
                        this.count = 0;
                        this.indexImg = 0;
                        this.curentCounter = 1;
                    }
                }
                this.maineSide(this.indexImg);
                curent.textContent = this.curentCounter;
                popupSliderWrapper.style.cssText = `display: flex; transform: translateX(${this.count}px);
                transition: all 0.7s ease 0s;`;
            }

        });
    }
    maineSide(index) {
        const popupSliderWrapper = document.querySelector('.popup-portfolio-item__wrapper');
        const textPortfolio = document.querySelectorAll('.popup-portfolio-text');
        let portfolioText = [];
        portfolioText = textPortfolio;
        textPortfolio.forEach(elem => {
            elem.style.display = 'none';
            if (index === 0) {
                popupSliderWrapper.style.cssText = `display: flex; transform: translateX(0px);`;
                portfolioText[0].style.display = 'block';
            } else if (index === 1) {
                popupSliderWrapper.style.cssText = `display: flex; transform: translateX(-810px)`;
                portfolioText[1].style.display = 'block';
            } else if (index === 2) {
                popupSliderWrapper.style.cssText = `display: flex; transform: translateX(-1620px)`;
                portfolioText[2].style.display = 'block';
            } else if (index === 3) {
                popupSliderWrapper.style.cssText = `display: flex; transform: translateX(-2430px)`;
                portfolioText[3].style.display = 'block';
            } else if (index === 4) {
                popupSliderWrapper.style.cssText = `display: flex; transform: translateX(-3240px)`;
                portfolioText[4].style.display = 'block';
            } else if (index === 5) {
                popupSliderWrapper.style.cssText = `display: flex; transform: translateX(-4050px)`;
                portfolioText[5].style.display = 'block';
            } else if (index === 6) {
                popupSliderWrapper.style.cssText = `display: flex; transform: translateX(-4860px)`;
                portfolioText[6].style.display = 'block';
            } else if (index === 7) {
                popupSliderWrapper.style.cssText = `display: flex; transform: translateX(-5670px)`;
                portfolioText[7].style.display = 'block';
            } else if (index === 8) {
                popupSliderWrapper.style.cssText = `display: flex; transform: translateX(-6480px)`;
                portfolioText[8].style.display = 'block';
            } else if (index === 9) {
                popupSliderWrapper.style.cssText = `display: flex; transform: translateX(-7290px)`;
                portfolioText[9].style.display = 'block';
            }
        });
    }
}

const popupSliderPortfolio = new PopupSliderPortfolio();
export default popupSliderPortfolio;