window.onload = function () {

    /**
     *! Variables:
     */
    var alertErrorText = {
        required: 'This is a required field *',
        emailMin: 'This field may contain from 3 characters *',
        emailValid: 'This field must contain a valid email *',
        passwordValid: 'This field can contain from 8 to 25 characters *',
        passwordSpaces: 'This field cannot contain spaces *'
    };
    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    var inputEmail = document.querySelector('#login-email-input'),
        inputPassword = document.querySelector('#login-password-input'),
        loginBtn = document.querySelector('#login-btn'),
        loginInputElements = document.querySelectorAll('.register-inputs');

    /**
     *? Functions to manipulate styles:
     */
    function inputInvalid(input, invalidAlert, alertError) {
        input.classList.add('invalid-input');
        invalidAlert.innerText = alertError;
        invalidAlert.classList.add('active');
    }

    function focusInput(input, invalidAlert) {
        input.classList.remove('invalid-input');
        invalidAlert.innerText = '';
        invalidAlert.classList.remove('active');
    }
    inputEmail.onfocus = function () {
        focusInput(inputEmail, inputEmail.nextElementSibling);
    }
    inputPassword.onfocus = function () {
        focusInput(inputPassword, inputPassword.nextElementSibling);
    }

    inputEmail.onblur = function () {
        //* Valid length checking
        if (inputEmail.value.length == 0) {
            inputInvalid(inputEmail, inputEmail.nextElementSibling, alertErrorText.required);
        } else if (inputEmail.value.length < 3) {
            inputInvalid(inputEmail, inputEmail.nextElementSibling, alertErrorText.emailMin);
        } else {
            //* Type of value checking
            if (!emailExpression.test(inputEmail.value)) {
                inputInvalid(inputEmail, inputEmail.nextElementSibling, alertErrorText.emailValid)
            }
        }
    }

    inputPassword.onblur = function () {
        if (inputPassword.value.length == 0) {
            //* Valid length checking
            inputInvalid(inputPassword, inputPassword.nextElementSibling, alertErrorText.required);
        } else if (inputPassword.value.length < 8 || inputPassword.value.length > 25) {
            inputInvalid(inputPassword, inputPassword.nextElementSibling, alertErrorText.passwordValid);
        } else {
            //* Type of value checking
            if (inputPassword.value.indexOf(' ') != -1) {
                inputInvalid(inputPassword, inputPassword.nextElementSibling, alertErrorText.passwordSpaces);
            }
        }
    }

    function fetchToDataBase(email, password) {
        var queryParams = '?';
        queryParams += email.name + '=' + email.value;
        queryParams += '&' + password.name + '=' + password.value;
        fetch('https://basp-m2022-api-rest-server.herokuapp.com/login' + queryParams)
            .then(function (response) {
                if (response.status >= 400) {
                    throw new Error(response);
                } else {
                    return response.json();
                }
            })
            .then(function (resp) {
                alert(resp.msg + ' Successfully!!');
            })
            .catch(function (error) {
                alert('Request results on ' + error.statusText + '\nPassword or email invalid.');
            })
    }

    function formValidate() {
        loginInputElements.forEach(function (element) {
            if (element.value.length == 0) {
                inputInvalid(element, element.nextElementSibling, alertErrorText.required);
            }
        });
        invalidInputs = document.querySelectorAll('.invalid-input') || [];

        if (invalidInputs.length == 0) {
            //* After passing all validations, run the function to send data to the server.
            fetchToDataBase(inputEmail, inputPassword);
        }
    }

    loginBtn.addEventListener('click', formValidate);

}