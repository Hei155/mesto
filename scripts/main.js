const imagePopup = document.getElementById('imagePopup');
const profile = document.querySelector('#imageEditor');
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
const inputNamePhoto = document.querySelector('#photo-name');
const inputLink = document.querySelector('#photo-link');
const profileEditor = document.getElementById('profileEditor');
const imagePopupCloseBtn = document.querySelector('.popup__image-close');
const popupList = Array.from(document.querySelectorAll('.popup'));
const cardTemplate = document.querySelector('.card-template').content;
const imagePopupLink = document.querySelector('.popup__photo');
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

function getCardElement(name, link) {
  const htmlElement = cardTemplate.cloneNode(true);
  const imagePopupName = document.querySelector('.popup__name');
  htmlElement.querySelector('.card__image').setAttribute('src', link);
  htmlElement.querySelector('.card__image').setAttribute('alt', name);
  htmlElement.querySelector('.card__image').addEventListener('click', function(){
    imagePopupLink.setAttribute('src', link);
    imagePopupLink.setAttribute('alt', name);
    imagePopupName.innerText = name;
    openPopup(imagePopup);
  })
  htmlElement.querySelector('.card__text').innerText = name;
  const activeButton = htmlElement.querySelector('.card__button'); 
  activeButton.addEventListener('click', function(){
    activeButton.classList.toggle('card__button_is-active')
  })
  const card = htmlElement.querySelector('.grid__card');
  const deletePic = htmlElement.querySelector('.card__delete');
  deletePic.addEventListener('click', function(){
  card.remove()
    })
  return htmlElement;
}

initialCards.forEach((index) => {
  renderCard(index.name, index.link, gridContainer)
});

function renderCard(name, link, block) {
  const gridCard = document.querySelectorAll('.grid__card');
  const gridCardArray = Array.from(gridCard); 
  block.prepend(getCardElement(name, link))
};

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

popupList.forEach((popup) => {
  popup.addEventListener('mousedown', function(evt) {
    if (evt.target.classList[0] === "popup") {
      closePopup(popup);
    };  
  });
});

function addPhoto(event) {
  const firstButton = document.querySelector('#photoButton');
  event.preventDefault();
  renderCard(inputNamePhoto.value, inputLink.value, gridContainer);
  closePopup(imageEditor);
  inputNamePhoto.value = "";
  inputLink.value = "";
  firstButton.disabled = true;
  firstButton.classList.add('popup__button_inactive')      
};

function saveChanges(event) {
    event.preventDefault();
    nameIn.textContent = inputName.value;
    description.textContent = inputDescription.value;
    closePopup(profileEditor);
};

imagePopupCloseBtn.addEventListener('click', function() {
  closePopup(imagePopup);
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

profileForm.addEventListener('submit', saveChanges)

