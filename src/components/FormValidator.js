export class FormValidator {
    constructor(data, form) {
        this._data = data;
        this._form = form;
    };

    _showError(input) {
        input.classList.add(this._data.inputErrorClass)
        const formError = document.querySelector(`.${input.id}-error`); 
        formError.textContent = input.validationMessage;
    };
    
    _hideError(input) {
        const formError = document.querySelector(`.${input.id}-error`);
        input.classList.remove(this._data.inputErrorClass)
        formError.textContent = '';
    };

    _checkInputValidity(inputElement) {              
        if (!inputElement.validity.valid) {
            this._showError(inputElement);
        }
        else {
            this._hideError(inputElement);
        }
    };

    _hasInvalidInput() {
        return this._getInputList.some((inputElement) => {
          return !inputElement.validity.valid;
      })
    };

    _checkButton() {
        if (this._hasInvalidInput()) {
            this._button.disabled = true;
            this._button.classList.add(this._data.inactiveButtonClass)
        }
        else {
            this._button.removeAttribute('disabled');
            this._button.classList.remove(this._data.inactiveButtonClass)
        }
    };

    enableValidation() {
        this._button = this._form.querySelector(this._data.submitButtonSelector);
        this._getInputList = Array.from(this._form.querySelectorAll(this._data.inputSelector));
        this._getInputList.forEach((input) => {
            input.addEventListener('input', () => {
                this._checkInputValidity(input);
                this._checkButton();
            })
        });
    };
}


