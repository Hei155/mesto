function showError(input, errorMessage, config) {
    input.classList.add(config.inputErrorClass)
    const formError = document.querySelector(`.${input.id}-error`); 
    formError.textContent = errorMessage;
    profileButton.disabled = true;
}

function hideError(input, config) {
    const formError = document.querySelector(`.${input.id}-error`); 
    input.classList.remove(config.inputErrorClass)
    formError.textContent = '';
}

function checkInputValidity(input) {
    if (!input.validity.valid) {
        showError(input, input.validationMessage, config);
    }
    else {
        hideError(input, config);
    }
};

function hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
  });
  }

function checkButton(button, inputList, inactiveButtonClass) {
    if (hasInvalidInput(inputList)) {
        button.disabled = true;
        button.classList.add(inactiveButtonClass)
    }
    else {
        button.removeAttribute('disabled');
        button.classList.remove(inactiveButtonClass)
    }
}

function enableValidation(config) {
    const  getFormList = Array.from(document.querySelectorAll(config.formSelector));
    getFormList.forEach((form) => {
        form.addEventListener('input', function() {
            const submitButtonSelector = form.querySelector(config.submitButtonSelector);
            const getInputList = Array.from(form.querySelectorAll(config.inputSelector));
            getInputList.forEach((input) => {
                checkInputValidity(input);
            })
            checkButton(submitButtonSelector, getInputList, config.inactiveButtonClass);
        })
    });
};

const config = {
    formSelector: '.popup__info',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_inactive',
    inputErrorClass: 'popup__input_type_error',
};

enableValidation(config);

