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

function setNewCard(cardInfo, cardSelector)  {
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
  }},
  {handleSetLike: () => {
    api.setLike(cardInfo._id)
      .catch((err) => {
        console.log(err);
      })
  }},
  {handleRemoveLike: () => {
    api.deleteLike(cardInfo._id)
      .catch((err) => {
        console.log(err);
      })
  }})
  const cardElement = card.getCardElement(cardInfo);
  gridContainer.append(cardElement);
};

const userInfo = new UserInfo(profileName, profileDescription);

const profilePopup = new PopupWithForm(profileEditor, {submit: () => {
  renderLoading(true, profileButton);
  api.setUserInfo(inputName.value, inputDescription.value)
    .then(() => {
      userInfo.setUserInfo(inputName.value,  inputDescription.value);
    })
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
  api.setNewAvatar(inputAvatarLink.value)
    .then(() => {
      avatarImage.setAttribute('src', inputAvatarLink.value);
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

const cardPopup = new PopupWithForm(imageEditor, {submit: () => {
  renderLoading(true, photoButton)
  api.setCard(cardPopup.inputValues.name, cardPopup.inputValues.description)
    .then(() => {
      api.getInitialCards()
        .then((res) => {
          const card = res[0];
          setNewCard(card, '.card-template');
          inputLink.value = '';
          inputPhotoName.value = '';
          imageFormValidation.disableSubmitButton();
        })
        .finally(() => {
          renderLoading(false, photoButton);
        })
    });
}});

cardPopup.setEventListeners();

imageEditButton.addEventListener('click', function () {
  cardPopup.open();
})



