(() => {
    const validationClassName = 'validation_type_error';
    document.addEventListener('input', function (event) {
        if (event.target.form.className === 'backdrop__registration-form') {
            test(event.target);
        }
    });

    document.addEventListener('submit', async function (event) {
        if (event.target === document.querySelector('.backdrop__registration-form')) {
            event.preventDefault();
            const formInputs = Array.from(document.querySelectorAll('.backdrop__registration-form input'));
            if (test(formInputs)) {
                const regData = new FormData(document.querySelector('.backdrop__registration-form'));
                await fetch(route('auth.reg'), {
                    method: 'POST',
                    body: regData,
                })
                    .then(response =>  {
                        return response.json();
                    })
                    .then(data => {
                        if (data.details) {
                            const errorsArray = Object.values(data.details);
                            const form = document.querySelector('.backdrop__registration-form fieldset');
                            const errorsContainer = form.querySelector('.alert.alert-danger')
                            if (errorsContainer) {
                                errorsContainer.remove();
                            }
                            const errorsDivElement = document.createElement('div');
                            errorsDivElement.className = 'alert alert-danger';
                            const errorsListElement = document.createElement('ul');

                            errorsArray.forEach(error => error.forEach(value => {
                                let error = document.createElement('li');
                                error.textContent = value;
                                errorsListElement.append(error);
                            }));

                            errorsDivElement.append(errorsListElement);
                            form.prepend(errorsDivElement);

                            console.log(data)
                        }
                        else {
                            console.log(data)
                        }
                    })
                    .catch(reject => console.log(reject));
            }
        }
    })

    function test(input) {
        let isValid = true;
        if (Array.isArray(input)) {
            input.forEach(value => {
                let validationResult = inputValidation(value);
                if (!validationResult) {
                    isValid = false;
                }
            });
        } else {
            isValid = inputValidation(input);
        }

        return isValid;
    }

    function inputValidation(input) {
        switch (input.name) {
            case 'name':
            case 'surname':
                return validation(input, /^[a-zA-Z]{2,}$/, 'Enter your name in latin')
            case 'phone':
                return validation(input, /^\+38\d{10}$/, 'Enter a phone number');
            case 'email':
                return validation(input, /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Enter your email');
            case 'password':
                return validation(input, /^.{5,50}$/, 'Password must be at least 5 symbols');
        }
    }

    function validation(input, pattern, message) {
        const formRow = input.parentElement;
        const errorText = document.createElement('p');
        if (pattern.test(input.value)) {
            if (formRow.classList.contains(validationClassName) && formRow.querySelector('.validation-message p')) {
                formRow.classList.remove(validationClassName);
                formRow.querySelector('.validation-message p').remove();
            }

            return true;
        } else {
            if (!formRow.classList.contains(validationClassName) && !formRow.querySelector('.validation-message p') ) {
                formRow.classList.add(validationClassName);
                errorText.textContent = message;
                formRow.querySelector('.validation-message').appendChild(errorText);
            }

            return false;
        }
    }
})();
