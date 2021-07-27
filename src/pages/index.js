import './index.css';

import { Api } from '../components/api';
import { PopupWithButton  } from '../components/PopupWithButton';
import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import { Section } from "../components/Section.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { UserInfo } from "../components/UserInfo.js";

const imagePopup = document.getElementById('imagePopup');
const submitDeletePopup = document.getElementById('submitDelete');
const editAvatarPopup = document.getElementById('editPicture');
const imageEditButton = document.querySelector('.menu__image-edit-button');
const imageEditor = document.querySelector('#imageEditor');
const profileEditButton = document.querySelector('.menu__profile-edit-button');
const profileName = document.querySelector('.menu__name');
const profileDescription = document.querySelector('.menu__description');
const inputName = document.querySelector('#name');
const inputDescription = document.querySelector('#description');
const inputLink = document.querySelector('#photo');
const inputPhotoName = document.querySelector('#link');
const profileEditor = document.querySelector('#profileEditor');
const gridContainer = document.querySelector('.grid');
const profileForm = document.querySelector('#popupInformation')
const imageForm = document.querySelector('#cardInformation');
const avatarImageForm = document.querySelector('#avatarInformation');
const menuPicture = document.querySelector('.menu__pictures')
const inputAvatarLink = document.querySelector('#profile');
const avatarImage = document.querySelector('.menu__avatar');
const profileButton = document.querySelector('#profileButton');
const photoButton = document.querySelector('#photoButton');
const profilePictureButton = document.querySelector('#profilePictureButton');

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-26',
  headers: {
    authorization: 'eab1c7c5-9c80-49c5-90ac-896bf5cee6a9',
    'Content-Type': 'application/json'
  }
});

api.getUserData()
  .then((res) => {
    const newUserInfo = new UserInfo(profileName, profileDescription);
    newUserInfo.setUserInfo(res.name, res.about);
    avatarImage.src = res.avatar;
  })
  .catch((err) => {
    console.log(err);
  })

api.getInitialCards()
  .then((res) => {
    console.log(res)
    const cardList = new Section({ data: res, renderer: (card) => {
      setNewCard(card, '.card-template');
    }}, '.grid');
  cardList.rendererItems();
  })
  .catch((err) => {
    console.log(err);
  })

const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_inactive',
  inputErrorClass: 'popup__input_type_error',
};

function renderLoading(isLoading, button) {
  if (isLoading) {
    button.textContent = 'Сохранение...'
  }
  else if (!isLoading && (button.id === 'profileButton' || button.id === 'profilePictureButton')) {
    button.textContent = 'Сохранить'
  }
  else if (!isLoading && button.id === 'photoButton')
  button.textContent = 'Создать'
}

const popupImage  = new PopupWithImage(imagePopup);

function checkActiveLikes(cardElement, cardInfo) {
  const profileName = document.querySelector('.menu__name');
  const cardLikeButton = cardElement.querySelector('.card__button-like');
  if (cardInfo.likes.length > 1) {
    cardInfo.likes.forEach((like) => {
      if(!like.name.indexOf(profileName.textContent)) {
        cardLikeButton.classList.remove('card__button-like_is-active');
      }
    })
  }
  else if (cardInfo.likes.length === 1) {
    if (!cardInfo.likes[0].name.indexOf(profileName.textContent)) {
      cardLikeButton.classList.remove('card__button-like_is-active');
    }
  };
};

function checkNumberOfLikes(cardElement, cardInfo) {
  const likeNumber = cardElement.querySelector('.card__likes-number');
  if (cardInfo.likes) {
    likeNumber.textContent = cardInfo.likes.length;
  }
  else {
    likeNumber.textContent = '0';
  };
};

function setNewCard(cardInfo, cardSelector) {
  const card = new Card(cardInfo.name, cardInfo.link, cardSelector, {handleCardClick: () => {
    popupImage.open(cardInfo.name, cardInfo.link);
    popupImage.setEventListeners();
  }},
  {handleDeleteButtonClick: () => {
    const popupWithButton = new PopupWithButton(submitDeletePopup, {submit: () => {
      card.deleteCard();
      api.deleteCard(cardInfo._id)
      popupWithButton.close();
    }});
    popupWithButton.open();
    popupWithButton.setEventListeners();
  }});
  const cardElement = card.getCardElement();
  const likeNumber = cardElement.querySelector('.card__likes-number');
  const cardLikeButton = cardElement.querySelector('.card__button-like');
  const cardDeleteButton = cardElement.querySelector('.card__delete-button');
  if (cardInfo.owner._id === "5fdc502ac2a9ba8eb226cdcd") {
    cardDeleteButton.classList.add('card__delete-button_visible');
  }
  checkActiveLikes(cardElement, cardInfo);
  checkNumberOfLikes(cardElement, cardInfo);
  cardLikeButton.addEventListener('click', () => {
    if (!cardLikeButton.classList.contains('card__button-like_is-active')) {
      api.setLike(cardInfo._id)
        .catch((err) => {
          console.log(err);
        });
      likeNumber.textContent = Number(likeNumber.textContent) + 1;
    }
    else if (cardLikeButton.classList.contains('card__button-like_is-active')) {
      api.deleteLike(cardInfo._id)
        .catch((err) => {
          console.log(err);
        });
      likeNumber.textContent = Number(likeNumber.textContent) - 1;
    }
  });
  gridContainer.append(cardElement);
};

const userInfo = new UserInfo(profileName, profileDescription);

const profilePopup = new PopupWithForm(profileEditor, {submit: () => {
  renderLoading(true, profileButton);
  userInfo.setUserInfo(inputName.value,  inputDescription.value);
  api.setUserInfo(inputName.value, inputDescription.value)
    .catch(() => {
      console.log(console.log(err))
    })
    .finally(() => {
      renderLoading(false, profileButton);
    })
}});

profilePopup.setEventListeners();

profileEditButton.addEventListener('click', function () {
  inputName.value = userInfo.getUserInfo().Name;
  inputDescription.value = userInfo.getUserInfo().Description;
  profilePopup.open();
});

const newPicturePopup = new PopupWithForm(editAvatarPopup, {submit: () => {
  renderLoading(true, profilePictureButton)
  avatarImage.setAttribute('src', inputAvatarLink.value);
  api.setNewAvatar(inputAvatarLink.value)
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      renderLoading(false, profilePictureButton)
    })
}})

menuPicture.addEventListener('click', () => {
  newPicturePopup.open();
  newPicturePopup.setEventListeners();
})

const avatarImageValidation = new FormValidator(config, avatarImageForm);
avatarImageValidation.enableValidation();
const imageFormValidation = new FormValidator(config, imageForm);
imageFormValidation.enableValidation();
const profileFormValidation = new FormValidator(config, profileForm);
profileFormValidation.enableValidation();

const cardPopup = new PopupWithForm(imageEditor, {submit: () => {
  renderLoading(true, photoButton)
  api.setCard(cardPopup.inputValues.name, cardPopup.inputValues.description)
    .then(() => {
      api.getInitialCards()
        .then((res) => {
          const card = res[0];
          setNewCard(card, '.card-template');
        })
        .finally(() => {
          renderLoading(false, photoButton);
        })
    });
  inputLink.value = '';
  inputPhotoName.value = '';
  imageFormValidation.disableSubmitButton();
}});

cardPopup.setEventListeners();

imageEditButton.addEventListener('click', function () {
  cardPopup.open();
})



