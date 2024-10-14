
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

        const men = document.createElement('button');
        men.classList.add('men');
        men.textContent = 'Men';

        const women = document.createElement('button');
        women.classList.add('women');
        women.textContent = 'Women';

        all.classList.add('active');

        all.addEventListener('click', () => this.handleButtonClick(all, 'all'));
        men.addEventListener('click', () => this.handleButtonClick(men, 'men'));
        women.addEventListener('click', () => this.handleButtonClick(women, 'women'));


        container.appendChild(all);
        container.appendChild(men);
        container.appendChild(women);

        const style = document.createElement('style');
        style.textContent = `
            .container {
                display: flex;
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