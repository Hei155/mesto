import './index.css';

import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import { Section } from "../components/Section.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { UserInfo } from "../components/UserInfo.js";

const imagePopup = document.getElementById('imagePopup'); 
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

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_inactive',
  inputErrorClass: 'popup__input_type_error',
};

const forms = document.querySelectorAll(config.formSelector);

function setNewCard(cardName, cardLink, cardSelector) {
  const card = new Card(cardName, cardLink, cardSelector, {handleCardClick: () => {
    popupImage.open(cardName, cardLink);
    popupImage.setEventListeners();
  }});
  const cardElement = card.getCardElement();
  gridContainer.prepend(cardElement);
};

const popupImage  = new PopupWithImage(imagePopup);

const cardList = new Section({ data: initialCards, renderer: (initialCard) => {
  setNewCard(initialCard.name, initialCard.link, '.card-template');
}  }, '.grid');

cardList.rendererItems();

const userInfo = new UserInfo(profileName, profileDescription);

const profilePopup = new PopupWithForm(profileEditor, {submit: () => {
  userInfo.setUserInfo(inputName.value,  inputDescription.value)
}});

profilePopup.setEventListeners();

profileEditButton.addEventListener('click', function () {
  inputName.value = userInfo.getUserInfo().Name;
  inputDescription.value = userInfo.getUserInfo().Description;
  profilePopup.open();
});

const imageFormValidation = new FormValidator(config, imageForm);
imageFormValidation.enableValidation();
const profileFormValidation = new FormValidator(config, profileForm);
profileFormValidation.enableValidation();

const cardPopup = new PopupWithForm(imageEditor, {submit: () => {
  setNewCard(cardPopup.inputValues.photoName, cardPopup.inputValues.photoDescription, '.card-template')
  inputLink.value = '';
  inputPhotoName.value = '';
  imageFormValidation.disableSubmitButton();
}});

cardPopup.setEventListeners();

imageEditButton.addEventListener('click', function () {
  cardPopup.open();
})



