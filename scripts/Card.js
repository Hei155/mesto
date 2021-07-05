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
      this._block.prepend(this._element);
      this._setListeners();
    }

    _setLikeListener() {
      this._cardButton.classList.toggle('card__button_is-active');
      }
      
    _deleteCard() {
        this._card.remove()
      };

    _setListeners() {
        this._cardButton = document.querySelector('.card__button');
        this._deletePic = document.querySelector('.card__delete');
        this._card = document.querySelector('.grid__card')
        this._cardButton.addEventListener('click', () => 
          this._setLikeListener());
        this._deletePic.addEventListener('click', () => 
          this._deleteCard());
      };
  };


