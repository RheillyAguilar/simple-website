
export class Quote extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {

        const shadow = this.attachShadow({mode: 'open'});

        const container = document.createElement('div');
        container.classList.add('container');

        const detail = document.createElement('div');
        detail.classList.add('detail');

        const h1 = document.createElement('h1');
        h1.classList.add('h1');
        h1.textContent = 'Lorem ipsum dolor sit amet.';

        const p = document.createElement('p');
        p.classList.add('p');
        p.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat maxime aut perferendis tempora in facilis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi officia enim suscipit adipisci, quaerat accusantium magnam impedit at ullam qui. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos et quod possimus nostrum distinctio saepe necessitatibus reprehenderit! Accusantium ullam cumque totam quo eos reiciendis provident voluptatem. Sit vitae nobis velit.';


        detail.appendChild(h1);
        detail.appendChild(p)




        container.appendChild(detail);

        const style = document.createElement('style')
        style.textContent = `
            .container {
                text-align: center;
                background: gold;
                padding: 8rem;
                display: flex;
                justify-content: center;
            }
            .detail {
                width: 45rem;
            }

            .h1 {
                font-size: 30px;
                font-weight: bold;
                letter-spacing: 5px;
            }
            .p {
                font-size: 19px;
            }
        `

        shadow.appendChild(style);
        shadow.appendChild(container);

    }


}