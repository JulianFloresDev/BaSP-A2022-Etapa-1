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

    loginInputElements.forEach(function (input) {
        input.onfocus = function (e) {
            inputTarget = e.currentTarget;
            focusInput(inputTarget, inputTarget.nextElementSibling);
        };
    });
    //! Name Validation
    inputName.onblur = function () {
        var regex = lettersRegex;
        // spacesValid(inputName);
        if ((inputName.value.length > 0 && inputName.value.length < 4) || inputName.value.length > 20) {
            inputInvalid(inputName, inputName.nextElementSibling, errorAlertText.name.length);
        } else {
            for (i = 0; i < inputName.value.length; i++) {
                if (regex.indexOf(inputName.value[i]) == -1 && inputName.value[i] != ' ') {
                    inputInvalid(inputName, inputName.nextElementSibling, errorAlertText.name.type);
                    break
                }
            }
        }
        lengthValid(inputName);
    }
    //! Last Name Validation
    inputLastName.onblur = function () {
        var regex = lettersRegex;
        if ((inputLastName.value.length > 0 && inputLastName.value.length < 4) || inputLastName.value.length > 20) {
            inputInvalid(inputLastName, inputLastName.nextElementSibling, errorAlertText.name.length);
        } else {
            for (i = 0; i < inputLastName.value.length; i++) {
                if (regex.indexOf(inputLastName.value[i]) == -1 && inputLastName.value[i] != ' ') {
                    inputInvalid(inputLastName, inputLastName.nextElementSibling, errorAlertText.name.type);
                    break
                }
            }
        }
        lengthValid(inputLastName);
    }
    //! DNI Validation
    inputDNI.onblur = function () {
        var regex = numbersRegex;
        if (inputDNI.value.length > 0 && inputDNI.value.length <= 7) {
            inputInvalid(inputDNI, inputDNI.nextElementSibling, errorAlertText.DNI.length);
        } else {
            for (i = 0; i < inputDNI.value.length; i++) {
                if (regex.indexOf(inputDNI.value[i]) == -1) {
                    inputInvalid(inputDNI, inputDNI.nextElementSibling, errorAlertText.DNI.type);
                    break
                }
            }
        }
        lengthValid(inputDNI);
    }
    //! Birthdate Validation
    inputBirthdate.onblur = function () {
        var yearInput = inputBirthdate.value.slice(0, 4);
        var actualDate = new Date();
        var actualYear = actualDate.getFullYear();
        if (actualYear - yearInput < 18) {
            inputInvalid(inputBirthdate, inputBirthdate.nextElementSibling, errorAlertText.birthdate.justForFun)
        }
        lengthValid(inputBirthdate);
    }
    //! Phone Validation
    inputPhone.onblur = function () {
        var regex = numbersRegex;
        if ((inputPhone.value.length > 0 && inputPhone.value.length < 10) || inputPhone.value.length > 10) {
            inputInvalid(inputPhone, inputPhone.nextElementSibling, errorAlertText.phone.length);
        } else {
            for (i = 0; i < inputPhone.value.length; i++) {
                if (regex.indexOf(inputPhone.value[i]) == -1) {
                    inputInvalid(inputPhone, inputPhone.nextElementSibling, errorAlertText.phone.type);
                    break
                }
            }
        }
        lengthValid(inputPhone);
    }
    //! Address Validation
    inputAddress.onblur = function () {
        var regex = alfanumericRegex;
        var lettersCount = 0;
        if (!inputAddress.value.includes(' ')) {
            inputInvalid(inputAddress, inputAddress.nextElementSibling, errorAlertText.address.type);
        } else {
            if (inputAddress.value.length > 0 && inputAddress.value.length < 4) {
                inputInvalid(inputAddress, inputAddress.nextElementSibling, errorAlertText.address.type);
            } else {
                for (i = 0; i < inputAddress.value.length; i++) {
                    if (regex.indexOf(inputAddress.value[i]) == -1 && inputAddress.value[i] != ' ') {
                        inputInvalid(inputAddress, inputAddress.nextElementSibling, errorAlertText.address.type);
                        break
                    }
                    if (lettersRegex.indexOf(inputAddress.value[i]) == -1) {
                        lettersCount++;
                    }
                }
                if (lettersCount === inputAddress.value.length) {
                    inputInvalid(inputAddress, inputAddress.nextElementSibling, errorAlertText.address.type);
                }
            }
        }
        lengthValid(inputAddress);
    }
    //! City Validation
    inputLocation.onblur = function () {
        var regex = alfanumericRegex;
        var lettersCount = 0;
        if (inputLocation.value.length > 0 && inputLocation.value.length <= 3) {
            inputInvalid(inputLocation, inputLocation.nextElementSibling, errorAlertText.location.length);
        } else {
            for (i = 0; i < inputLocation.value.length; i++) {
                if (regex.indexOf(inputLocation.value[i]) == -1 && inputLocation.value[i] != ' ') {
                    inputInvalid(inputLocation, inputLocation.nextElementSibling, errorAlertText.location.type);
                    break
                }
                if (lettersRegex.indexOf(inputLocation.value[i]) == -1) {
                    lettersCount++;
                }
            }
            if (lettersCount === inputLocation.value.length) {
                inputInvalid(inputLocation, inputLocation.nextElementSibling, errorAlertText.location.type);
            }

        }
        lengthValid(inputLocation);
    }
    //! Postal Code Valdiation
    inputPostalCode.onblur = function () {
        var regex = numbersRegex;
        if (inputPostalCode.value.length > 0 && (inputPostalCode.value.length < 4 || inputPostalCode.value.length > 5)) {
            inputInvalid(inputPostalCode, inputPostalCode.nextElementSibling, errorAlertText.postal.length);
        } else {
            for (i = 0; i < inputPostalCode.value.length; i++) {
                if (regex.indexOf(inputPostalCode.value[i]) == -1) {
                    inputInvalid(inputPostalCode, inputPostalCode.nextElementSibling, errorAlertText.postal.type);
                    break
                }
            }
        }
        lengthValid(inputPostalCode);

    }
    //! Email Valdiation
    inputEmail.onblur = function () {
        spacesValid(inputEmail);
        if (!emailExpression.test(inputEmail.value)) {
            inputInvalid(inputEmail, inputEmail.nextElementSibling, errorAlertText.email.type);
        }
        lengthValid(inputEmail);
    }
    inputEmailConfirm.onblur = function () {
        if (inputEmailConfirm.value != inputEmail.value) {
            inputInvalid(inputEmailConfirm, inputEmailConfirm.nextElementSibling, errorAlertText.general.repeat);
        }
        lengthValid(inputEmailConfirm);
    }
    inputPassword.onblur = function () {
        var regex = alfanumericRegex;
        spacesValid(inputPassword)
        if (inputPassword.value.length < 8 || inputPassword.value.length > 25) {
            inputInvalid(inputPassword, inputPassword.nextElementSibling, errorAlertText.password.length);
        } else {
            for (i = 0; i < inputPassword.value.length; i++) {
                if (regex.indexOf(inputPassword.value[i]) == -1) {
                    inputInvalid(inputPassword, inputPassword.nextElementSibling, errorAlertText.password.type);
                    break
                }
            }
        }
        lengthValid(inputPassword);
    }
    inputPasswordConfirm.onblur = function () {
        if (inputPasswordConfirm.value != inputPassword.value) {
            inputInvalid(inputPasswordConfirm, inputPasswordConfirm.nextElementSibling, errorAlertText.general.repeat);
        }
        lengthValid(inputPasswordConfirm);
    }

    function fetchToDataBase(allInputs) {
        var queryParams = '?';
        localStorage.setItem('testing', 'true'); //todo sacar TESTING ONLY
        allInputs.forEach(function (input, index) {
            localStorage.setItem(input.name, input.value); //todo sacar TESTING ONLY
            //? Rename input and replace spaces to '%20'
            var inputWithOutSpaces = input.value.replace(' ', '%20');
            //? Concat each value to queryParams
            if (!input.name.includes('confirm')) {
                if (input.name.match('dob') && index != allInputs.length - 2) {
                    var dateYear = input.value.substr(0, 4);
                    var dateMonth = input.value.substr(5, 2);
                    var dateDay = input.value.substr(8, 2);
                    var correctDateFormat = dateMonth + '/' + dateDay + '/' + dateYear;
                    queryParams += input.name + '=' + correctDateFormat + '&';
                } else if (index != allInputs.length - 2) {
                    queryParams += input.name + '=' + inputWithOutSpaces + '&';
                } else {
                    queryParams = queryParams.concat(input.name, '=', inputWithOutSpaces);
                }
            }

        });
        fetch('https://basp-m2022-api-rest-server.herokuapp.com/signup' + queryParams)
            //todo poner un then() primero
            .then(function (response) {
                if (response.status >= 400) {
                    throw new Error(response);
                } else {
                    return response.json()
                }
            })
            .then(function (resp) {
                localStorage.setItem('id', resp.data.id);
                localStorage.setItem('name', resp.data.name);
                localStorage.setItem('lastName', resp.data.lastName);
                localStorage.setItem('dni', resp.data.dni);
                localStorage.setItem('dob', resp.data.dob);
                localStorage.setItem('phone', resp.data.phone);
                localStorage.setItem('address', resp.data.address);
                localStorage.setItem('city', resp.data.city);
                localStorage.setItem('zip', resp.data.zip);
                localStorage.setItem('email', resp.data.email);
                localStorage.setItem('password', resp.data.password);
                alert(resp.msg);
                localStorage.removeItem('testing');
            })
            .catch(function (error) {
                // console.log(error);
                // alert('Request results on ' + error.statusText + '\nPassword or email invalid.');
            });
    }

    if (localStorage.hasOwnProperty('testing')) { //TODO SACAR TESTING ONLY
        inputName.value = localStorage.getItem('name');
        inputLastName.value = localStorage.getItem('lastName');
        inputDNI.value = localStorage.getItem('dni');
        inputBirthdate.value = localStorage.getItem('dob');
        inputPhone.value = localStorage.getItem('phone');
        inputAddress.value = localStorage.getItem('address');
        inputLocation.value = localStorage.getItem('city');
        inputPostalCode.value = localStorage.getItem('zip');
        inputEmail.value = localStorage.getItem('email');
        inputEmailConfirm.value = localStorage.getItem('email');
        inputPassword.value = localStorage.getItem('password');
        inputPasswordConfirm.value = localStorage.getItem('password');
    }

    function finalVerificationToSendData() {
        var arrOfInputElements = Array.from(loginInputElements);
        if (!arrOfInputElements.some(function (input) {
                return input.classList.contains('invalid-input')
            })) {
            fetchToDataBase(arrOfInputElements);
        } else {
            var errorText = 'There must be a problem in the data you have provided. ' +
                'We recommend that you check the next fields:\n\n';
            arrOfInputElements.forEach(function (element) {
                if (element.classList.contains('invalid-input')) {
                    errorText += element.name + '\t' + element.value;
                }
            });
            alert(errorText);
        }
    }
    loginBtn.addEventListener('click', finalVerificationToSendData);
}