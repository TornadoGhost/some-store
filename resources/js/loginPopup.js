document.addEventListener('click', function (e) {
    switch (e.target) {
        case document.querySelector('.header__account--btn'):
            const backdrop = modal('Login', loginForm());
            document.body.appendChild(backdrop);

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
                    modalContent.appendChild(registrationForm());
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

    modalHeader.appendChild(header3);
    modalHeader.appendChild(buttonClose);
    modalContent.appendChild(form);
    modal.appendChild(modalHeader);
    modal.appendChild(modalContent);
    backdrop.appendChild(modal)

    return backdrop;
}

function loginForm(){

    const form = document.createElement('form');
    form.className = 'backdrop__login-form';

    const fieldset = document.createElement('fieldset');

    const labelAuthEmail = document.createElement('label');
    labelAuthEmail.className = 'backdrop__label';
    labelAuthEmail.setAttribute('for', 'auth_email');
    labelAuthEmail.textContent = 'Email';

    const inputAuthEmail = document.createElement('input');
    inputAuthEmail.className = 'backdrop__input-email'
    inputAuthEmail.type = 'email';
    inputAuthEmail.id = 'auth_email';

    const labelAuthPassword = document.createElement('label');
    labelAuthPassword.className = 'backdrop__label';
    labelAuthPassword.setAttribute('for', 'auth_password');
    labelAuthPassword.textContent = 'Password';

    const inputAuthPassword = document.createElement('input');
    inputAuthPassword.className = 'backdrop__input-password';
    inputAuthPassword.type = 'password';
    inputAuthPassword.id = 'auth_password';

    const formBottom = document.createElement('div');
    formBottom.className = 'backdrop__form-bottom';

    const submitButton = document.createElement('button');
    submitButton.className = 'backdrop__submit';
    submitButton.textContent = 'Sign in';

    const registerButton = document.createElement('button');
    registerButton.className = 'backdrop__register';
    registerButton.textContent = 'Sign up';

    formBottom.appendChild(submitButton);
    formBottom.appendChild(registerButton);
    fieldset.appendChild(labelAuthEmail);
    fieldset.appendChild(inputAuthEmail);
    fieldset.appendChild(labelAuthPassword);
    fieldset.appendChild(inputAuthPassword);
    fieldset.appendChild(formBottom);
    form.appendChild(fieldset);

    return form;
}

function registrationForm() {
    const form = document.createElement('form');
    form.className = 'backdrop__registration-form';

    const fieldset = document.createElement('fieldset');

    const nameFormRow = document.createElement('div');
    nameFormRow.className = 'backdrop__form-row';

    const labelName = document.createElement('label');
    labelName.className = 'backdrop__label';
    labelName.setAttribute('for', 'registerUserName');
    labelName.textContent = 'Name'

    const name = document.createElement('input');
    name.className = 'backdrop__user-name';
    name.id = 'registerUserName';
    name.type = 'text';

    const surnameFormRow = document.createElement('div');
    surnameFormRow.className = 'backdrop__form-row';

    const labelSurname = document.createElement('label');
    labelSurname.className = 'backdrop__label';
    labelSurname.setAttribute('for', 'registerUserSurname');
    labelSurname.textContent = 'Surname';

    const surname = document.createElement('input');
    surname.className = 'backdrop__user-surname';
    surname.id = 'registerUserSurname';
    surname.type = 'text';

    const phoneFormRow = document.createElement('div');
    phoneFormRow.className = 'backdrop__form-row';

    const labelPhoneNumber = document.createElement('label');
    labelPhoneNumber.className = 'backdrop__label';
    labelPhoneNumber.setAttribute('for', 'registerUserPhone');
    labelPhoneNumber.textContent = 'Phone number';

    const phoneNumber = document.createElement('input');
    phoneNumber.className = 'backdrop__user-phone';
    phoneNumber.id = 'registerUserPhone';
    phoneNumber.type = 'tel';

    const emailFormRow = document.createElement('div');
    emailFormRow.className = 'backdrop__form-row';

    const labelEmail = document.createElement('label');
    labelEmail.className = 'backdrop__label';
    labelEmail.setAttribute('for', 'registerUserEmail');
    labelEmail.textContent = 'Email';

    const email = document.createElement('input');
    email.className = 'backdrop__user-email';
    email.id = 'registerUserEmail';
    email.type = 'email';

    const passwordFormRow = document.createElement('div');
    passwordFormRow.className = 'backdrop__form-row';

    const labelPassword = document.createElement('label');
    labelPassword.className = 'backdrop__label';
    labelPassword.setAttribute('for', 'registerUserPassword');
    labelPassword.textContent = 'Password';

    const password = document.createElement('input');
    password.className = 'backdrop__user-password';
    password.id = 'registerUserPassword';
    password.type = 'password';

    const formBottom = document.createElement('div');
    formBottom.className = 'backdrop__form-bottom';

    const submit = document.createElement('button');
    submit.className = 'backdrop__submit';
    submit.type = 'submit';
    submit.textContent = 'Submit';

    const logButton = document.createElement('button');
    logButton.className = 'backdrop__register-link';
    logButton.type = 'button';
    logButton.textContent = 'I am already registered';

    nameFormRow.appendChild(labelName);
    nameFormRow.appendChild(name);
    surnameFormRow.appendChild(labelSurname);
    surnameFormRow.appendChild(surname);
    phoneFormRow.appendChild(labelPhoneNumber);
    phoneFormRow.appendChild(phoneNumber);
    emailFormRow.appendChild(labelEmail);
    emailFormRow.appendChild(email);
    passwordFormRow.appendChild(labelPassword);
    passwordFormRow.appendChild(password);
    formBottom.appendChild(submit);
    formBottom.appendChild(logButton);
    fieldset.appendChild(nameFormRow);
    fieldset.appendChild(surnameFormRow);
    fieldset.appendChild(phoneFormRow);
    fieldset.appendChild(emailFormRow);
    fieldset.appendChild(passwordFormRow);
    fieldset.appendChild(formBottom);
    form.appendChild(fieldset);

    return form;
}
