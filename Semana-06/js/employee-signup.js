window.onload = function () {
    /**
     *! Variables:
     */
    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    var loginInputElements = document.querySelectorAll('.login-input-element'),
        inputName = document.querySelector('#signup-input-name'),
        inputLastName = document.querySelector('#signup-input-lastname'),
        inputDNI = document.querySelector('#signup-input-DNI'),
        inputBirthdate = document.querySelector('#signup-input-birthdate'),
        inputPhone = document.querySelector('#signup-input-phone'),
        inputAddress = document.querySelector('#signup-input-address'),
        inputLocation = document.querySelector('#signup-input-location'),
        inputPostalCode = document.querySelector('#signup-input-postal'),
        inputEmail = document.querySelector('#signup-input-email'),
        inputEmailConfirm = document.querySelector('#signup-input-repeat-email'),
        inputPassword = document.querySelector('#signup-input-password'),
        inputPasswordConfirm = document.querySelector('#signup-input-repeat-password');

    var loginBtn = document.querySelector('#login-btn');
    var messageToAddInputsValues = 'Thanks for register!! You\'r doing the rigth thing for your team!\n\n';

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
            length: 'This field must contain at least 4 length *',
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
            type: 'This field can contain letter and number only *',
            length: 'This field must be from 8 to 25 length  *'
        }
    };
    var lettersRegex = 'abcdefghijkmnlopqrstuvwxyzABCDEFGHIJKMNLOPQRSTUVWXYZ',
        numbersRegex = '0123456789',
        alfanumericRegex = lettersRegex.concat(numbersRegex);
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
        alertParagraf.classList.add('active');
        alertParagraf.innerText = alertError;
    }

    function lengthValid(input) {
        if (input.value.length == 0) {
            inputInvalid(input, input.nextElementSibling, errorAlertText.general.required);
        }
    }

    function spacesValid(input) {
        if (input.value.includes(' ')) {
            inputInvalid(input, input.nextElementSibling, errorAlertText.general.spaces);
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
        var regex = lettersRegex;
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
        var regex = lettersRegex;
        if ((inputLastName.value.length > 0 && inputLastName.value.length < 4) || inputLastName.value.length > 20) {
            inputInvalid(inputLastName, inputLastName.nextElementSibling, errorAlertText.name.length);
        } else {
            //* Type validation
            for (i = 0; i < inputLastName.value.length; i++) {
                //* Spaces alowed in second logical expresion
                if (regex.indexOf(inputLastName.value[i]) == -1 && inputLastName.value[i] != ' ') {
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
        var regex = numbersRegex;
        if (inputDNI.value.length > 0 && inputDNI.value.length <= 7) {
            inputInvalid(inputDNI, inputDNI.nextElementSibling, errorAlertText.DNI.length);
        } else {
            //* Type Valdiation
            for (i = 0; i < inputDNI.value.length; i++) {
                if (regex.indexOf(inputDNI.value[i]) == -1) {
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
        var regex = numbersRegex;
        if ((inputPhone.value.length > 0 && inputPhone.value.length < 10) || inputPhone.value.length > 10) {
            inputInvalid(inputPhone, inputPhone.nextElementSibling, errorAlertText.phone.length);
        } else {
            //* Type Valdiation
            for (i = 0; i < inputPhone.value.length; i++) {
                if (regex.indexOf(inputPhone.value[i]) == -1) {
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
        var regex = alfanumericRegex;
        //* Space between validation
        if (!inputAddress.value.includes(' ')) {
            inputInvalid(inputAddress, inputAddress.nextElementSibling, errorAlertText.address.type);
        } else {
            // var indexOfSpace = inputAddress.value.includes(' ');
            //* Length validation two
            if (inputAddress.value.length > 0 && inputAddress.value.length < 4) {
                inputInvalid(inputAddress, inputAddress.nextElementSibling, errorAlertText.address.type);
            } else {
                //* Type validation
                for (i = 0; i < inputAddress; i++) {
                    if (regex.indexOf(inputAddress[i]) == -1) {
                        inputInvalid(inputAddress, inputAddress.nextElementSibling, errorAlertText.address.type);
                    }
                }
            }
        }
        //* Length Validation
        lengthValid(inputAddress);
    }
    //! City Validation
    inputLocation.onblur = function () {
        var regex = alfanumericRegex;
        //* Length validation two
        if (inputLocation.value.length > 0 && inputLocation.value.length <= 3) {
            inputInvalid(inputLocation, inputLocation.nextElementSibling, errorAlertText.location.length);
        } else {
            //* Type validation
            for (i = 0; i < inputLocation.value.length; i++) {
                //* Spaces alowed in second logical expresion
                if (regex.indexOf(inputLocation.value[i]) == -1 && inputLocation.value[i] != ' ') {
                    inputInvalid(inputLocation, inputLocation.nextElementSibling, errorAlertText.location.type);
                }
            }
        }
        //* Length validation
        lengthValid(inputLocation);
    }
    //! Postal Code Valdiation
    inputPostalCode.onblur = function () {
        var regex = numbersRegex;
        //* Length validation two
        if (inputPostalCode.value.length > 0 && (inputPostalCode.value.length < 4 || inputPostalCode.value.length > 5)) {
            inputInvalid(inputPostalCode, inputPostalCode.nextElementSibling, errorAlertText.postal.length);
            console.log('length validation 1');
        } else {
            //* Type validation
            for (i = 0; i < inputPostalCode.value.length; i++) {
                if (regex.indexOf(inputPostalCode.value[i]) == -1) {
                    inputInvalid(inputPostalCode, inputPostalCode.nextElementSibling, errorAlertText.postal.type);
                    console.log('type validation');
                }
            }
        }
        //* Length validation
        lengthValid(inputPostalCode);

    }
    //! Email Valdiation
    inputEmail.onblur = function () {
        //* Spaces between validation
        spacesValid(inputEmail);
        //* Type validation
        if (!emailExpression.test(inputEmail.value)) {
            inputInvalid(inputEmail, inputEmail.nextElementSibling, errorAlertText.email.type);
        }
        //* Length validation
        lengthValid(inputEmail);
    }
    inputEmailConfirm.onblur = function () {
        if (inputEmailConfirm.value != inputEmail.value) {
            inputInvalid(inputEmailConfirm, inputEmailConfirm.nextElementSibling, errorAlertText.general.repeat);
        }
        //* Length validation
        lengthValid(inputEmailConfirm);
    }
    inputPassword.onblur = function () {
        var regex = alfanumericRegex;
        //* Spaces between validation
        spacesValid(inputPassword)
        if (inputPassword.value.length < 8 || inputPassword.value.length > 25) {
            inputInvalid(inputPassword, inputPassword.nextElementSibling, errorAlertText.password.length);
        } else {
            //* Type Validation
            for (i = 0; i < inputPassword.value.length; i++) {
                if (regex.indexOf(inputPassword.value[i]) == -1) {
                    inputInvalid(inputPassword, inputPassword.nextElementSibling, errorAlertText.password.type);
                }
            }
        }
        //* Length validation
        lengthValid(inputPassword);
    }
    inputPasswordConfirm.onblur = function () {
        if (inputPasswordConfirm.value != inputPassword.value) {
            inputInvalid(inputPasswordConfirm, inputPasswordConfirm.nextElementSibling, errorAlertText.general.repeat);
        }
        //* Length validation
        lengthValid(inputPasswordConfirm);
    }

    function alertResultsOnCreateClick() {
        var finalMessageAlert = messageToAddInputsValues;
        loginInputElements.forEach(function verifyInputs(element) {
            //* Empy validation & apply invalid condition
            if (element.value.length == 0) {
                inputInvalid(element, element.nextElementSibling, errorAlertText.general.required);
            }
            //* Type of message validation
            if (element.classList.contains('invalid-input')) {
                finalMessageAlert = finalMessageAlert.concat(
                    element.name,
                    '\t',
                    element.value.toString(),
                    '\t',
                    ' Invalid Input',
                    '\n'
                );
            } else {
                finalMessageAlert = finalMessageAlert.concat(element.name, '\t', element.value.toString(), '\n');
            }

        });
        alert(finalMessageAlert);
    }
    loginBtn.addEventListener('click', alertResultsOnCreateClick);
}