
export class Info extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const shadow = this.attachShadow({mode: 'open'});

        const container = document.createElement('div');
        container.classList.add('container');

        const info = document.createElement('div');
        info.classList.add('info');

        const h1 = document.createElement('h1');
        h1.classList.add('h1');
        h1.textContent = `Lorem ipsum dolor, sit amet consectetur adipisicing`

        const p = document.createElement('p');
        p.classList.add('p');
        p.textContent = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore at beatae fugit id doloremque magnam pariatur! Ab quis, corporis molestias iste repudiandae assumenda nam perspiciatis quam nulla perferendis distinctio sequi quisquam ipsa eum maxime veritatis odio omnis inventore! Corporis, velit? Possimus deleniti doloribus nam consequuntur commodi facilis repellendus iusto harum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim excepturi quibusdam obcaecati, nisi eveniet blanditiis itaque laborum voluptatum illo corrupti, nam, quod quisquam eum facilis accusantium aliquid impedit necessitatibus ipsa? Provident, a. Quasi temporibus quia laboriosam hic nemo, pariatur qui cum suscipit mollitia, quod accusantium itaque id magnam repellendus deleniti.`

        const form = document.createElement('form');
        form.classList.add('form');

        const email = document.createElement('input');
        email.type = 'email';
        email.placeholder = 'Email';
        email.classList.add('email');

        const subject = document.createElement('input');
        subject.type = 'text';
        subject.placeholder = 'Subject';
        subject.classList.add('subject');

        const textfield = document.createElement('textarea');
        textfield.setAttribute('onresize', 'none'); 
        textfield.placeholder = 'Message';
        textfield.classList.add('textfield');
        textfield.rows = 10;

        const submit = document.createElement('button');
        submit.classList.add('submit');
        submit.textContent = 'Submit';
        

        // Append the Input Form
        form.appendChild(email);
        form.appendChild(subject);
        form.appendChild(textfield);
        form.append(submit);
        
        
        // Append the Information
        info.appendChild(h1);
        info.appendChild(p);
        container.appendChild(info);
        container.appendChild(form)


        const style = document.createElement('style');
        style.textContent = `
            .container {
                text-align: center;
                padding: 25px;
            }
            .info {
                margin: auto;
                width: 50%;
            }
            .h1 {
                font-size: 35px;
            }
            .p {
                font-size: 23px;
            }
            .form {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                gap: 10px;
                padding-top: 5rem;
                padding-bottom: 10rem;
            }
            .email {
                padding: 10px 20px;
                width: 50%;
                font-size: 20px;
                border-radius: 5px;
                outline: none;
                border: 2px solid gold;
            }
            .subject {
                padding: 10px 20px;
                width: 50%;
                font-size: 20px;
                border-radius: 5px;
                outline: none;
                border: 2px solid gold;
            }
            .textfield {
                resize: none;
                padding: 10px 20px;
                border-radius: 5px;
                font-size: 20px;
                width: 50%;
                outline: none;
                border: 2px solid gold;
            }
            .submit {
                width: 53%;
                padding: 10px 20px;
                font-size: 20px;
                outline: none;
                border: none;
                border-radius: 5px;
                cursor: pointer;
                background: red;
                color: white;
            }
            .submit:hover {
                background: transparent;
                border: 2px solid red;
                color: black;
            }
            
        `

        shadow.appendChild(style);
        shadow.appendChild(container);



    }
}