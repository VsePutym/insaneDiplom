const accordion = () => {
    const getNewNumber = document.querySelector('.header-contacts__phone-number-accord');
    const lastNumber = document.getElementById('lastNumber');
    const li = document.querySelectorAll('.title_block');

    const showAccordion = target => { //? показываем выбранный акардион
        li.forEach(item => {
            item.classList.remove('msg-active');
            if (target === item) {
                item.classList.add('msg-active');
            }
        });
    };

    document.addEventListener('click', e => {
        const target = e.target;
        if (target.closest('.header-contacts__arrow')) {
            getNewNumber.classList.toggle('active');
            if (getNewNumber.matches('.active')) {
                getNewNumber.style.top = 40 + 'px';
                lastNumber.style.opacity = 1;
            } else {
                getNewNumber.style.top = 0 + 'px';
                lastNumber.style.opacity = 0;
            }
        } else if (target.closest('.accordion')) {
            showAccordion(target);
        }
    });

};

export default accordion;