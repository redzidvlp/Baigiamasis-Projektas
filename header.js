import { MENU_ITEMS } from './config.js';

export default function header() {
    const headerElement = document.createElement('header');
    headerElement.classList.add('header-container');

    const logoWrapper = document.createElement('div'); 
    logoWrapper.classList.add('logo-wrapper'); 

    const logoElement = document.createElement('img');
    logoElement.classList.add('logo');

    const isHomePage = location.pathname === '/';
    
    logoElement.src = isHomePage ? 'assets/icons/logo-lg.png' : '../assets/icons/logo-lg.png';

    logoWrapper.appendChild(logoElement);

    const menuList = document.createElement('ul');
    menuList.classList.add('main-menu');

    MENU_ITEMS.forEach(item => {
        const menuItem = document.createElement('li');
        menuItem.classList.add('menu-item');

        const menuItemLink = document.createElement('a');
        menuItemLink.classList.add('menu-item-link');

        if (location.pathname === item.path) {
            menuItemLink.classList.add('active');
        }

        menuItemLink.textContent = item.title;
        menuItemLink.href = item.path;

        menuItem.append(menuItemLink);

        menuList.append(menuItem);
    });

    headerElement.append(logoWrapper);
    headerElement.append(menuList);
    return headerElement;
}
