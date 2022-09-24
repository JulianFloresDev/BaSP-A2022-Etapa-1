window.onload = function () {
    console.log('Carga después de cargar la página');

    /**
     *! Variables:
     */
    var alertErrorText = {
        required: 'This is a required field *',
        emailMin: 'This field may contain from 3 characters *',
        emailValid: 'This field must contain a valid email *',
        passwordValid: 'This field can contain from 4 to 25 characters *',
        passwordSpaces: 'This field cannot contain spaces *'
    };
    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    var inputEmail = document.querySelector('#login-email-input'),
        inputPassword = document.querySelector('#login-password-input'),
        loginBtn = document.querySelector('#login-btn');

    /**
     *? Functions to manipulate styles:
     */
    function inputInvalid(input, invalidAlert, alertError) {
        input.classList.add('invalid');
        invalidAlert.innerText = alertError;
        invalidAlert.classList.add('active');
    }

    function correctInputValue(input, invalidAlert) {
        input.classList.remove('invalid');
        invalidAlert.innerText = '';
        invalidAlert.classList.remove('active');
    }

    function focusInput(input, invalidAlert) {
        input.classList.remove('invalid');
        invalidAlert.innerText = '';
        invalidAlert.classList.remove('active');
    }
    inputEmail.onfocus = function () {
        focusInput(this, this.nextElementSibling);
    }
    inputPassword.onfocus = function () {
        focusInput(this, this.nextElementSibling);
    }

    inputEmail.onblur = function () {
        if (this.value.length == 0) {
            inputInvalid(this, this.nextElementSibling, alertErrorText.required);
        } else if (this.value.length < 3) {
            inputInvalid(this, this.nextElementSibling, alertErrorText.emailMin);
        } else {
            if (!emailExpression.test(this.value)) {
                inputInvalid(this, this.nextElementSibling, alertErrorText.emailValid)
            } else {
                correctInputValue(this, this.nextElementSibling);
            }
        }
    }

    inputPassword.onblur = function () {
        if (this.value.length == 0) {
            inputInvalid(this, this.nextElementSibling, alertErrorText.required);
        } else if (this.value.length < 4 || this.value.length > 25) {
            inputInvalid(this, this.nextElementSibling, alertErrorText.passwordValid);
        } else {
            if (this.value.indexOf(' ') == -1) {
                correctInputValue(this, this.nextElementSibling);
            } else {
                inputInvalid(this, this.nextElementSibling, alertErrorText.passwordSpaces);
            }
        }
    }

    function formValidate() {
        alert('sale la alerta correctamente');
    }

    loginBtn.addEventListener('click', formValidate);























}
console.log("Carga primero, antes de cargar la página");