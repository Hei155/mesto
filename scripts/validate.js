function showError(input, errorMessage, config) {
    input.classList.add(config.inputError)
    const formError = document.querySelector(`.${input.id}-error`); 
    formError.textContent = errorMessage;
    profileButton.disabled = true;
}

function hideError(input, config) {
    const formError = document.querySelector(`.${input.id}-error`); 
    input.classList.remove(config.inputError)
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
    const formFirstSelector = document.querySelector(config.formFirstSelector);
    const formSecondSelector = document.querySelector(config.formSecondSelector)
    const inputFirstPhotoSelector = formSecondSelector.querySelector(config.inputFirstPhotoSelector);
    const inputSecondPhotoSelector = formSecondSelector.querySelector(config.inputSecondPhotoSelector);
    inputFirstPhotoSelector.addEventListener('input', function() {
        const submitFirstButtonSelector = formSecondSelector.querySelector(config.submitFirstButtonSelector);
        const inputPhotoList = Array.from(formSecondSelector.querySelectorAll('.popup__input'));
        checkButton(submitFirstButtonSelector, inputPhotoList, config.inactiveButtonClass);
        checkInputValidity(inputFirstPhotoSelector);
    });
    inputSecondPhotoSelector.addEventListener('input', function() {
        const submitFirstButtonSelector = formSecondSelector.querySelector(config.submitFirstButtonSelector);
        const inputPhotoList = Array.from(formSecondSelector.querySelectorAll('.popup__input'));
        checkButton(submitFirstButtonSelector, inputPhotoList, config.inactiveButtonClass);
        checkInputValidity(inputSecondPhotoSelector);
    })
    formFirstSelector.addEventListener('input', function() {
        const submitSecondButtonSelector = formFirstSelector.querySelector(config.submitSecondButtonSelector);
        const inputProfileList = Array.from(formFirstSelector.querySelectorAll('.popup__input'));
        const inputFirstProfileSelector = formFirstSelector.querySelector(config.inputFirstProfileSelector);
        const inputSecondProfileSelector = formFirstSelector.querySelector(config.inputSecondProfileSelector);
        checkButton(submitSecondButtonSelector, inputProfileList, config.inactiveButtonClass);
        checkInputValidity(inputFirstProfileSelector);
        checkInputValidity(inputSecondProfileSelector)
    });
};

const config = {
    formFirstSelector: '#popupInf',
    formSecondSelector: '#cardInf',
    inputFirstProfileSelector: '#name',
    inputSecondProfileSelector: '#description',
    submitFirstButtonSelector: '#photoButton',
    submitSecondButtonSelector: '#profileButton',
    inactiveButtonClass: 'popup__button_inactive',
    inputErrorClass: '.popup__input_type_error',
    inputFirstPhotoSelector: '#photo-name',
    inputSecondPhotoSelector: '#photo-link',
}

enableValidation(config);

