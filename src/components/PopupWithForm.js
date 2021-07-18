import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
    constructor(popupSelector, {submit}) {
        super(popupSelector);
        this._submit = submit;
        this._inputs = Array.from(this._popupSelector.querySelectorAll('.popup__input'));
    };

    _getInputValues() {
        this.inputValues = {};
        this._inputs.forEach((input) => {
            this.inputValues[input.name] = input.value;
        })
        return this.inputValues;
    };

    setEventListeners() {
        this._submitForm = this._popupSelector.querySelector('.popup__form');
        this._submitForm.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._getInputValues();
            this._submit();
            super.close();
        });
        super.setEventListeners();
    };
}