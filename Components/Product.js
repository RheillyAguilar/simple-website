
export class Product extends HTMLElement {
    constructor() {
        super()
    };

    static get observedAttributes() {
        return [
            "img",
            "name",
            "price",
        ]
    } 

    get img() {
        return this.getAttribute('img');
    };

    get name() {
        return this.getAttribute('name');
    };

    get price() {
        return this.getAttribute('price');
    };

    set img(newImg) {
        return this.setAttribute('img', newImg);
    };

    set name(newName) {
        return this.setAttribute('name', newName);
    };

    set price(newPrice) {
        return this.setAttribute('price', newPrice);
    };


    connectedCallback() {
        const shadow = this.attachShadow({mode: 'open'});


        const card = document.createElement('div');
        card.classList.add('card');

        const imageContainer = document.createElement('div');
        imageContainer.classList.add('imageContainer');

        const img = document.createElement('img');
        img.src = this.img;
        img.alt = this.name;

        const details = document.createElement('div')
        details.classList.add('details')

        const title = document.createElement('h1');
        title.classList.add('title');
        title.innerHTML = `<strong>${this.name}</strong>`;

        const prices = document.createElement('p');
        prices.classList.add('prices');
        prices.innerHTML = `<strong>Price: </strong> ${this.price}`

        const buttons = document.createElement('div');
        buttons.classList.add('buttons');

        const buy = document.createElement('button');
        buy.classList.add('buy');
        buy.textContent = 'Buy'

        const cart = document.createElement('button');
        cart.classList.add('cart');
        cart.textContent = 'Add to Cart'
        

        imageContainer.appendChild(img);
        details.appendChild(title);
        details.appendChild(prices);
        buttons.appendChild(buy)
        buttons.appendChild(cart)
        details.appendChild(buttons);

        card.appendChild(imageContainer);
        card.appendChild(details);


        const style = document.createElement('style');
        style.textContent = `

            .card {
                border: 1px solid #ddd;
                border-radius: 8px;
                padding: 20px;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                width: 230px;
                text-align: center;
                transition: transform 0.3s ease;
            }
            .imageContainer img {
                max-width: 100%;
                height: 15rem;
            }
            .imageContainer img:hover {
                transform: scale(1.1)
            }
            .title {
                font-size: 25px;
            }
            .prices {
                font-size: 20px;
            }
            .details p {
                margin: 8px 0;
            }
             .buttons {
                display: flex;
                flex-direction: column;
                gap: 10px;
                margin-top: 20px;
            }
            .buttons button {
                padding: 15px;
                outline: none;
                border: none;
                font-size: 15px;
                font-weight: bold;
                border-radius: 5px;
                cursor: pointer;
            }
              .buy {
                background: green;
                color: white;
            }
            .buy:hover {
                background: transparent;
                border: 2px solid green;
                color: black
            }
            .cart {
                background: red;
                color: white;
            }
            .cart:hover {
                background: transparent;
                border: 2px solid red;
                color: black;
            }

        `


        shadow.appendChild(card);
        shadow.appendChild(style);









    }
}