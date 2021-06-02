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
  htmlElement.querySelector('.grid__image').setAttribute('src', link);
  htmlElement.querySelector('.grid__image').setAttribute('alt', name);
  htmlElement.querySelector('.grid__text').innerText = name;
  htmlElement.querySelector('.image-popup__photo').setAttribute('src', link);
  htmlElement.querySelector('.image-popup__photo').setAttribute('alt', name);
  htmlElement.querySelector('.image-popup__name').innerText = name;
  const closeImage = htmlElement.querySelector('.image-popup__close');
  const openImage = htmlElement.querySelector('.image-popup');
  const image = htmlElement.querySelector('.grid__image');
  image.addEventListener('click', function(){
    buttonTogglePopup(openImage);
  });
  closeImage.addEventListener('click', function(){
    buttonTogglePopup(openImage)
  });
  const activeButton = htmlElement.querySelector('.grid__like'); 
  activeButton.addEventListener('click', function(){ 
    if (activeButton.hasAttribute('active')) { 
        activeButton.setAttribute('src', 'images/Like.svg') 
        activeButton.removeAttribute('active') 
    } 
    else  { 
        activeButton.setAttribute('src', 'images/buttonActive.svg') 
        activeButton.setAttribute('active', 'like_active') 
    } 
  })
  const card = htmlElement.querySelector('.grid__card');
  const deletePic = htmlElement.querySelector('.grid__delete');
  deletePic.addEventListener('click', function(){
  card.remove()
    })
  return htmlElement;
}

function renderCard(name, link, gridContainer) {
  if (initialCards[5] !== null) {
    for (let index = 0; index < initialCards.length; index++) {
      gridContainer = document.querySelector('.grid');
      name = initialCards[index].name;
      link = initialCards[index].link;
      gridContainer.append(getCardElement(name, link))
      initialCards[index] = null;
    }
  }
  else {
    gridContainer = document.querySelector('.grid');
    name = inputNamePhoto.value;
    link = inputLink.value;
    gridContainer.prepend(getCardElement(name, link))
  }
}

function buttonTogglePopup(data) {
  data.classList.toggle('popup_toggle');
  if (!data.classList.contains('popup_toggle')) {
    inputName.placeholder = nameIn.textContent;
    inputDescription.placeholder = description.textContent;
}
};

function addPhoto(event) {
  event.preventDefault();
  renderCard();
  inputNamePhoto.placeholder = nameIn.textContent;
  inputLink.placeholder = description.textContent;
};

function saveChanges(event) {
    event.preventDefault();
    nameIn.textContent = inputName.value;
    description.textContent = inputDescription.value;
}

renderCard();

submitPhoto.addEventListener('submit', function() {
  addPhoto(event);
  buttonTogglePopup(imageEditor);
})
openProfile.addEventListener('click', function () {
  buttonTogglePopup(imageEditor)});
closeProfile.addEventListener('click', function () {
  buttonTogglePopup(imageEditor)});
closePopup.addEventListener('click', function () {
  buttonTogglePopup(profileEditor)});
openPopup.addEventListener('click', function () {
  buttonTogglePopup(profileEditor)});
form.addEventListener('submit', function() {
  saveChanges(event);
  buttonTogglePopup(profileEditor);
});
