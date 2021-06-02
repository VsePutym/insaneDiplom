const toggleMenu = () => {
    const popupMenu = document.querySelector('.popup-menu');
    const dialogMenu = document.querySelector('.popup-dialog-menu');
    const allcost = document.querySelector('.popup-repair-types');
    const width = document.documentElement.clientWidth;

    const getMenu = () => {
        popupMenu.style.visibility = 'visible';
        dialogMenu.style.transform = `translate3d(0px, 0, 0)`;
    };

    const closeFullCost = () => {
        allcost.style.visibility = 'hidden';
        popupMenu.style.visibility = 'hidden';
    };

    document.addEventListener('click', e => {
        const target = e.target;
        if (width > 600) {
            if (target.closest('.menu__icon')) {
                getMenu();
            } else if (target.matches('.close-menu') || target.matches('.popup-menu') ||
                target.closest('.popup-menu-nav__item')) {
                popupMenu.style.visibility = 'hidden';
                dialogMenu.style.transform = `translate3d(656px, 0, 0)`;
            } else if (target.closest('.link-list-menu')) {
                allcost.style.visibility = 'visible';
                dialogMenu.style.transform = `translate3d(656px, 0, 0)`;
            } else if (target.closest('.mobile-hide')) { //? закрываем полный список цен
                closeFullCost();
            } else if (target === allcost) {
                closeFullCost();
            }
        } else {
            if (target.closest('.menu__icon')) {
                getMenu();
            } else if (target.matches('.close-menu') || target.matches('.popup-menu') ||
                target.closest('.popup-menu-nav__item')) {
                popupMenu.style.visibility = 'hidden';
                dialogMenu.style.transform = `translate3d(0px, -700px, 0)`;
            } else if (target.closest('.mobile-hide')) { //? закрываем полный список цен
                closeFullCost();
            } else if (target === allcost) {
                closeFullCost();
            } else if (target.closest('.link-list-menu')) {
                allcost.style.visibility = 'visible';
                dialogMenu.style.transform = `translate3d(0, -700px, 0)`;
            } else if (target.matches('.close')) {
                closeFullCost();
            }
        }
    });
};

export default toggleMenu;