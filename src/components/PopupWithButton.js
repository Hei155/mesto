import { Popup } from "./Popup";

export class PopupWithButton extends Popup {
    constructor(popup, {submit}) {
        super(popup);
        this._submit = submit;
    }

    setEventListeners() {
        this._popupButton = this._popup.querySelector('.popup__button');
        this._popupButton.addEventListener('click', () => {
            this._submit();
        });
        super.setEventListeners();
    }

}