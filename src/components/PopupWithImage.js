import { Popup } from "./Popup.js";
    
export class PopupWithImage extends Popup {

    constructor(popup) {
        super(popup);
    }
        
    open(name, link) {
        this._popupLink = this._popup.querySelector('.popup__photo'); 
        this._popupName = this._popup.querySelector('.popup__name'); 
        this._popupLink.setAttribute('src', link);
        this._popupLink.setAttribute('alt', name); 
        this._popupName.textContent = name;
        super.open();
    }

}