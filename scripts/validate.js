function showError(input, errorMessage) {
    input.classList.add('popup__input_type_error')
    const formError = document.querySelector(`.${input.id}-error`); 
    formError.textContent = errorMessage;
    profileButton.disabled = true;
}

function hideError(input) {
    const formError = document.querySelector(`.${input.id}-error`); 
    input.classList.remove('popup__input_type_error')
    formError.textContent = '';
}

function checkInputValidity(input) {
    if (!input.validity.valid) {
        showError(input, input.validationMessage);
    }
    else {
        hideError(input);
    }
};

function hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
  });
  }

function checkButton(button, inputList) {
    if (hasInvalidInput(inputList)) {
        button.disabled = true;
        button.classList.add('popup__button_inactive')
    }
    else {
        button.removeAttribute('disabled');
        button.classList.remove('popup__button_inactive')
    }
}

function enableValidation(config) {
    const inputPhotoElement = document.getElementById(config.inputPhotoElement);
    const inputLinkElement = document.getElementById(config.inputLinkElement);
    const formElementProfile = document.getElementById(config.formElementProfile);
    inputPhotoElement.addEventListener('input', function() {
        const photoButton = document.getElementById(config.photoButton);
        const inputPhotoList = Array.from(document.forms.photoInput);
        checkButton(photoButton, inputPhotoList);
        checkInputValidity(inputPhotoElement);
    });
    inputLinkElement.addEventListener('input', function() {
        const photoButton = document.getElementById(config.photoButton);
        const inputPhotoList = Array.from(document.forms.photoInput);
        checkButton(photoButton, inputPhotoList);
        checkInputValidity(inputLinkElement);
    })
    formElementProfile.addEventListener('input', function() {
        const profileButton = document.getElementById(config.profileButton);
        const inputProfileList = Array.from(document.forms.profileInput);
        const inputNameElement = document.getElementById(config.inputNameElement);
        const inputDescriptionElement = document.getElementById(config.inputDescriptionElement);
        checkButton(profileButton, inputProfileList);
        checkInputValidity(inputNameElement);
        checkInputValidity(inputDescriptionElement);
    });
};

enableValidation({
    inputPhotoElement: 'photoName',
    photoButton: 'photoButton',
    inputLinkElement: 'photoLink',
    profileButton: 'profileButton',
    inputNameElement: 'name',
    inputDescriptionElement: 'description',
    formElementProfile: 'popupInf'
});

