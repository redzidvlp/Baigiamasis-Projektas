import { MENU_ITEMS } from './config.js';

export default function createBody(text1, text2) {
    const welcomeContainer = document.createElement('div');
    welcomeContainer.classList.add('welcome-container');

    const welcomeWrap = document.createElement('div');
    welcomeWrap.classList.add('welcome-wrapp');

    const welcomeItem1 = document.createElement('div');
    welcomeItem1.classList.add('welcome-item-1');
    welcomeItem1.textContent = text1;

    const welcomeItem2 = document.createElement('div');
    welcomeItem2.classList.add('welcome-item-2');
    welcomeItem2.textContent = text2;

    welcomeWrap.appendChild(welcomeItem1);
    welcomeWrap.appendChild(welcomeItem2);

    const welcomeLog = document.createElement('div');
    welcomeLog.classList.add('welcome-log');

    const welcomeImg = document.createElement('img');
    welcomeImg.src = 'assets/illustrations/welcome.png';
    welcomeImg.alt = '';

    welcomeLog.appendChild(welcomeImg);

    welcomeContainer.appendChild(welcomeWrap);
    welcomeContainer.appendChild(welcomeLog);

    return welcomeContainer;
}

const bodyElement = createBody('Hello, I am a', 'FrontEnd Developer');
