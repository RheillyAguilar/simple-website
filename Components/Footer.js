
export class Footer extends HTMLElement {
    constructor() {
        super();
    };

    connectedCallback() {

        const shadow = this.attachShadow({mode: 'open'});

        const footer = document.createElement('div');
        footer.classList.add('footer');

        const logoDesc = document.createElement('div');
        logoDesc.classList.add('logoDesc');


        const logo = document.createElement('h1');
        logo.classList.add('logo');
        logo.textContent = 'Sample Logo';

        const description = document.createElement('p');
        description.classList.add('description');
        description.textContent = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque libero at ipsa, optio doloremque placeat nemo, cum dignissimos veritatis doloribus nobis? Ex sunt modi porro mollitia nostrum repellat culpa sequi esse animi assumenda, itaque aliquam odio! Nulla, veniam doloremque expedita, nisi perspiciatis impedit reprehenderit totam qui asperiores ab distinctio voluptates.'


        logoDesc.appendChild(logo);
        logoDesc.appendChild(description);


        const navlink = document.createElement('div');
        navlink.classList.add('navlink');

        const h1 = document.createElement('h1');
        h1.classList.add('h1');
        h1.textContent = 'Link';
        
        const ul = document.createElement('ul');
        ul.classList.add('ul');

        const link = ['Home', 'About', 'Service', 'Contact'];
        link.forEach(item => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.classList.add('a');
            a.href = `#${item.toLowerCase()}`;
            a.textContent = item;
            li.appendChild(a);
            ul.appendChild(li);
        })

        navlink.appendChild(h1)
        navlink.appendChild(ul);
        footer.appendChild(logoDesc)
        footer.appendChild(navlink)


        const style = document.createElement('style');
        style.textContent = `
            .footer {
                display: flex;   
                align-items: center;
                justify-content: space-evenly;
                flex-wrap: wrap;
                background: gold;
                padding: 30px;
            }
            .logoDesc {
                width: 35rem;
            }
            .ul {
                list-style-type: none;
                font-size: 20px;
            }
            .a {
                text-decoration: none;
                color: black;
            }
        `


        shadow.appendChild(style);
        shadow.appendChild(footer)

    }



}