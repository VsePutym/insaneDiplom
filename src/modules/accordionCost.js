const accordionCost = () => {
    const section = document.querySelector('.popup-dialog-repair-types');
    const accordionItem = document.querySelectorAll('.popup-repair-types-nav__item');
    const textItem = document.querySelectorAll('.popup-repair-types-content-table__list');

    const showTextItem = index => {
        textItem.forEach((item, ind) => {
            item.style.display = 'none';
            if (index === ind) {
                item.style.display = 'block';
            }
        });
    };

    section.addEventListener('click', e => {
        const target = e.target;
        accordionItem.forEach((item, index) => {
            item.classList.remove('active');
            if (target === item) {
                item.classList.add('active');
                showTextItem(index);
            }
        });
    });
};

export default accordionCost;