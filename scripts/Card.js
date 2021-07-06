export class Card {
  
    constructor(name, link , htmlSelector) {
      this._name = name;
      this._link = link;
      this._htmlSelector = htmlSelector;
    }

    _getTemplate() {
      this._htmlElement = document.querySelector(this._htmlSelector).content.cloneNode(true);
      return this._htmlElement;
    }

    getCardElement() {
      this._element = this._getTemplate();
      this._block = document.querySelector('.grid');
      this._element.querySelector('.card__image').setAttribute('src', this._link);
      this._element.querySelector('.card__image').setAttribute('alt', this._name);
      this._element.querySelector('.card__text').innerText = this._name;
      this._setListeners();
      this._setPopup();
      return this._element;
    }

    _setPopup() { 
      this._popupLink = document.querySelector('.popup__photo'); 
      this._popupName = document.querySelector('.popup__name'); 
      this._popupLink.setAttribute('src', this._link); 
      this._popupLink.setAttribute('alt', this._name); 
      this._popupName.innerText = this._name; 
  }; 

    _setLikeListener() {
        this._cardButton.classList.toggle('card__button_is-active');
      }
      
    _deleteCard() {
        this._card.remove()
      };

    _handlePreviewPicture(popup) {
      popup.classList.add('popup_opened');
    };

    _setListeners() {
        this._popup = document.getElementById('imagePopup'); 
        this._cardButton = this._element.querySelector('.card__button');
        this._deletePic = this._element.querySelector('.card__delete');
        this._card = this._element.querySelector('.grid__card')
        this._cardButton.addEventListener('click', () => 
          this._setLikeListener());
        this._deletePic.addEventListener('click', () => 
          this._deleteCard());
        this._element.querySelector('.card__image').addEventListener('click', () => 
          this._handlePreviewPicture(this._popup));
      };
  };


