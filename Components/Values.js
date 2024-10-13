

export class Values extends HTMLElement {
    constructor() {
        super();
    }

    static get observedAttributes() {
        return [
            "image",
            "name",
            "description"
        ]
    };


    get image() {
        return this.getAttribute('image');
    };

    get name() {
        return this.getAttribute('name');
    };

    get description() {
        return this.getAttribute('description');
    };

    set image(newImage) {
        return this.setAttribute('image', newImage);
    };

    set name(newName) {
        return this.setAttribute('name', newName);
    };

    set description(newDescription) {
        return this.setAttribute('description', newDescription);
    };


    connectedCallback() {

        const shadow = this.attachShadow({mode: 'open'});

        const container = document.createElement('div');
        container.classList.add('container');

        const card = document.createElement('div');
        card.classList.add('card');

        const imageContainer = document.createElement('div');
        imageContainer.classList.add('imageContainer');

        const img = document.createElement('img');
        img.src = this.image;
        img.alt = this.image;

        const title = document.createElement('h1');
        title.classList.add('title');
        title.innerHTML = `<strong>${this.name}</strong>`

        const desc = document.createElement('p');
        desc.classList.add('desc');
        desc.innerHTML = `<p>${this.description}</p>`


        imageContainer.appendChild(img);
        card.appendChild(imageContainer);
        card.appendChild(title);
        card.appendChild(desc);
        container.appendChild(card)


        const style = document.createElement('style');

        style.textContent = `
            .container {
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 4rem;
            }
            .card {
                width: 40rem;
            }
            .imageContainer img {
                width: 40rem;
                height: 13rem;
                border-radius: 10px;
            }
        `


        shadow.appendChild(style);
        shadow.appendChild(container)




    }







}