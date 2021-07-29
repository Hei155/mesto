export class Card {
  
    constructor(name, link , cardSelector, {handleCardClick, handleDeleteButtonClick, handleSetLike, handleRemoveLike}) {
      this._name = name;
      this._link = link;
      this._cardSelector = cardSelector;
      this._handleCardClick = handleCardClick;
      this._handleDeleteButtonClick = handleDeleteButtonClick;
      this._handleSetLike = handleSetLike;
      this._handleRemoveLike = handleRemoveLike;
    }

    _getTemplate() {
      this._htmlElement = document.querySelector(this._cardSelector).content.cloneNode(true);
    }

    getCardElement(cardInfo, userInfo) {
      this._getTemplate();
      this._htmlElement.querySelector('.card__image').setAttribute('src', this._link);
      this._htmlElement.querySelector('.card__image').setAttribute('alt', this._name);
      this._htmlElement.querySelector('.card__text').innerText = this._name;
      this._checkActiveLikes(cardInfo, userInfo);
      this._checkNumberOfLikes(cardInfo);
      this._deletePic = this._htmlElement.querySelector('.card__delete-button');
      if (cardInfo.owner._id === userInfo._id) {
        this._deletePic.classList.add('card__delete-button_visible');
      } 
      this._setListeners();
      return this._htmlElement;
    }

    _checkActiveLikes(cardInfo, userInfo) {
      this._profileName = document.querySelector('.menu__name');
      this.cardButtonLike = this._htmlElement.querySelector('.card__button-like');
      if (cardInfo.likes.length >= 1) {
        cardInfo.likes.forEach((like) => {
          if(like._id === userInfo._id) {
            this.cardButtonLike.classList.remove('card__button-like_is-active');
          }
        })
      }
    };

    _checkNumberOfLikes(cardInfo) {
      this.likeNumber = this._htmlElement.querySelector('.card__likes-number');
      if (cardInfo.likes) {
        this.likeNumber.textContent = cardInfo.likes.length;
      }
      else {
        this.likeNumber = cardInfo.likes.length;
      };
    };

    _handleLikeCard() {
      if (this.cardButtonLike.classList.contains('card__button-like_is-active')) {
        this._handleSetLike();
      }
      else if (!this.cardButtonLike.classList.contains('card__button-like_is-active')) {
        this._handleRemoveLike();
      }
      }
      
    deleteCard() {
        this._card.remove()
      };

    _setListeners() { 
        this.cardButtonLike = this._htmlElement.querySelector('.card__button-like');
        this._deletePic = this._htmlElement.querySelector('.card__delete-button');
        this._card = this._htmlElement.querySelector('.grid__card');
        this._deletePic.addEventListener('click', () => {
          this._handleDeleteButtonClick();
        });
        this.cardButtonLike.addEventListener('click', () => {
          this._handleLikeCard();
        });
        this._htmlElement.querySelector('.card__image').addEventListener('click', () => {
          this._handleCardClick();
        });
      };
  };


