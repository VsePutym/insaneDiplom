const sliderPortfolio = () => {
    const arrowRight = document.getElementById('portfolio-arrow_right');
    const arrowLeft = document.getElementById('portfolio-arrow_left');
    const slider = document.querySelector('.portfolio-item__wrapper');
    const portfolio = document.getElementById('portfolio');
    const mobileSlider = document.querySelector('.portfolio-mobile-item__wrapper');
    const mobilearrowRight = document.getElementById('portfolio-arrow-mobile_right');
    const mobilearrowLeft = document.getElementById('portfolio-arrow-mobile_left');
    const nowCount = document.getElementById('portfolio_count');
    const totalCount = document.getElementById('portfolio_total');
    const mobileSlid = document.querySelectorAll('.portfolio-slider__slide-frame');


    mobileSlid.forEach((item, index) => {
        totalCount.textContent = `${(index + 1) / 2}`;
    });

    mobilearrowLeft.style.zIndex = '9999';
    mobilearrowRight.style.zIndex = '9999';
    slider.style.display = 'flex';
    const maxSlid = -704;
    const minSlide = 0;
    const maxMobileSlide = -3168;
    let count = 0;
    let countSlide = 1;

    portfolio.addEventListener('click', event => {
        const target = event.target;
        if (target.closest('#portfolio-arrow_right')) {
            slider.style.transition = `all 1s`;
            arrowLeft.style.display = 'flex';
            count -= 352;
            if (count === maxSlid) {
                arrowRight.style.display = 'none';
            }
            slider.style.transform = `translateX(${count}px)`;
        }
        if (target.closest('#portfolio-arrow_left')) {
            count += 352;
            if (count === minSlide) {
                arrowLeft.style.display = 'none';
            }
            arrowRight.style.display = 'flex';
            slider.style.transform = `translateX(${count}px)`;
        }
        if (target.matches('#mobileArrowRight')) {
            count -= 352;
            countSlide++;
            if (count < maxMobileSlide) {
                count = 0;
                countSlide = 1;
            }
            nowCount.textContent = countSlide;
            mobileSlider.style.transform = `translateX(${count}px)`;
            mobileSlider.style.display = 'flex';

        }
        if (target.matches('#mobilearrowLeft')) {
            count += 352;
            countSlide--;
            if (count > minSlide) {
                count = -2816;
                countSlide = 10;
            }
            nowCount.textContent = countSlide;
            mobileSlider.style.transform = `translateX(${count}px)`;
            mobileSlider.style.display = 'flex';

        }
    });
};

export default sliderPortfolio;