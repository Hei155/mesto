    import { Popup } from "./Popup.js";
    
    export class PopupWithImage extends Popup {

        constructor(popupSelector) {
            super(popupSelector);
        }
        
        open(name, link) {
            this._popupLink = this._popupSelector.querySelector('.popup__photo'); 
            this._popupName = this._popupSelector.querySelector('.popup__name'); 
            this._popupLink.setAttribute('src', link);
            this._popupLink.setAttribute('alt', name); 
            this._popupName.textContent = name;
            this._popupSelector.classList.add('popup_opened');
            document.addEventListener('keydown', (evt) => {
                super._handleEscClose(evt);
            })
        }

}