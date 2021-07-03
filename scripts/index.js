const openProfile = document.querySelector('.menu__button');
const closeProfile = document.querySelector('#imageEditorClose');
const openWindowPopup = document.querySelector('.menu__edit');
const closeWindowPopup = document.querySelector('#profileEditorClose');
const profileForm = document.querySelector('#popupInf');
const nameIn = document.querySelector('.menu__name');
const description = document.querySelector('.menu__description');
const inputName = document.querySelector('#name');
const inputDescription = document.querySelector('#description');
const submitPhoto = document.querySelector('#cardInf');
const profileEditor = document.getElementById('profileEditor');
const popupList = Array.from(document.querySelectorAll('.popup'));
const submitPhotoButton = document.querySelector('#cardInf');
const inputNamePhoto = document.querySelector('#photo-name');
const inputLink = document.querySelector('#photo-link');

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

function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupEsc)
};

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupEsc)
}

function closePopupEsc(evt, popup=document.querySelector('.popup_opened')) {
  if (evt.key === "Escape") { 
    closePopup(popup); 
  }; 
}

function addPhoto(event) {
  event.preventDefault();
  closePopup(imageEditor);
};

function saveChanges(event) { 
    event.preventDefault();
    nameIn.textContent = inputName.value;
    description.textContent = inputDescription.value;
    closePopup(profileEditor);
};

import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";

submitPhotoButton.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const card = new Card(inputNamePhoto.value, inputLink.value, '.card-template');
  card.getCardElement();
  card.renderCard();
  inputNamePhoto.value = "";
  inputLink.value = "";
  photoButton.disabled = true;
  photoButton.classList.add('popup__button_inactive')  
});

initialCards.forEach((index) => {
    index = new Card(index.name, index.link, '.card-template')
    index.getCardElement();
    index.renderCard();
});

forms.forEach((Form) => {
  const newForm = new FormValidator(config)
  newForm.enableValidation(Form);
});

submitPhoto.addEventListener('submit', addPhoto);

openProfile.addEventListener('click', function () {
  openPopup(imageEditor);
});

closeProfile.addEventListener('click', function () {
  closePopup(imageEditor);
});

closeWindowPopup.addEventListener('click', function () {
  closePopup(profileEditor)
});

openWindowPopup.addEventListener('click', function () {
  openPopup(profileEditor)
  inputName.value = nameIn.textContent;
  inputDescription.value = description.textContent;
}); 

profileForm.addEventListener('submit', saveChanges);

popupList.forEach((popup) => { 
  popup.addEventListener('mousedown', function(evt) { 
    if (evt.target.classList[0] === "popup") { 
      closePopup(popup); 
    };   
  }); 
}); 

