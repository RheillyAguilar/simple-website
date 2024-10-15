export class Navigation extends HTMLElement {
    constructor() {
        super();
    }

    static get observedAttributes() {
        return ['cart', 'user'];
    }

    get cart() {
        return this.getAttribute('cart');
    }

    set cart(newCart) {
        this.setAttribute('cart', newCart);
    }

    get user() {
        return this.getAttribute('user');
    }

    set user(newUser) {
        this.setAttribute('user', newUser);
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

        const links = ['Home', 'Product', 'About', 'Service', 'Blog'];
        links.forEach((item) => {
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

        const buttonContainer = document.createElement('div');
        buttonContainer.classList.add('button');

        const cartButton = document.createElement('button');
        cartButton.classList.add('cart');
        cartButton.setAttribute('aria-label', 'View Cart');

        const cartIcon = document.createElement('img');
        cartIcon.src = this.cart;
        cartIcon.alt = 'Cart Icon';
        cartIcon.classList.add('cart-icon');

        cartButton.appendChild(cartIcon);
        buttonContainer.appendChild(cartButton);

        const userButton = document.createElement('button');
        userButton.classList.add('user');
        userButton.setAttribute('aria-label', 'User Account');

        const userIcon = document.createElement('img');
        userIcon.src = this.user;
        userIcon.alt = 'User Icon';
        userIcon.classList.add('user-icon');

        userButton.appendChild(userIcon);
        buttonContainer.appendChild(userButton);

        navbar.appendChild(buttonContainer);

        const style = document.createElement('style');
        style.textContent = `
            .navbar {
                display: flex;
                align-items: center;
                justify-content: space-between;
                background: gold;
                padding: 0 20px;
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
                gap: 10px;
            }
            .cart, .user {
                border: none;
                background: transparent;
                cursor: pointer;
                padding: 0;
            }
            .cart-icon, .user-icon {
                width: 30px;
                height: 30px;
            }
        `;

        shadow.appendChild(style);
        shadow.appendChild(navbar);
    }
}
