window.onload = function () {
    var formElements = document.querySelectorAll('.form-element');
    landingName = document.querySelector('#form-landing-name'),
        landingEmail = document.querySelector('#form-landing-email'),
        landingSelect = document.querySelector('#form-landing-select'),
        landingMessage = document.querySelector('#form-landing-message'),
        sendBtn = document.querySelector('#form-send-btn');

    //? Expresiones para validar
    var lettersRegex = 'abcdefghijkmnlopqrstuvwxyzABCDEFGHIJKMNLOPQRSTUVWXYZ',
        numbersRegex = '0123456789',
        alfanumericRegex = lettersRegex.concat(numbersRegex),
        emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;

    var finalMessageAlert = '';

    function focusInput(input) {
        input.classList.remove('invalid-input');
    }

    function inputInvalid(input, alertMessage) {
        input.classList.add('invalid-input');
        var errorP = document.createElement('p');
        errorP.classList.add('invalid-message', 'active');
        errorP.innerHTML = alertMessage;
        input.insertAdjacentElement('afterend', errorP);
    }

    function lengthValid(input) {
        if (input.value.length == 0) {
            inputInvalid(input, 'This field is required *');
        }
    }

    formElements.forEach(function (element) {
        element.onblur = function () {
            if (element.id.match('-name')) { //* Name Validations
                //! Length Validation
                if (element.value.length < 3) {
                    inputInvalid(element, 'This field length must be 3 or more *');
                } else {
                    //! Type Validation
                    for (i = 0; i < element.value.length; i++) {
                        if (lettersRegex.indexOf(element.value[i]) == -1) {
                            inputInvalid(element, 'This must to be a valid Name');
                            break
                        }
                    }
                }
            } else if (element.id.match('-email')) { //* Email Validations
                //! Length Validation
                if (element.value.length < 3) {
                    inputInvalid(element, 'This field length must be 3 or more *');
                } else {
                    //! Type Validation
                    if (!emailExpression.test(element.value) || element.value.includes(' ')) {
                        inputInvalid(element, 'This must to be a Valid Email *');
                    }
                }
            } else if (element.id.match('-select')) { //* Select Validations
                //Nothing to say here
            } else if (element.id.match('-message')) { //* Message Validations
                //! Length Validation
                if (element.value.length < 3) {
                    inputInvalid(element, 'This field length must be 3 or more *');
                } else {
                    //! Type Validation
                    for (i = 0; i < element.value.length; i++) {
                        //! The second parameter is for include spaces
                        if (alfanumericRegex.indexOf(element.value[i]) == -1 && element.value[i] != ' ') {
                            inputInvalid(element, 'No special characters allowed');
                            break
                        }
                    }
                }
            }
        }
        element.onfocus = function () {
            focusInput(element);
        }
    });

    sendBtn.addEventListener('click', function (e) {
        e.preventDefault();

        formElements.forEach(function (element) {
            //* Empy validation & apply invalid condition
            lengthValid(element);
            if (element.classList.contains('invalid-input')) {
                //* Type of message validation

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

    });
}