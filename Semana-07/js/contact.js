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

    /**
     *? Modal Elements & Functions
     */
    var modal = document.querySelector('#modal'),
        aceptBtn = document.querySelector('#modal-acept-btn'),
        cancelBtn = document.querySelector('#modal-cancel-btn'),
        crossBtn = document.querySelector('#cross-btn'),
        listContent = document.querySelector('#ul-final-msg'),
        modalTitle = document.querySelector('#modal-title');

    var closeBtns = [aceptBtn, cancelBtn, crossBtn];

    function openModal(title, message) {
        modalTitle.innerText = title;
        if (!modal.classList.contains('active')) {
            modal.classList.add('active');
        }
        if (typeof message == 'string') {
            var newLi = document.createElement('li');
            newLi.innerText = message;
            listContent.appendChild(newLi);
        } else {
            message.forEach(function (element) {
                var newLi = document.createElement('li');
                newLi.innerText = element.msg;
                listContent.appendChild(newLi);
            });
        }
    }

    function closeModal() {
        modal.classList.remove('active');
        listContent.innerHTML = '';
        modalTitle.innerText = '';
    }
    closeBtns.forEach(function (element) {
        element.addEventListener('click', closeModal);
    });

    document.addEventListener('keydown', function (e) {
        if (modal.classList.contains('active') && (e.code == 'Escape' || e.code == 'Esc')) {
            closeModal();
        }
        if (modal.classList.contains('active') && e.code == 'Enter') {
            closeModal();
            e.preventDefault();
        }
    });

    function focusInput(input) {
        input.classList.remove('invalid-input');
        if (input.nextElementSibling != null) {
            var errorP = input.nextElementSibling;
            errorP.parentNode.removeChild(errorP);
            console.log(errorP);
        }
    }

    function inputInvalid(input, alertMessage) {
        input.classList.add('invalid-input');
        if (input.nextElementSibling != null) {
            input.nextElementSibling.innerHTML = alertMessage;
        } else {
            var errorP = document.createElement('p');
            errorP.classList.add('invalid-message', 'active');
            errorP.innerHTML = alertMessage;
            input.insertAdjacentElement('afterend', errorP);
        }
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
            lengthValid(element);
        }
        element.onfocus = function () {
            focusInput(element);
        }
    });

    sendBtn.addEventListener('click', function (e) {
        e.preventDefault();
        var finalMessageAlert = [];
        formElements.forEach(function (element) {
            lengthValid(element);
            if (element.classList.contains('invalid-input')) {
                finalMessageAlert.push({
                    msg: element.name + ': ' + element.value.toString() + ' is an invalid Input'
                });
            }
        });

        if(finalMessageAlert.length == 0){
            openModal('Request send successfully !!', 'We will contact you soon!')
        } else{
            openModal('Something in your request seems to be wrong:',finalMessageAlert);
        }
    });
}