export class FormValidator {
    constructor(data) {
        this._data = data;
    }

    _showError(input) {
        input.classList.add(this._data.inputErrorClass)
        this._formError = document.querySelector(`.${input.id}-error`); 
        this._formError.textContent = input.validationMessage;
        profileButton.disabled = true;
    }
    
    _hideError(input) {
        this._formError = document.querySelector(`.${input.id}-error`);
        input.classList.remove(this._data.inputErrorClass)
        this._formError.textContent = '';
    }

    _checkInputValidity(formElement) {
        this._inputs = Array.from(formElement.querySelectorAll(this._data.inputSelector));
        this._inputs.forEach((input) => {
        if (!input.validity.valid) {
            this._showError(input);
        }
        else {
            this._hideError(input);
        }
    })
    };

    _hasInvalidInput(formElement) {
        this._getInputList = Array.from(formElement.querySelectorAll(this._data.inputSelector));
        return this._getInputList.some((inputElement) => {
          return !inputElement.validity.valid;
      })
    }

    _checkButton(formElement) {
        this._button = formElement.querySelector(this._data.submitButtonSelector);
        if (this._hasInvalidInput(formElement)) {
            this._button.disabled = true;
            this._button.classList.add(this._data.inactiveButtonClass)
        }
        else {
            this._button.removeAttribute('disabled');
            this._button.classList.remove(this._data.inactiveButtonClass)
        }
    }

    enableValidation(Form) {
        Form.addEventListener('input', () => {
            this._checkInputValidity(Form)
            this._checkButton(Form);
    })
    }
}


