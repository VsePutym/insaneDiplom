/* eslint-disable max-len */
class Partnery {
    constructor() {
        this.count = 0;
        this.MaxCount = -508;
        this.MinCount = 0;
    }
    getNewElem() {
        const section = document.querySelector('.partners');
        const partnersWrapper = document.querySelector('.partners_wrapper');
        const partnersSlider = document.querySelector('.partners-slider');
        const width = document.documentElement.clientWidth;
        const getWidth = distance => {
            partnersWrapper.style.cssText = `display: flex; overflow: hidden; transition: all 1s;`;
            section.addEventListener('click', e => {
                const target = e.target;
                if (target.closest('#partners-arrow_right')) {
                    this.count -= distance;
                    if (this.count < this.MaxCount) {
                        this.count = this.MinCount;
                    }
                    partnersWrapper.style.cssText = `display: flex; overflow: hidden; margin-left: ${this.count}px; transition: all 1s;`;
                } else if (target.closest('#partners-arrow_left')) {
                    this.count += distance;
                    if (this.count > this.MinCount) {
                        this.count = this.MaxCount;
                    }
                    partnersWrapper.style.cssText = `display: flex; overflow: hidden; margin-left: ${this.count}px; transition: all 1s;`;
                }
            });
        };
        partnersSlider.style.cssText = ` overflow: hidden; margin-top: 83px; transition: all 1s; max-width: 729px; margin: auto;`;
        if (width < 500) {
            partnersSlider.style.maxWidth = `135px`;
            getWidth(134);
        } else {
            getWidth(254);
        }
    }
}
const partnery = new Partnery();
export default partnery;