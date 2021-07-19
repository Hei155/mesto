

export class Card {
  
    constructor(name, link , cardSelector, {handleCardClick}) {
      this._name = name;
      this._link = link;
      this._cardSelector = cardSelector;
      this._handleCardClick = handleCardClick;
    }

    _getTemplate() {
      this._htmlElement = document.querySelector(this._cardSelector).content.cloneNode(true);
    }

    getCardElement() {
      this._getTemplate();
      this._htmlElement.querySelector('.card__image').setAttribute('src', this._link);
      this._htmlElement.querySelector('.card__image').setAttribute('alt', this._name);
      this._htmlElement.querySelector('.card__text').innerText = this._name;
      this._setListeners();
      return this._htmlElement;
    }

    _handleLikeCard() {
        this._cardButtonLike.classList.toggle('card__button-like_is-active');
      }
      
    _deleteCard() {
        this._card.remove()
      };

    _setListeners() {
        this._popup = document.getElementById('imagePopup'); 
        this._cardButtonLike = this._htmlElement.querySelector('.card__button-like');
        this._deletePic = this._htmlElement.querySelector('.card__delete');
        this._card = this._htmlElement.querySelector('.grid__card')
        this._cardButtonLike.addEventListener('click', () => 
          this._handleLikeCard());
        this._deletePic.addEventListener('click', () => 
          this._deleteCard());
          this._htmlElement.querySelector('.card__image').addEventListener('click', () => {
          this._handleCardClick()
        });
      };
  };


