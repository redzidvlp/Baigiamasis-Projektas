import header from '../header.js';
import createBody from '../body.js';
import createFooter from '../footer.js';

document.addEventListener('DOMContentLoaded', function () {
    const headerContent = document.querySelector('#headerContent');
    const headerElement = header();
    headerContent.appendChild(headerElement);

    const bodyContent = document.querySelector('#bodyContent');
    const bodyElement = createBody('About');
    bodyContent.appendChild(bodyElement);

    const footerContent = document.querySelector('#footerContent');
    const footerElement = createFooter(); 
    footerContent.appendChild(footerElement);
    
    const heroBox = document.querySelector('#hero-box');
});
