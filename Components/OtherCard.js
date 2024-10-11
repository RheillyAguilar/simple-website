

export class OtherCard extends HTMLElement {
    constructor() {
        super();
    }

    static get observedAttributes() {
        return [
            "img",
            "name",
            "price"
        ];
    }

    get img() {
        return this.getAttribute('img');
    }

    get name() {
        return this.getAttribute('name');
    }

    get price() {
        return this.getAttribute('price');
    }

    set img(newImg) {
        this.setAttribute('img', newImg);
    }

    set name(newName) {
        this.setAttribute('name', newName);
    }

    set price(newPrice) {
        this.setAttribute('price', newPrice)
    }

    connectedCallback() {
        const shadow = this.attachShadow({ mode: 'open' });

        const card = document.createElement('div');
        card.classList.add('card');

        const imageContainer = document.createElement('div');
        imageContainer.classList.add('imageContainer');

        const image = document.createElement('img');
        image.src = this.img;
        image.alt = this.name;

        const details = document.createElement('div');
        details.classList.add('details');

        const nameP = document.createElement('p');
        nameP.classList.add('nameP');
        nameP.innerHTML = `<strong>${this.name}</strong>`

        const priceP = document.createElement('p');
        priceP.classList.add('priceP');
        priceP.innerHTML = `<strong>Price: </strong> ${this.price}`


        const button = document.createElement('div');
        button.classList.add('button');

        const buy = document.createElement('button');
        buy.classList.add('buy');
        buy.textContent = 'Buy';

        const cart = document.createElement('button');
        cart.classList.add('cart');
        cart.textContent = 'Add to Cart';


        imageContainer.appendChild(image);
        details.appendChild(nameP);
        details.appendChild(priceP);
        details.appendChild(button);
        button.appendChild(buy);
        button.appendChild(cart);

        card.appendChild(imageContainer);
        card.appendChild(details);



        const style = document.createElement('style');
        style.textContent = `
            .card {
                    display: flex;
                    flex-direction: column;
                    border: 1px solid #ddd;
                    border-radius: 8px;
                    padding: 16px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                    max-width: 230px;
                    text-align: center;
                    transition: transform 0.3s ease;
                }
            .imageContainer img {
                    max-width: 100%;
                    height: 20rem;
                }
            .imageContainer img:hover {
                transform: scale(1.1)
            }

            .nameP {
                font-size: 25px;
                letter-spacing: 10px;
            }
            
            .priceP {
                font-size: 20px;
            }
            
            .details p {
                    margin: 8px 0;
                }
            .button {
                display: flex;
                flex-direction: column;
                gap: 10px;
                margin-top: 20px;
            }
            .button button {
                padding: 15px;
                outline: none;
                border: none;
                font-size: 13px;
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
                color: black;
                border: 2px solid green;
            }
            .cart {
                background: red;
                color: white;
            }
            .cart:hover {
                background: transparent;
                color: black;
                border: 2px solid red;
            }
        `

        shadow.appendChild(style);
        shadow.appendChild(card);




    }

}