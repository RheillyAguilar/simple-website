
export class Button extends HTMLElement {
    constructor() {
        super();
    };

    connectedCallback() {

        const shadow = this.attachShadow({mode: 'open'});

        const container = document.createElement('div')
        container.classList.add('container');

        const all = document.createElement('button');
        all.classList.add('all');
        all.textContent = 'All';

        const wearable = document.createElement('button');
        wearable.classList.add('wearable');
        wearable.textContent = 'Wearable';

        const appliances = document.createElement('button');
        appliances.classList.add('appliances');
        appliances.textContent = 'Appliances'

        const gadgets = document.createElement('button');
        gadgets.classList.add('gadgets');
        gadgets.textContent = 'Gadgets'

        const utensils = document.createElement('button');
        utensils.classList.add('utensils');
        utensils.textContent = 'Utensils'



        all.classList.add('active');

        all.addEventListener('click', () => this.handleButtonClick(all, 'all'));
        wearable.addEventListener('click', () => this.handleButtonClick(wearable, 'wearable'));
        appliances.addEventListener('click', () => this.handleButtonClick(appliances, 'appliances'));
        gadgets.addEventListener('click', () => this.handleButtonClick(gadgets, 'gadgets'));
        utensils.addEventListener('click', () => this.handleButtonClick(utensils, 'utensils'));


        container.appendChild(all);
        container.appendChild(wearable);
        container.appendChild(appliances);
        container.appendChild(gadgets);
        container.appendChild(utensils);



        const style = document.createElement('style');
        style.textContent = `
            .container {
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                align-items: center;
                gap: 15px;
                padding-top: 5rem;
            }
            .container button {
                font-size: 18px;
                padding: 10px;
                width: 7rem;
                outline: none;
                border: none;
                border-radius: 5px;
                cursor: pointer;
                transition: background-color 0.3s, color 0.3s;
            }
            .container button.active{
                background: black;
                color: white
            }
        `
        

        shadow.appendChild(style);
        shadow.appendChild(container);

    }

    handleButtonClick(button, type) {
        const buttons = this.shadowRoot.querySelectorAll('button');
        buttons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        this.filterProduct(type);
    }

    filterProduct(type) {
        const product = document.querySelectorAll('product-component');
        product.forEach(product => {
            const productType = product.getAttribute('type');
            if(type === 'all' || productType === type) {
                product.style.display = "block";
            } else {
                product.style.display = "none";
            }
        })
    }



}