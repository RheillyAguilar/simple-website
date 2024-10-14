export class Navigation extends HTMLElement {
    constructor() {
        super();
    }

    static get observedAttributes() {
        return ['icon'];
    }

    get icon() {
        return this.getAttribute('icon');
    }

    set icon(newIcon) {
        this.setAttribute('icon', newIcon);
    }

    connectedCallback() {
        const shadow = this.attachShadow({ mode: 'open' });

        const navbar = document.createElement('div');
        navbar.classList.add('navbar');

        const h1 = document.createElement('h1');
        h1.classList.add('h1');
        h1.textContent = 'Sample Logo';

        const ul = document.createElement('ul');
        ul.classList.add('ul');

        const link = ['Home', 'Product', 'About', 'Service', 'Blog'];
        link.forEach((item) => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.classList.add('a');
            a.href = item === 'Home' ? 'index.html' : `${item.toLowerCase()}.html`;
            a.textContent = item;

            li.appendChild(a);
            ul.appendChild(li);
        });

        navbar.appendChild(h1);
        navbar.appendChild(ul);

        const button = document.createElement('div');
        button.classList.add('button');

        const cart = document.createElement('button');
        cart.classList.add('cart');

        const cartIcon = document.createElement('img');
        cartIcon.src = this.icon;
        cartIcon.alt = 'Cart Icon';
        cartIcon.classList.add('cart-icon');

        cart.appendChild(cartIcon);
        button.appendChild(cart);
        navbar.appendChild(button);

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
            .h1 {
                cursor: default;
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
            .button {
                display: flex;
                align-items: center;
            }
            .cart {
                border: none;
                background: transparent;
                cursor: pointer;
                padding: 0;
            }
            .cart-icon {
                width: 30px;
                height: 30px;
            }
        `;

        shadow.appendChild(style);
        shadow.appendChild(navbar);
    }
}
