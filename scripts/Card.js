import { openPopup as _openPopup} from "./index.js";

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

    _getCardElement() {
      this._element = this._getTemplate();
      this._element.querySelector('.card__image').setAttribute('src', this._link);
      this._element.querySelector('.card__image').setAttribute('alt', this._name);
      this._popup = document.getElementById('imagePopup');
      this._element.querySelector('.card__text').innerText = this._name; 
      return this._element;
    }

    _setLikeListener() {
      this._cardButton.classList.toggle('card__button_is-active');
      }
      
    _deleteCard() {
        this._card = document.querySelector('.grid__card');
        this._card.remove()
      };
     
    _openPopup(popup) {
        popup.classList.add('popup_opened');
      };
      
    _closePopup() {
        this._popup = document.getElementById('imagePopup');
        this._popup.classList.remove('popup_opened');
      };

    _setPopup() {
        this._popupLink = document.querySelector('.popup__photo');
        this._popupName = document.querySelector('.popup__name');
        this._popupLink.setAttribute('src', this._link);
        this._popupLink.setAttribute('alt', this._name);
        this._popupName.innerText = this._name;
    };

    _setListeners() {
        this._popup = document.getElementById('imagePopup');
        this._cardButton = document.querySelector('.card__button');
        this._cardImage = document.querySelector('.card__image');
        this._deletePic = document.querySelector('.card__delete');
        this._deleteButton = document.querySelector('.popup__image-close');
        this._cardButton.addEventListener('click', () => {
          this._setLikeListener();
        })
        this._deletePic.addEventListener('click', () => {
          this._deleteCard();
        })
        this._cardImage.addEventListener('click', () => {
          this._openPopup(this._popup);
        });
        this._deleteButton.addEventListener('click', this._closePopup);
        this._popup.addEventListener('mousedown', (evt) => {
          if (evt.target.classList[0] === "popup") {
            this._closePopup(this._popup);
          };  
        });
      };

    renderCard() {
        this._block = document.querySelector('.grid');
        this._block.prepend(this._getCardElement());
        this._setPopup();
        this._setListeners();
    }
  };


