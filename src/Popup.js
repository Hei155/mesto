export class Popup {

    constructor(popupSelector) {
        this._popupSelector = popupSelector;
    }

    open() {
        this._popupSelector.classList.add('popup_opened');
        document.addEventListener('keydown', (evt) => {
            this._handleEscClose(evt);
        })
    };

    close() {
        this._popupSelector.classList.remove('popup_opened');
        document.removeEventListener('keydown', (evt) => {
            this._handleEscClose(evt);
        })
    };

    _handleEscClose(evt) {
        if (evt.key === "Escape") {
            this._popupSelector.classList.remove('popup_opened');
        }
    };

    setEventListeners() {
        this._popupSelector.addEventListener('mousedown', (evt) => {
            if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__image-close')) {
                this.close();
              } 
        });
    };

}