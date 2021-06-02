/* eslint-disable prefer-const */
const scrollWindow = () => {

    const links = document.querySelectorAll('.popup-menu-nav__item .menu-link');
    const buttonFooter = document.querySelector('.button-footer');

    const scrollToTarget = event => {
        event.preventDefault();
        const target = event.target.closest('a');
        const linkHref = target.getAttribute('href');

        if (linkHref) {
            document.querySelector('' + linkHref).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    links.forEach(item => {
        item.addEventListener('click', scrollToTarget);
    });
    buttonFooter.addEventListener('click', scrollToTarget);
};

export default scrollWindow;