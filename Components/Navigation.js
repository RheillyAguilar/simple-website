

    export class Navigation extends HTMLElement {
        constructor() {
            super();
        }

        connectedCallback() {
            
            const shadow = this.attachShadow({mode: 'open'});


            const navbar = document.createElement('div');
            navbar.classList.add('navbar')

            const h1 = document.createElement('h1');
            h1.classList.add('h1');
            h1.textContent = 'Sample Logo';


            const ul = document.createElement('ul');
            ul.classList.add('ul');

            const link = ['Home', 'About', 'Service', 'Contact'];
            link.forEach(item => {
                const li = document.createElement('li');
                const a = document.createElement('a');
                a.classList.add('a');
                a.href = `${item.toLowerCase()}.html`;
                a.textContent = item;
                li.appendChild(a);
                ul.appendChild(li);
            });

            navbar.appendChild(h1);
            navbar.appendChild(ul);

            const style = document.createElement('style');
            style.textContent = `
            .navbar {
                display: flex;
                align-items: center;
                justify-content: space-between;
                background: gold;
                padding-left: 20px;
                padding-right: 20px;
            }
            .ul {
                display: flex;
                gap: 30px;
                list-style-type: none;
                font-size: 25px;
            }
            .a {
                text-decoration: none;
                color: black;
            }
            `

            shadow.appendChild(style);
            shadow.appendChild(navbar);




        }

    }