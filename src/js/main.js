import '../scss/style.scss';

const isTouch = () => /iphone|ipod|ipad|android|iemobile|blackberry|bada/i.test(window.navigator.userAgent);

const menu = {
    body: document.querySelector('body'),
    burger: document.querySelector('.layout-header__burger'),
    nav: document.querySelector('.layout-header__menu'),
    overlay: document.querySelector('.overlay'),
	subItemButton: document.querySelector('.layout-header__nav__item.with-dropdown .layout-header__nav__link'),
	childItemButton: document.querySelector('.layout-header__nav__submenu__item.with-dropdown .layout-header__nav__submenu__link'),
};

const changeTouch = () => {
    isTouch() ? menu.body.classList.add('isTouch') : menu.body.classList.remove('isTouch');
}

changeTouch();

window.addEventListener('resize', () => {
    changeTouch();
});

if (isTouch()) {
    menu.body.addEventListener('click', () => {
        menu.subItemButton.parentNode.classList.remove('open');
	    menu.childItemButton.parentNode.classList.remove('open');
        menu.nav.classList.remove('active');
        menu.overlay.classList.remove('active');
    });
    menu.nav.addEventListener('click', (event) => {
        event.stopPropagation();
    });
}

menu.burger.addEventListener('click', (event) => {
    event.stopPropagation();
    menu.nav.classList.toggle('active');
    menu.overlay.classList.toggle('active');
    menu.subItemButton.parentNode.classList.remove('open');
	menu.childItemButton.parentNode.classList.remove('open');
});

menu.subItemButton.addEventListener('click', () => {
	menu.subItemButton.parentNode.classList.toggle('open');
	menu.childItemButton.parentNode.classList.remove('open');
});

menu.childItemButton.addEventListener('click', () => {
	menu.childItemButton.parentNode.classList.toggle('open');
});
