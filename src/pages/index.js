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

let newUserInfo = null;
let cardList = null;
let userDataInfo = null;

Promise.all([
  api.getUserData(),
  api.getInitialCards(),
])
  .then(([userData, initialCards]) => {
    userDataInfo = userData;
    newUserInfo = new UserInfo(profileName, profileDescription);
    newUserInfo.setUserInfo(userData.name, userData.about);
    avatarImage.src = userData.avatar;
    cardList = new Section({ data: initialCards, renderer: (card) => {
    setNewCard(card, userData, '.card-template');
    }}, '.grid');
    cardList.rendererItems();
  })
  .catch((err) => {
    console.log(err);
  }); 

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

let popupWithButton = null;

function setNewCard(cardInfo, userInfo, cardSelector)  {
  const card = new Card(cardInfo.name, cardInfo.link, cardSelector, {handleCardClick: () => {
    popupImage.open(cardInfo.name, cardInfo.link);
    popupImage.setEventListeners();
  },
  handleDeleteButtonClick: () => {
    popupWithButton = new PopupWithButton(submitDeletePopup, {submit: () => {
      card.deleteCard();    
      api.deleteCard(cardInfo._id)
      popupWithButton.close();
    }});
    popupWithButton.open();
    popupWithButton.setEventListeners();
  },
  handleSetLike: () => {
    api.setLike(cardInfo._id)
      .then((res) => {
        card.addLike(res);
      })
  },
  handleRemoveLike: () => {
    api.deleteLike(cardInfo._id)
      .then((res) => {
        card.removeLike(res);
      })
  }}
)
  const cardElement = card.getCardElement(cardInfo, userInfo);
  gridContainer.append(cardElement);
};

const userInfo = new UserInfo(profileName, profileDescription);

const profilePopup = new PopupWithForm(profileEditor, {submit: (inputData) => {
  renderLoading(true, profileButton);
  api.setUserInfo(inputData.name, inputData.description)
    .then(() => {
      userInfo.setUserInfo(inputData.name,  inputData.description);
      profilePopup.getInputValues();
      profilePopup.close();
    })
    .catch(() => {
      console.log((err))
    })
    .finally(() => {
      renderLoading(false, profileButton);
    })
}});

profilePopup.setEventListeners();

profileEditButton.addEventListener('click', function () {
  inputName.value = userInfo.getUserInfo().name;
  inputDescription.value = userInfo.getUserInfo().description;
  profilePopup.open();
});

const newPicturePopup = new PopupWithForm(editAvatarPopup, {submit: () => {
  renderLoading(true, profilePictureButton)
  api.setNewAvatar(inputAvatarLink.value)
    .then(() => {
      avatarImage.setAttribute('src', inputAvatarLink.value);
      newPicturePopup.getInputValues();
      newPicturePopup.close();
    })
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

const cardPopup = new PopupWithForm(imageEditor, {submit: (inputData) => {
  renderLoading(true, photoButton)
  api.setCard(inputData.name, inputData.description)
    .then((cardData) => {
      setNewCard(cardData, userDataInfo, '.card-template');
      cardPopup.close()
      inputLink.value = '';
      inputPhotoName.value = '';
      imageFormValidation.disableSubmitButton();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      renderLoading(false, photoButton);
    })
}});

cardPopup.setEventListeners();

imageEditButton.addEventListener('click', function () {
  cardPopup.open();
})



