const sliderPrompt = () => {
    const firstPrompt = document.querySelector('.first_prompt');
    const sectionPrompt = document.querySelector('.formula-slider-wrap');
    // const problemsSlider = document.querySelector('.problems-slider');
    const problemsWrapper = document.querySelector('.problems-slider-wrapper');

    const minSlide = 0;
    const maxSlide = -865;
    let count = 0;
    firstPrompt.style.transition = `all 1s`;
    problemsWrapper.style.cssText = `display: flex; margin-left: 0px; transition: all 1s`;

    sectionPrompt.addEventListener('click', e => { //? слайдер для prompt
        const target = e.target;
        if (target.closest('#formula-arrow_right')) {
            count -= 173;
            if (count <= maxSlide) {
                count = minSlide;
                firstPrompt.style.marginLeft = `${count}px`;
            } else {
                firstPrompt.style.marginLeft = `${count}px`;
            }
        } else if (target.closest('#formula-arrow_left')) {
            count += 173;
            if (count >= minSlide) {
                count = -692;
                firstPrompt.style.marginLeft = `${count}px`;
            } else {
                firstPrompt.style.marginLeft = `${count}px`;
            }
        }
    });

    document.addEventListener('click', e => { //? слайдер для prompt
        const target = e.target;
        if (target.closest('#problems-arrow_right')) {
            count -= 300;
            if (count < -900) {
                count = 0;
                problemsWrapper.style.marginLeft = `${count}px`;
            } else {
                problemsWrapper.style.marginLeft = `${count}px`;
            }
        } else if (target.closest('#problems-arrow_left')) {
            count += 300;
            if (count > 0) {
                count = -900;
                problemsWrapper.style.marginLeft = `${count}px`;
            } else {
                problemsWrapper.style.marginLeft = `${count}px`;
            }
        }
    });


};

export default sliderPrompt;