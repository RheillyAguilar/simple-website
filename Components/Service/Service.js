
    export class Service extends HTMLElement {
        constructor() {
            super();
        }


        static get observedAttributes() {
            return [
                "img",
                "name",
                "description"
            ]
        }

        get img() {
            return this.getAttribute('img');
        };

        get name() {
            return this.getAttribute('name');
        };

        get description() {
            return this.getAttribute('description');
        };

        set img(newImg) {
            return this.setAttribute('img', newImg);
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

            const imageContainer = document.createElement('div');
            imageContainer.classList.add('imageContainer');

            const image = document.createElement('img');
            image.src = this.img;
            image.alt = this.name;

            const details = document.createElement('div');
            details.classList.add('details');

            const title = document.createElement('h1');
            title.classList.add('title');
            title.innerHTML = `<strong>${this.name}</strong>`;

            const desc = document.createElement('p');
            desc.classList.add('desc')
            desc.innerHTML = `<p>${this.description}</p>`;

            details.appendChild(title);
            details.appendChild(desc);
            imageContainer.appendChild(image);
            container.appendChild(imageContainer);
            container.appendChild(details);

            const style = document.createElement('style');
            style.textContent = `
                .container {
                    width: 19rem;
                    text-align: center;
                    padding: 20px;
                    background: red;
                    color: white;
                    border-radius: 5px
                }
                img {
                    width: 15rem;
                    height: 10rem;
                }
                .title {
                    letter-spacing: 5px;
                }
                .desc {
                    font-size: 18px;
                }
            `



            shadow.appendChild(style);
            shadow.appendChild(container)
        }
    }