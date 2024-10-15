export class Account extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const shadow = this.attachShadow({ mode: 'open' });

        const container = document.createElement('div');
        container.classList.add('container');

    
        const form = document.createElement('form');
        form.classList.add('form');
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleLogin(email.value, password.value);
        });

        const back = document.createElement('img');
        back.classList.add('back'); 
        back.src = 'assets/arrow-left-solid.svg';
        back.alt = 'Back Icon';
        back.addEventListener('click', () => {
            window.location.href = 'index.html'
        });

        const title = document.createElement('h1');
        title.classList.add('title');
        title.textContent = 'Log in'

        const emailDiv = document.createElement('div');
        emailDiv.classList.add('email-div');

        const emailIcon = document.createElement('img');
        emailIcon.classList.add('email-icon');
        emailIcon.src = 'assets/user-solid.svg';
        emailIcon.alt = 'Email Icon'; 

        const email = document.createElement('input');
        email.type = 'email';
        email.placeholder = 'Email';
        email.classList.add('email');
        email.required = true;

        emailDiv.appendChild(emailIcon);
        emailDiv.appendChild(email);

        const passwordDiv = document.createElement('div');
        passwordDiv.classList.add('password-div');

        const passwordIcon = document.createElement('img');
        passwordIcon.classList.add('password-icon');
        passwordIcon.src = 'assets/lock-solid.svg';
        passwordIcon.alt = 'Password Icon';

        const password = document.createElement('input');
        password.type = 'password';
        password.placeholder = 'Password';
        password.classList.add('password');
        password.required = true;

        passwordDiv.appendChild(passwordIcon);
        passwordDiv.appendChild(password);

        const noAccount = document.createElement('div');
        noAccount.classList.add('no-account');

        const without = document.createElement('p');
        without.classList.add('without');
        without.textContent = 'Without an account?'

        const location = document.createElement('a');
        location.classList.add('location');
        location.textContent = 'Sign Up';
        location.href = 'signup.html';

        noAccount.appendChild(without);
        noAccount.appendChild(location);
        

        const login = document.createElement('button');
        login.classList.add('login');
        login.textContent = 'Log in';
        login.type = 'submit';

        form.appendChild(back);
        form.appendChild(title);
        form.appendChild(emailDiv);
        form.appendChild(passwordDiv);
        form.appendChild(noAccount)
        form.appendChild(login);
        container.appendChild(form);

        const style = document.createElement('style');
        style.textContent = `
             .container {
                padding: 5rem;
                display: flex;
                justify-content: center;
                align-items: center;
                height: 50vh;
            }
            .back {
                width: 24px; 
                height: 24px;
                cursor: pointer;
            }
            .title {
                text-align: center;
                margin-bottom: 0
            }
            .form {
                background: gold;
                display: flex;
                flex-direction: column;
                gap: 13px;
                width: 20rem;
                padding: 20px;
                border-radius: 5px;
                box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            }
            .email-div, .password-div {
                display: flex;
                align-items: center;
            }
            .email-icon, .password-icon {
                width: 24px; 
                height: 24px;
                margin-right: 10px;
                background: white;
                padding: 8.4px;
                margin:0;
            }
            input {
                padding: 10px;
                outline: none;
                border: none;
                font-size: 18px;
                flex-grow: 1; 
            }
            .no-account {
                display: flex;
                align-items: center; 
                justify-content: center;
                gap: 10px;
            }
            button {
                padding: 10px;
                outline: none;
                border-radius: 4px;
                border: none;
                font-size: 18px;
                background: blue;
                color: white;
                cursor: pointer;
                transition: background 0.3s;
            }
            button:hover {
                background: darkblue;
            }
        `;

        shadow.appendChild(style);
        shadow.appendChild(container);
    }

  
}

