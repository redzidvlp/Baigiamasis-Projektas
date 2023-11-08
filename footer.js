export default function createFooter() {
    const footerElement = document.createElement('footer');
    footerElement.classList.add('footer');

    const containerDiv = document.createElement('div');
    containerDiv.classList.add('container');

    const footerDisplayDiv = document.createElement('div');
    footerDisplayDiv.classList.add('footer-display');

    const contactH2 = document.createElement('div');
    contactH2.classList.add('contact-h2');
    contactH2.innerHTML = '<h2>Contact Us</h2>';

    if (location.pathname !== '/') {
        contactH2.style.display = 'none';
    }
    
    const formWrapper = document.createElement('form');
    formWrapper.classList.add('form-wrapper');

    const personInfoDiv = document.createElement('div');
    personInfoDiv.classList.add('person-info');

    ['Your Name', 'Your Email'].forEach((placeholder) => {
        const input = document.createElement('input');
        input.type = 'text';
        input.name = input.id = placeholder.toLowerCase().replace(' ', '-');
        input.placeholder = placeholder;
        personInfoDiv.appendChild(input);
    });

    const submitButton = document.createElement('input');
    submitButton.type = 'submit';
    submitButton.value = 'Submit';
    personInfoDiv.appendChild(submitButton);

    const textAreaDiv = document.createElement('div');
    textAreaDiv.classList.add('text-area');

    const textArea = document.createElement('textarea');
    textArea.id = 'message';
    textArea.name = 'message';
    textArea.rows = 4;
    textArea.cols = 50;
    textArea.placeholder = 'Your Message';
    textAreaDiv.appendChild(textArea);

    formWrapper.appendChild(personInfoDiv);
    formWrapper.appendChild(textAreaDiv);

    formWrapper.addEventListener('submit', function(event) {
        event.preventDefault(); 

        
        const formData = new FormData(formWrapper);

        for (const [name, value] of formData) {
            console.log(`${name}: ${value}`);
        }

        formWrapper.reset();
    });

    const rightsDiv = document.createElement('div');
    rightsDiv.classList.add('ft-rights');

    const linkWrapper = document.createElement('div');
    linkWrapper.classList.add('link-wrapper');

    const link = document.createElement('a');
    link.href = '#';

    const img = document.createElement('img');
    img.src = 'assets/icons/logo-sm.png';
    img.alt = '';
    link.appendChild(img);

    linkWrapper.appendChild(link);

    const rightsTextDiv = document.createElement('div');
    rightsTextDiv.classList.add('rights-text');

    ['Copyright © 2023 redzidvlp', 'All rights reserved'].forEach((text) => {
        const p = document.createElement('p');
        p.textContent = text;
        rightsTextDiv.appendChild(p);
    });

    const socialMediaDiv = document.createElement('div');
    socialMediaDiv.classList.add('social-media');

    const platformLinks = {
        github: 'https://github.com/redzidvlp',
        linkedin: 'https://www.linkedin.com/in/regita-navickaite-7a36b1211',
        instagram: 'https://www.instagram.com/randastavokaktoj/?next=%2F'
    };

    ['github', 'linkedin', 'instagram'].forEach((platform) => {
        const a = document.createElement('a');
        a.href = platformLinks[platform];

        const img = document.createElement('img');
        img.src = location.pathname !== '/' ? `../assets/icons/${platform}.png` : `assets/icons/${platform}.png`;
        img.alt = '';

        a.appendChild(img);
        socialMediaDiv.appendChild(a);
    });

    rightsDiv.appendChild(linkWrapper);
    rightsDiv.appendChild(rightsTextDiv);
    rightsDiv.appendChild(socialMediaDiv);

    footerDisplayDiv.appendChild(contactH2);

    if (location.pathname !== '/') {
        formWrapper.style.display = 'none'; 
    }

    footerDisplayDiv.appendChild(formWrapper);
    footerDisplayDiv.appendChild(rightsDiv);

    containerDiv.appendChild(footerDisplayDiv);
    footerElement.appendChild(containerDiv);

    return footerElement;
}
