const reviews = () => {
    const mainSlederReviews = document.querySelector('.reviews-slider');
    const sectionReviews = document.querySelector('.reviews');
    const reviewsWrapper = document.querySelector('.reviews-wrapper');
    const reviewsSlider = document.querySelectorAll('.reviews-slider__slide');
    const descriptionReviews = document.querySelectorAll('.reviews-slider__slide-descr');
    const reviewsWrapperSlider = document.querySelector('.reviews-slider-wrap');
    const width = document.documentElement.clientWidth;

    let count = 0;
    const maxSliders = -mainSlederReviews.children.length * 568;
    const mobileSleders = mainSlederReviews.children.length;

    if (width > 500) {
        reviewsWrapperSlider.style.maxWidth = '473px';
        descriptionReviews.forEach(item => {
            item.style.width = '400px';
        });

        reviewsWrapper.style.cssText = `
        overflow: hidden;
        position: relative;
        max-width: 665px;
        margin-top: 125px;
        margin-left: auto;
        margin-right: auto;`;

        reviewsSlider.forEach(item => {
            item.style.cssText = `position: relative;
            left: -54px; margin-left: 100px; width: 370px;
            max-width: 370px; min-width: 370px; margin-right: 100px;`;
        });

        const getSlide = count => {
            mainSlederReviews.style.cssText = `display: flex; margin-left: ${count}px; transition: all 1s`;
        };

        sectionReviews.addEventListener('click', e => {
            const target = e.target;
            if (target.closest('#reviews-arrow_left')) {
                count += 568;
                if (count > 0) {
                    count = maxSliders + 568;
                }
                getSlide(count);
            } else if (target.closest('#reviews-arrow_right')) {
                count -= 568;
                if (count === maxSliders) {
                    count = 0;
                }
                getSlide(count);
            }
        });
    } else {
        const mobileSlide = index => {
            reviewsSlider.forEach(item => {
                item.style.display = `none`;
            });
            reviewsSlider[index].style.display = `flex`;
        };

        sectionReviews.addEventListener('click', e => {
            const target = e.target;
            if (target.closest('#reviews-arrow_left')) {
                count--;
                if (count < 0) {
                    count = mobileSleders - 1;
                }
                mobileSlide(count);
            } else if (target.closest('#reviews-arrow_right')) {
                count++;
                if (count > mobileSleders - 1) {
                    count = 0;
                }
                mobileSlide(count);
            }
        });
    }

};

export default reviews;