window.onload = function () {
    console.log('Carga después de cargar la página');

    /**
     *! Variables:
     */
    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    var loginInputElements = document.querySelectorAll('.login-input-element'),
        inputName = document.querySelector('#singup-input-name'),
        inputLastName = document.querySelector('#singup-input-lastname'),
        inputDNI = document.querySelector('#singup-input-DNI'),
        inputBirthdate = document.querySelector('#singup-input-birthdate'),
        inputPhone = document.querySelector('#singup-input-phone'),
        inputAddress = document.querySelector('#singup-input-address'),
        inputLocation = document.querySelector('#singup-input-location'),
        inputPostalCode = document.querySelector('#singup-input-postal'),
        inputEmail = document.querySelector('#singup-input-email'),
        inputEmailConfirm = document.querySelector('#singup-input-repeat-email'),
        inputPassword = document.querySelector('#singup-input-password'),
        inputPasswordConfirm = document.querySelector('#singup-input-repeat-password');

    var loginBtn =document.querySelector('#login-btn');

    var errorAlertText = {
        general: {
            required: 'This is a required field *',
            spaces: 'This field cannot contain spaces *',
            repeat: 'This field must be the same as above *',
        },
        name: {
            type: 'This field must contain only letters *',
            length: 'This field can contain from 4 to 20 letters *',
        },
        lastName: {
            type: 'This field must contain only letters *',
            length: 'This field can contain from 4 to 20 letters *',
        },
        DNI: {
            type: 'This field must be a number *',
            length: 'This field must contain over 7 characters *',
        },
        birthdate: {
            justForFun: 'You must be in legal age. Come back soon *',
        },
        phone: {
            type: 'This field must be a number *',
            length: 'This field must be 10 characters long *',
        },
        address: {
            type: 'Must contain text and numbers with space between *',
            length: 'This field must contain at least 5 characters *',

        },
        location: {
            type: 'This field must to contain a valid Location *',
            length: 'This field must contain at least 4 characters *',
        },
        postal: {
            type: 'This field must be numbers only *',
            length: 'Length between 4 and 5 characters only *',
        },
        email: {
            type: 'This field must contain a valid email *',
            length: 'This field may contain from 3 characters *',
        },
        password: {
            type: 'This field can contain letters and numbers only *',
            length: 'This field can contain from 8 to 25 characters *'
        }
    };
    /**
     *? Functions to manipulate styles:
     */
    function focusInput(input, alertParagraf) {
        input.classList.remove('invalid-input');
        alertParagraf.innerText = '';
        alertParagraf.classList.remove('active');
    }

    function inputInvalid(input, alertParagraf, alertError) {
        input.classList.add('invalid-input');
        alertParagraf.innerText = alertError;
        alertParagraf.classList.add('active');
    }

    function lengthValid(input) {
        if (input.value.length == 0) {
            inputInvalid(input, input.nextElementSibling, errorAlertText.general.required);
        }
    }

    function spacesValid(input) {
        if (input.value.includes(' ')) {
            inputInvalid(input, input.nextElementSibling, errorAlertText.general.required);
        }
    }

    //? Validation of all the fields from the array of all inputs (loginInputElements):
    loginInputElements.forEach(function (input) {
        //* Remove conditions on element focus.
        input.onfocus = function (e) {
            inputTarget = e.currentTarget;
            focusInput(inputTarget, inputTarget.nextElementSibling);
        };
    });
    //! Name Validation
    inputName.onblur = function () {
        var name = inputName.name;
        var regex = 'abcdefghijkmnlopqrstuvwxyzABCDEFGHIJKMNLOPQRSTUVWXYZ';
        //* Spaces validation
        spacesValid(inputName);
        if ((inputName.value.length > 0 && inputName.value.length < 4) || inputName.value.length > 20) {
            inputInvalid(inputName, inputName.nextElementSibling, errorAlertText.name.length);
        } else {
            //* Type validation
            for (i = 0; i < inputName.value.length; i++) {
                if (regex.indexOf(inputName.value[i]) == -1) {
                    inputInvalid(inputName, inputName.nextElementSibling, errorAlertText.name.type);
                    break
                }
            }
        }
        //* Length validation
        lengthValid(inputName);
    }
    //! Last Name Validation
    inputLastName.onblur = function () {
        var name = inputLastName.name;
        var regex = 'abcdefghijkmnlopqrstuvwxyzABCDEFGHIJKMNLOPQRSTUVWXYZ';
        //* Spaces validation
        spacesValid(inputLastName);
        if ((inputLastName.value.length > 0 && inputLastName.value.length < 4) || inputLastName.value.length > 20) {
            inputInvalid(inputLastName, inputLastName.nextElementSibling, errorAlertText.name.length);
        } else {
            //* Type validation
            for (i = 0; i < inputLastName.value.length; i++) {
                if (regex.indexOf(inputLastName.value[i]) == -1) {
                    inputInvalid(inputLastName, inputLastName.nextElementSibling, errorAlertText.name.type);
                    break
                }
            }
        }
        //* Length validation
        lengthValid(inputLastName);
    }
    //! DNI Validation
    inputDNI.onblur = function () {
        var numbers = '1234567890';
        if (inputDNI.value.length > 0 && inputDNI.value.length <= 7) {
            inputInvalid(inputDNI, inputDNI.nextElementSibling, errorAlertText.DNI.length);
        } else {
            //* Type Valdiation
            for (i = 0; i < inputDNI.value.length; i++) {
                if (numbers.indexOf(inputDNI.value[i]) == -1) {
                    inputInvalid(inputDNI, inputDNI.nextElementSibling, errorAlertText.DNI.type);
                    break
                }
            }
        }
        //* Length validation
        lengthValid(inputDNI);
    }
    //! Birthdate Validation
    inputBirthdate.onblur = function () {
        //* Legal Age validation
        var yearInput = inputBirthdate.value.slice(0, 4);
        var actualDate = new Date();
        var actualYear = actualDate.getFullYear();
        if (actualYear - yearInput < 18) {
            inputInvalid(inputBirthdate, inputBirthdate.nextElementSibling, errorAlertText.birthdate.justForFun)
        }
        //* Length validation
        lengthValid(inputBirthdate);
    }
    //! Phone Validation
    inputPhone.onblur = function () {
        var numbers = '0123456789';
        if ((inputPhone.value.length > 0 && inputPhone.value.length < 10) || inputPhone.value.length > 10) {
            inputInvalid(inputPhone, inputPhone.nextElementSibling, errorAlertText.phone.length);
        } else {
            //* Type Valdiation
            for (i = 0; i < inputPhone.value.length; i++) {
                if (numbers.indexOf(inputPhone.value[i]) == -1) {
                    inputInvalid(inputPhone, inputPhone.nextElementSibling, errorAlertText.phone.type);
                    break
                }
            }
        }
        //* Length validation
        lengthValid(inputPhone);
    }
    //! Address Validation
    inputAddress.onblur = function () {
        var numbers = '0123456789';
        var letters = 'abcdefghijkmnlopqrstuvwxyzABCDEFGHIJKMNLOPQRSTUVWXYZ';
        //* Space between validation
        if (!inputAddress.value.includes(' ')) {
            inputInvalid(inputAddress, inputAddress.nextElementSibling, errorAlertText.address.type);
        } else {
            // var indexOfSpace = inputAddress.value.includes(' ');
            //* Length validation two
            if (inputAddress.value.length > 0 && inputAddress.value.length < 4) {
                inputInvalid(inputAddress, inputAddress.nextElementSibling, errorAlertText.address.type);
            }
        }
        //* Length Validation
        lengthValid(inputAddress);
    }
    //! City Validation
    inputLocation.onblur = function () {
        var regex = '0123456789abcdefghijkmnlopqrstuvwxyzABCDEFGHIJKMNLOPQRSTUVWXYZ';
        if (inputLocation.value > 0 && inputLocation.value <= 3) {
            inputInvalid(inputLocation, inputLocation.nextElementSibling, errorAlertText.location.length);
        } else {
            //* Type validation
            for (i = 0; i < inputLocation.value.length; i++) {
                if (regex.indexOf(inputLocation.value[i]) == -1) {
                    inputInvalid(inputLocation, inputLocation.nextElementSibling, errorAlertText.location.type);
                }
            }
        }
        //* Length validation
        lengthValid(inputLocation);
    }
    //! Postal Code Valdiation
    inputPostalCode.onblur = function () {
        if (inputPostalCode.value > 0 && (inputPostalCode.value < 4 || inputPostalCode.value > 5)) {
            inputInvalid(inputPostalCode, inputPostalCode.nextElementSibling, errorAlertText.postal.length);
        } else {
            //* Type validation
        }
        //* Length validation
        lengthValid(inputPostalCode);

    }
    //! Email Valdiation
    inputEmail.onblur = function () {
        if (!emailExpression.test(inputEmail.value)) {
            inputInvalid(inputEmail, inputEmail.nextElementSibling, errorAlertText.email.type);
        }
        //* Length validation
        lengthValid(inputEmail);
    }
    inputEmailConfirm.onblur = function () {
        if (inputEmailConfirm != inputEmail) {
            inputInvalid(inputEmailConfirm, inputEmailConfirm.nextElementSibling, errorAlertText.general.repeat);
        }
        //* Length validation
        lengthValid(inputEmailConfirm);
    }
    inputPassword.onblur = function () {
        if (inputPassword.value.length < 8 || inputPassword.value.length > 25) {
            inputInvalid(inputPassword, inputPassword.nextElementSibling, errorAlertText.password.length);
        } else if (inputPassword.value.indexOf(' ') != -1) {
            inputInvalid(inputPassword, inputPassword.nextElementSibling, errorAlertText.password.type);
        }
        //* Length validation
        lengthValid(inputPassword);
    }
    inputPasswordConfirm.onblur = function () {
        if (inputPasswordConfirm != inputPassword) {
            inputInvalid(inputPasswordConfirm, inputPasswordConfirm.nextElementSibling, errorAlertText.general.repeat)
        }
        //* Length validation
        lengthValid(inputPasswordConfirm);
    }

    function terminarMañanaFunction(){
        alert('Terminar Mañana rey, hoy no da');
    }
    loginBtn.addEventListener('click', terminarMañanaFunction);
}
console.log("Carga primero, antes de cargar la página");