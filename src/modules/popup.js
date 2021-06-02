const popup = () => {
    const checkbox = document.querySelectorAll('.checkbox__input');
    const popupPrivacy = document.querySelector('.popup-privacy');
    const allcost = document.querySelector('.popup-repair-types');
    const popupMenu = document.querySelector('.popup-menu');
    const popupDisign = document.querySelector('.popup-design');
    const popupConsultation = document.querySelector('.popup-consultation');
    const navPopupDisign = document.querySelectorAll('.designs-nav__item_popup');
    const parentArrowPopup = document.getElementById('navDesignspoPup');
    const width = document.documentElement.clientWidth;

    if (width < 500) {
        navPopupDisign.forEach(item => {
            item.style.display = 'none';
        });
        navPopupDisign[0].style.cssText = `display: block; left: 20px position: relative; margin-left: 20px`;
        parentArrowPopup.style.cssText = `margin-left: 20px; margin-right: 20px;`;
    }

    const closeFullCost = () => {
        allcost.style.visibility = 'hidden';
        popupMenu.style.visibility = 'hidden';
        popupDisign.style.visibility = 'hidden';
        checkbox.forEach(item => {
            item.checked = false;
        });
    };

    checkbox.forEach(item => {
        item.addEventListener('click', e => {
            const target = e.target;
            if (target.checked === true) {
                popupPrivacy.style.visibility = 'visible';
            }
        });
    });

    document.addEventListener('click', e => {
        const target = e.target;
        if (target.matches('.mobile-hide')) {
            popupPrivacy.style.visibility = 'hidden';
        } else if (target.matches('.popup-privacy')) {
            popupPrivacy.style.visibility = 'hidden';
        }
        if (target.closest('#consultation_button')) {
            popupConsultation.style.visibility = 'visible';
        } else if (target.closest('.close-consultation')) {
            popupConsultation.style.visibility = 'hidden';
        }
        if (target.closest('.link-list-repair')) {
            allcost.style.visibility = 'visible';
        } else if (target.closest('.mobile-hide')) { //? закрываем полный список цен
            closeFullCost();
        } else if (target.closest('.close')) {
            closeFullCost();
        } else if (target === allcost) {
            closeFullCost();
        }
        if (target.closest('.link-list-designs')) {
            allcost.style.visibility = 'visible';
        }
    });
};

export default popup;