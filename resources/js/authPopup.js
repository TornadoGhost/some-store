(() => {
    document.addEventListener('click', function (e) {
        switch (e.target) {
            case document.querySelector('.header__account--btn'):
                const loginModal = modal('Login', loginForm());
                document.body.appendChild(loginModal);
                break;

            case document.querySelector('.backdrop__close'):
                document.querySelector('.backdrop').remove();
                break;

            case document.querySelector('.backdrop'):
                document.querySelector('.backdrop').remove();
                break;

            case document.querySelector('.backdrop__register'):
                const registerTitle = document.querySelector('.backdrop__heading');
                registerTitle.textContent = 'Registration';

                const form = document.querySelector('.backdrop__login-form');
                if (form) {
                    form.remove();

                    const modalContent = document.querySelector('.backdrop__modal-content');
                    if (modalContent) {
                        modalContent.insertBefore(registrationForm(), modalContent.firstChild);
                    }
                }
                break;

            case document.querySelector('.backdrop__register-link'):
                const loginTitle = document.querySelector('.backdrop__heading');
                loginTitle.textContent = 'Login';
                const registerForm = document.querySelector('.backdrop__registration-form');
                if (registerForm) {
                    registerForm.remove();

                    const modalContent = document.querySelector('.backdrop__modal-content');
                    if (modalContent) {
                        modalContent.appendChild(loginForm());
                    }
                }
                break;
        }
    });
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            const backdrop = document.querySelector('.backdrop');
            if (backdrop) {
                backdrop.remove();
            }
        }
    });

    function modal(title, form) {
        const backdrop = document.createElement('div');
        backdrop.className = 'backdrop';

        const modal = document.createElement('div');
        modal.className = 'backdrop__modal';

        const modalHeader = document.createElement('div');
        modalHeader.className = 'backdrop__modal-header';

        const header3 = document.createElement('h3');
        header3.className = 'backdrop__heading';
        header3.textContent = title;

        const buttonClose = document.createElement('button');
        buttonClose.className = 'backdrop__close';
        buttonClose.type = 'button';
        buttonClose.textContent = 'Close';

        const modalContent = document.createElement('div');
        modalContent.className = 'backdrop__modal-content';

        const modalAuthLabel = document.createElement('p');
        modalAuthLabel.className = 'backdrop__socials-label';
        modalAuthLabel.textContent = 'Login as a user';
        const modalAuthSocials = document.createElement('div');
        modalAuthSocials.className = 'backdrop__auth-socials'
        const modalAuthSocialsButtons = document.createElement('div');
        modalAuthSocialsButtons.className = 'backdrop__socials-buttons';
        modalAuthSocialsButtons.append(
            createButton('Facebook', 'button', 'button button--large button--gray backdrop__socials-button'),
            createButton('Google', 'button', 'button button--large button--gray backdrop__socials-button'),
        );
        modalAuthSocials.append(modalAuthLabel, modalAuthSocialsButtons);

        modalHeader.append(header3, buttonClose);
        modalContent.append(form, modalAuthSocials);
        modal.append(modalHeader, modalContent);
        backdrop.appendChild(modal)

        return backdrop;
    }

    function loginForm() {
        const formInputs = [
            'email',
            'password',
        ];

        const form = document.createElement('form');
        form.className = 'backdrop__login-form';

        const fieldset = document.createElement('fieldset');

        for (let i = 0; i < formInputs.length; i++) {
            fieldset.appendChild(createFormInput(formInputs[i], formInputs[i], 'login'));
        }

        const formBottom = document.createElement('div');
        formBottom.className = 'backdrop__form-bottom';

        const submitButton = document.createElement('button');
        submitButton.className = 'button button--large button--green backdrop__submit';
        submitButton.textContent = 'Sign in';

        const registerButton = document.createElement('button');
        registerButton.className = 'button button--link backdrop__register';
        registerButton.textContent = 'Sign up';

        const authDivider = document.createElement('p');
        authDivider.className = 'backdrop__auth-divider';
        authDivider.textContent = 'or';

        formBottom.append(submitButton, registerButton);
        fieldset.appendChild(formBottom);
        form.appendChild(fieldset);

        return form;
    }

    function registrationForm() {
        const formInputs = [
            'name',
            'surname',
            'phone',
            'email',
            'password',
        ];

        const form = document.createElement('form');
        form.className = 'backdrop__registration-form';

        const fieldset = document.createElement('fieldset');

        const formBottom = document.createElement('div');
        formBottom.className = 'backdrop__form-bottom';

        const submit = document.createElement('button');
        submit.className = 'button button--large button--green backdrop__submit';
        submit.type = 'submit';
        submit.textContent = 'Submit';

        const logButton = document.createElement('button');
        logButton.className = 'button button--link backdrop__register-link';
        logButton.type = 'button';
        logButton.textContent = 'I am already registered';

        for (let i = 0; i < formInputs.length; i++) {
            switch (formInputs[i]) {
                case 'phone':
                    const inputPhoneNumber = createFormInput(formInputs[i], 'tel');
                    inputPhoneNumber.querySelector('.backdrop__label').textContent = 'Phone number';
                    fieldset.appendChild(inputPhoneNumber);
                    break;
                case 'email':
                    fieldset.appendChild(createFormInput(formInputs[i], 'email'));
                    break;
                case 'password':
                    fieldset.appendChild(createFormInput(formInputs[i], 'password'));
                    break;
                default:
                    fieldset.appendChild(createFormInput(formInputs[i], 'text'));
            }
        }

        formBottom.innerHTML += submit.outerHTML + logButton.outerHTML;
        fieldset.appendChild(formBottom);
        form.appendChild(fieldset);

        return form;
    }

    function createFormInput(name, type = 'text', prefix = 'register') {
        name = name.trim();
        prefix = prefix.trim().toLowerCase();
        let inputName = name.trim().charAt(0).toUpperCase() + name.slice(1);

        let formRow = document.createElement('div');
        formRow.className = 'backdrop__form-row';

        let input = document.createElement('input');
        input.id = `${prefix}${inputName}`;
        input.type = type;
        input.name = name.charAt(0).toLowerCase() + name.slice(1);

        let label = document.createElement('label');
        label.className = 'backdrop__label';
        label.setAttribute('for', `${prefix}${inputName}`)
        label.textContent = inputName;

        let validationBlock = document.createElement('div');
        validationBlock.className = 'validation-message';

        formRow.innerHTML += label.outerHTML + input.outerHTML + validationBlock.outerHTML;

        return formRow;
    }
})();
