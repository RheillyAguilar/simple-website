export class Blog extends HTMLElement {
    constructor() {
        super();
    }

    static get observedAttributes() {
        return ["img", "title", "date", "description"];
    }

    get img() {
        return this.getAttribute('img');
    }

    get title() {
        return this.getAttribute('title');
    }

    get date() {
        return this.getAttribute('date');
    }

    get description() {
        return this.getAttribute('description');
    }

    set img(newImg) {
        return this.setAttribute('img', newImg);
    }

    set title(newTitle) {
        return this.setAttribute('title', newTitle);
    }

    set date(newDate) {
        return this.setAttribute('date', newDate);
    }

    set description(newDescription) {
        return this.setAttribute('description', newDescription);
    }

    connectedCallback() {
        const shadow = this.attachShadow({ mode: 'open' });

        const card = document.createElement('div');
        card.classList.add('card');

        const imageContainer = document.createElement('div');
        imageContainer.classList.add('imageContainer');

        const img = document.createElement('img');
        img.src = this.img;
        img.alt = this.title; 

        const details = document.createElement('div');
        details.classList.add('details');

        const nameDate = document.createElement('div');
        nameDate.classList.add('name-date');

        const title = document.createElement('h1');
        title.classList.add('title');
        title.innerHTML = `<strong>${this.title}</strong>`; 

        const date = document.createElement('span');
        date.classList.add('date');
        date.innerHTML = `${this.date}`;

        const desc = document.createElement('p');
        desc.classList.add('desc');
        desc.innerHTML = `<p>${this.description}</p>`;


        imageContainer.appendChild(img);
        nameDate.appendChild(title);
        nameDate.appendChild(date);
        details.appendChild(nameDate);
        details.appendChild(desc);
        card.appendChild(imageContainer);
        card.appendChild(details);


        const style = document.createElement('style');
        style.textContent = `
            .card {
                display: flex;
                flex-direction: column;
                width: 280px;
                border: 1px solid #ccc;
                border-radius: 10px;
                overflow: hidden;
                box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            }
            .imageContainer img {
                width: 100%;
                height: 10rem;
            }
            .details {
                padding: 15px;
            }
            .name-date {
                display: flex;
                align-items: center;
                justify-content: space-between;
            }
            .title {
                font-size: 1.5rem;
            }
            .date {
                color: gray;
                font-size: 0.9rem;
            }
            .desc {
                font-size: 1rem;
            }
        `;

        shadow.appendChild(style);
        shadow.appendChild(card);
    }
}
