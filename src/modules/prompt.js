const prompt = () => {
    const prompts = document.querySelectorAll('.formula-item-popup');
    const formula = document.querySelectorAll('.formula-item');
    const problemsItem = document.querySelectorAll('.problems-item');
    const problems = document.querySelectorAll('.problems-item-popup');

    const getReverse = (elem, index, prompt, i) => {
        if (elem[index] === prompt[i]) {
            // eslint-disable-next-line prefer-const
            let hintTop = elem.getBoundingClientRect().top;
            if (hintTop > 0) {
                elem.classList.add('active-item');
                elem.classList.remove('active-item__reverse');
            } else {
                elem.classList.add('active-item');
                elem.classList.add('active-item__reverse');
            }
        }
    };

    const showPrompt = (elem, index) => {
        prompts.forEach((prompt, i) => getReverse(elem, index, prompt, i));
        problems.forEach((prompt, i) => getReverse(elem, index, prompt, i));
    };

    const invisePropmt = (elem, index) => {
        prompts.forEach((prompt, i) => {
            if (elem[index] === prompt[i]) {
                elem.classList.remove('active-item');
            }
        });
        problems.forEach((prompt, i) => {
            if (elem[index] === prompt[i]) {
                elem.classList.remove('active-item');
            }
        });
    };

    const moveMuoseOver = (item, index) => {
        item.addEventListener('mouseover', () => showPrompt(item, index));
    };

    const moveMuoseOut = (item, index) => {
        item.addEventListener('mouseout', () => invisePropmt(item, index));
    };

    formula.forEach((item, index) => moveMuoseOver(item, index));

    formula.forEach((item, index) => moveMuoseOut(item, index));

    problemsItem.forEach((item, index) => moveMuoseOut(item, index));

    problemsItem.forEach((item, index) => moveMuoseOver(item, index));
};

export default prompt;