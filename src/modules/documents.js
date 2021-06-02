const documents = () => {
    const popupTransparency = document.querySelector('.popup-transparency');
    const transparencyWrapper = document.querySelector('.popup-transparency-slider__wrapper');
    const counterSlider = document.getElementById('suka');
    const wrapperTrancMob = document.querySelector('.transparency-slider-wrapper');
    const width = document.documentElement.clientWidth;
    let count = 0;
    let countNow = 1;
    let mobileCount = 0;

    wrapperTrancMob.style.cssText = `display: flex; transform: translateX(0px);
    transition: all 0.7s ease 0s;`;
    transparencyWrapper.style.cssText = `display: flex; transform: translateX(0px);
    transition: all 0.7s ease 0s;`;

    document.addEventListener('click', e => {
        const target = e.target;
        if (target.matches('.transparency-item__img')) {
            popupTransparency.style.visibility = 'visible';
        } else if (target.matches('.close')) {
            popupTransparency.style.visibility = 'hidden';
        } else if (target.closest('#transparency_left')) {
            countNow--;
            if (width > 500) {
                count += 432;
                if (count > 0) {
                    count = -864;
                    countNow = 3;
                }
            } else {
                count += 320;
                if (count > 0) {
                    count = -600;
                    countNow = 3;
                }
            }
            transparencyWrapper.style.transform = `translateX(${count}px)`;
            counterSlider.textContent = `${countNow}`;
        } else if (target.closest('#transparency_right')) {
            countNow++;
            if (width > 500) {
                count -= 432;
                if (count < -864) {
                    count = 0;
                    countNow = 1;
                }
            } else {
                count -= 320;
                if (count < -600) {
                    count = 0;
                    countNow = 1;
                }
            }
            counterSlider.textContent = `${countNow}`;
            transparencyWrapper.style.transform = `translateX(${count}px)`;
        } else if (target.closest('#transparency-arrow_right')) {
            mobileCount -= 320;
            if (mobileCount < -640) {
                mobileCount = 0;
            }
            wrapperTrancMob.style.transform = `translateX(${mobileCount}px)`;
        } else if (target.closest('#transparency-arrow_left')) {
            mobileCount += 320;
            if (mobileCount > 0) {
                mobileCount = -640;
            }
            wrapperTrancMob.style.transform = `translateX(${mobileCount}px)`;
        }
    });
};

export default documents;