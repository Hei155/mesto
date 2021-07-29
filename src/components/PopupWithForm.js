import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
    constructor(popup, {submit}) {
        super(popup);
        this._submit = submit;
        this._inputs = Array.from(this._popup.querySelectorAll('.popup__input'));
    };

    _getInputValues() {
        this.inputValues = {};
        this._inputs.forEach((input) => {
            this.inputValues[input.name] = input.value;
        })
        return this.inputValues;
    };

    setEventListeners() {
        this._submitForm = this._popup.querySelector('.popup__form');
        this._submitForm.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._getInputValues();
            this._submit();
        });
        super.setEventListeners();
    };
}