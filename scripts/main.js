const profile = document.querySelector('#imageEditor');
const openProfile = document.querySelector('.menu__button');
const closeProfile = document.querySelector('#imageEditorClose');
const openPopup = document.querySelector('.menu__edit');
const closePopup = document.querySelector('#profileEditorClose');
const form = document.querySelector('#popupInf');
const nameIn = document.querySelector('.menu__name');
const description = document.querySelector('.menu__description');
const inputName = document.querySelector('#name');
const inputDescription = document.querySelector('#description');
const submitPhoto = document.querySelector('#cardInf');
const inputNamePhoto = document.querySelector('#photoName');
const inputLink = document.querySelector('#photoLink');
const profileEditor = document.getElementById('profileEditor');
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
  const cardTemplate = document.querySelector('.card__template').content;
  const htmlElement = cardTemplate.cloneNode(true);
  const imagePopup = document.querySelector('.image-popup');
  const imagePopupClose = document.querySelector('.image-popup__close');
  const imagePopupLink = document.querySelector('.image-popup__photo')
  htmlElement.querySelector('.card__image').setAttribute('src', link);
  htmlElement.querySelector('.card__image').setAttribute('alt', name);
  htmlElement.querySelector('.card__image').addEventListener('click', function(){
    imagePopupLink.setAttribute('src', link);
    opPopup(imagePopup);
  })
  imagePopupClose.addEventListener('click', function() {
    clsPopup(imagePopup)
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
  const gridContainer = document.querySelector('.grid');
  renderCard(index.name, index.link, gridContainer)
});

function renderCard(name, link, block) {
  const gridCard = document.querySelectorAll('.grid__card');
  const gridCardArray = Array.from(gridCard); 
  if (gridCardArray.length <= 5) {
    block.append(getCardElement(name, link))
  }
  else {
    block.prepend(getCardElement(name, link))
  }
};

function opPopup(data) {
  data.classList.remove('popup_toggle');
};

function clsPopup(data) {
  data.classList.add('popup_toggle');
}

function addPhoto(event) {
  const gridContainer = document.querySelector('.grid');
  event.preventDefault();
  renderCard(inputNamePhoto.value, inputLink.value, gridContainer);
};

function saveChanges(event) {
    event.preventDefault();
    nameIn.textContent = inputName.value;
    description.textContent = inputDescription.value;
}

submitPhoto.addEventListener('submit', function() {
  addPhoto(event);
  clsPopup(imageEditor);
  inputNamePhoto.value = "";
  inputLink.value = "";
})
openProfile.addEventListener('click', function () {
  opPopup(imageEditor);
});
closeProfile.addEventListener('click', function () {
  clsPopup(imageEditor);
});
closePopup.addEventListener('click', function () {
  clsPopup(profileEditor)
});
openPopup.addEventListener('click', function () {
  opPopup(profileEditor)
  inputName.value = nameIn.textContent;
  inputDescription.value = description.textContent;
}); 
form.addEventListener('submit', function() {
  saveChanges(event);
  clsPopup(profileEditor);
});

