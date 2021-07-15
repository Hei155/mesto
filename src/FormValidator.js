export class FormValidator {
    constructor(data) {
        this._data = data;
    };

    _showError(input) {
        input.classList.add(this._data.inputErrorClass)
        this._formError = document.querySelector(`.${input.id}-error`); 
        this._formError.textContent = input.validationMessage;
        profileButton.disabled = true;
    };
    
    _hideError(input) {
        this._formError = document.querySelector(`.${input.id}-error`);
        input.classList.remove(this._data.inputErrorClass)
        this._formError.textContent = '';
    };

    _checkInputValidity(inputElement) {              
        if (!inputElement.validity.valid) {
            this._showError(inputElement);
        }
        else {
            this._hideError(inputElement);
        }
    };

    _hasInvalidInput(formElement) {
        this._getInputList = Array.from(formElement.querySelectorAll(this._data.inputSelector));
        return this._getInputList.some((inputElement) => {
          return !inputElement.validity.valid;
      })
    };

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
    };

    enableValidation(Form) {
        this._getInputList = Array.from(Form.querySelectorAll(this._data.inputSelector));
        this._getInputList.forEach((input) => {
            input.addEventListener('input', () => {
                this._checkInputValidity(input);
                this._checkButton(Form);
            })
        })
    };
}


