import './index.css';

import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";
import { Section } from "./Section.js";
import { PopupWithImage } from "./PopupWithImage.js";
import { PopupWithForm } from "./PopupWithForm.js";
import { UserInfo } from "./UserInfo.js";

const imagePopup = document.getElementById('imagePopup'); 
const openProfile = document.querySelector('.menu__button');
const imageEditor = document.querySelector('#imageEditor');
const openWindowPopup = document.querySelector('.menu__edit');
const nameIn = document.querySelector('.menu__name');
const description = document.querySelector('.menu__description');
const inputName = document.querySelector('#name');
const inputDescription = document.querySelector('#description');
const profileEditor = document.querySelector('#profileEditor');
const gridContainer = document.querySelector('.grid');

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
  formSelector: '.popup__info',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_inactive',
  inputErrorClass: 'popup__input_type_error',
};

const forms = document.querySelectorAll(config.formSelector);

const cardList = new Section({ data: initialCards, renderer: (initialCard) => {
  const card = new Card(initialCard.name, initialCard.link, '.card-template', {handleCardClick: () => {
    const popupImage  = new PopupWithImage(imagePopup);
    popupImage.open(initialCard.name, initialCard.link);
    popupImage.setEventListeners();
  }});
  const cardElement = card.getCardElement();
  cardList.addItem(cardElement);
}  }, '.grid');

cardList.rendererItems();

openWindowPopup.addEventListener('click', function () {
  const profilePopup = new PopupWithForm(profileEditor, {submit: () => {
      const userInfo = new UserInfo(inputName, inputDescription);
      userInfo.setUserInfo();
      nameIn.value = '';
      description.value = '';
  }});
  profilePopup.setEventListeners();
  profilePopup.open();
});

openProfile.addEventListener('click', function () {
  const cardPopup = new PopupWithForm(imageEditor, {submit: () => {
    const card = new Card(cardPopup.inputValues.photoName, cardPopup.inputValues.photoDescription, '.card-template', {handleCardClick: () => {
      const popupImage  = new PopupWithImage(imagePopup);
      popupImage.open(cardPopup.inputValues.photoName, cardPopup.inputValues.photoDescription);
      popupImage.setEventListeners();
    }});
    const cardElement = card.getCardElement();
    gridContainer.prepend(cardElement);
      nameIn.value = '';
      description.value = '';
  }});
  cardPopup.setEventListeners();
  cardPopup.open();
})

forms.forEach((Form) => {
  const newForm = new FormValidator(config)
  newForm.enableValidation(Form);
});

