
export class Home extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const shadow = this.attachShadow({mode: 'open'});

        const home = document.createElement('section');
        home.classList.add('home');

        const content = document.createElement('div');
        content.classList.add('content');

        const h1 = document.createElement('h1');
        h1.classList.add('h1');
        h1.textContent = 'Lorem ipsum dolor sit amet.';

        const p = document.createElement('p');
        p.classList.add('p');
        p.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde excepturi doloremque nesciunt similique dolore quae et suscipit, quibusdam asperiores reprehenderit.';

        const a = document.createElement('a');
        a.classList.add('a');
        a.href = '/index.html'
        a.textContent = 'Explore'

        const container = document.createElement('div');
        container.classList.add('container');

        const image = document.createElement('img');
        image.classList.add('image');
        image.src = 'assets/nike.png';

        home.appendChild(content);
        home.appendChild(container);
        content.appendChild(h1);
        content.appendChild(p);
        content.appendChild(a)
        container.appendChild(image);

        const style = document.createElement('style');
        style.textContent = `
            .home {
                display: flex;
                align-items: center; 
                justify-content: space-around;
                flex-wrap: wrap;
                padding: 5rem 10px 18rem 10px;
                height: 52vh;
            }
            .content {
                width: 30rem;
            }
            .a {
                padding: 15px 30px;
                width: 10rem;
                outline: none;
                border: none;
                background: #ef233c;
                color: white;
                cursor: pointer;
                border-radius: 5px; 
                font-size: 15px;
                font-weight: bold;
                text-decoration: none;
            }
            .a:hover {
                background: transparent;
                border: 2px solid red;
                color: black;
            }
            .h1 {
                font-size: 40px;
            }
            .p {
                font-size: 20px;
            }
            .image {
                width: 28rem;
                transform: rotate(-20deg)
            }
            
        `;

        shadow.appendChild(style);
        shadow.appendChild(home);
    }
}
