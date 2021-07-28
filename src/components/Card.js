export class Card {
  
    constructor(name, link , cardSelector, {handleCardClick}, {handleDeleteButtonClick}, {handleSetLike}, {handleRemoveLike}) {
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

    getCardElement(cardInfo) {
      this._getTemplate();
      this._htmlElement.querySelector('.card__image').setAttribute('src', this._link);
      this._htmlElement.querySelector('.card__image').setAttribute('alt', this._name);
      this._htmlElement.querySelector('.card__text').innerText = this._name;
      this._checkActiveLikes(cardInfo);
      this._checkNumberOfLikes(cardInfo);
      this._deletePic = this._htmlElement.querySelector('.card__delete-button');
      if (cardInfo.owner._id === "5fdc502ac2a9ba8eb226cdcd") {
        this._deletePic.classList.add('card__delete-button_visible');
      } 
      this._setListeners();
      return this._htmlElement;
    }

    _checkActiveLikes(cardInfo) {
      this._profileName = document.querySelector('.menu__name');
      this._cardButtonLike = this._htmlElement.querySelector('.card__button-like');
      if (cardInfo.likes.length > 1) {
        cardInfo.likes.forEach((like) => {
          if(!like.name.indexOf(this._profileName.textContent)) {
            this._cardButtonLike.classList.remove('card__button-like_is-active');
          }
        })
      }
      else if (cardInfo.likes.length === 1) {
        if (!cardInfo.likes[0].name.indexOf(this._profileName.textContent)) {
          this._cardButtonLike.classList.remove('card__button-like_is-active');
        }
      };
    };

    _checkNumberOfLikes(cardInfo) {
      this._likeNumber = this._htmlElement.querySelector('.card__likes-number');
      if (cardInfo.likes) {
        this._likeNumber.textContent = cardInfo.likes.length;
      }
      else {
        this._likeNumber.textContent = '0';
      };
    };

    _handleLikeCard() {
      this._cardButtonLike.classList.toggle('card__button-like_is-active');
      if (!this._cardButtonLike.classList.contains('card__button-like_is-active')) {
        this._handleSetLike();
        this._likeNumber.textContent = Number(this._likeNumber.textContent) + 1;
      }
      else if (this._cardButtonLike.classList.contains('card__button-like_is-active')) {
        this._handleRemoveLike();
        this._likeNumber.textContent = Number(this._likeNumber.textContent) - 1;
      }
      }
      
    deleteCard() {
        this._card.remove()
      };

    _setListeners() { 
        this._cardButtonLike = this._htmlElement.querySelector('.card__button-like');
        this._deletePic = this._htmlElement.querySelector('.card__delete-button');
        this._card = this._htmlElement.querySelector('.grid__card');
        this._deletePic.addEventListener('click', () => {
          this._handleDeleteButtonClick();
        });
        this._cardButtonLike.addEventListener('click', () => {
          this._handleLikeCard();
        });
        this._htmlElement.querySelector('.card__image').addEventListener('click', () => {
          this._handleCardClick();
        });
      };
  };


