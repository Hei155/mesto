import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
    constructor(popupSelector, {submit}) {
        super(popupSelector);
        this._submit = submit;
    };

    _getInputValues() {
        this.inputValues = {};
        this._inputs = Array.from(this._popupSelector.querySelectorAll('.popup__input'));
        this._inputs.forEach((input) => {
            this.inputValues[input.name] = input.value;
        })
    };

    setEventListeners() {
        this._inputs = Array.from(this._popupSelector.querySelectorAll('.popup__input'));
        this._submitForm = this._popupSelector.querySelector('.popup__info');
        this._popupSelector.addEventListener('mousedown', (evt) => {
            if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__container-close')) {
                this.close(); 
              } 
        });
        this._submitForm.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._getInputValues();
            this._submit();
            this.close();
        });
    };

    close() {
        this._inputsSelectors = this._popupSelector.querySelectorAll('.popup__input');
        this._popupSelector.classList.remove('popup_opened');
    }

}