const popup = document.querySelector('.popup');
const profile = document.querySelector('.photo-editor');
const openProfile = document.querySelector('.menu__button');
const closeProfile = document.querySelector('.photo-editor__close');
const openPopup = document.querySelector('.menu__edit');
const closePopup = document.querySelector('.popup__close');
const form = document.querySelector('.popup__info');
const nameIn = document.querySelector('.menu__name');
const description = document.querySelector('.menu__description');
const inputName = document.querySelector('#name');
const inputDescription = document.querySelector('#description')
const submitPhoto = document.querySelector('.photo-editor__info')
const inputNamePhoto = document.querySelector('#photoName');
const inputLink = document.querySelector('#photoLink');
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

function appendCards() {
  for (let index = 0; index < initialCards.length; index++) {
    const element = initialCards[index];
    gridContainer.insertAdjacentHTML('beforeend', `
      <div class="grid__card"> 
        <img class="grid__image" src="${element.link}" alt="${element.name}">
        <img class="grid__delete" src="images/Delete.svg">
        <div class="grid__container"> 
          <h2 class="grid__text">${element.name}</h2> 
          <button class="grid__button" type="button"><img src="images/Like.svg" class="grid__like" alt="Нравится"></button> 
        </div> 
        <div class="image-popup image-popup_toggle">
          <div class="image-popup__container">
            <img class="image-popup__photo" src="${element.link}" alt="${element.name}">
            <img class="image-popup__close" src="images/Close-Icon.svg">
            <p class="image-popup__name">${element.name}</p>
          </div>
        </div>
      </div>`);
    }
};

function appendNewCard() {
  gridContainer.insertAdjacentHTML('afterbegin', `
      <div class="grid__card"> 
        <img class="grid__image" src="${initialCards[initialCards.length - 1].link}" alt="${initialCards[initialCards.length - 1].name}">
        <img class="grid__delete" src="images/Delete.svg">
        <div class="grid__container"> 
          <h2 class="grid__text">${initialCards[initialCards.length - 1].name}</h2> 
          <button class="grid__button" type="button"><img src="images/Like.svg" class="grid__like" alt="Нравится"></button> 
        </div> 
        <div class="image-popup image-popup_toggle">
          <div class="image-popup__container">
            <img class="image-popup__photo" src="${initialCards[initialCards.length - 1].link}" alt="${initialCards[initialCards.length - 1].name}">
            <img class="image-popup__close" src="images/Close-Icon.svg">
            <p class="image-popup__name">${initialCards[initialCards.length - 1].name}</p>
          </div>
        </div>
      </div>`);
};

function appendImagePopup() {
  const closeImage = document.querySelectorAll('.image-popup__close');
    const closeImageArray = Array.from(closeImage);
    const openImage = document.querySelectorAll('.image-popup');
    const openImageArray = Array.from(openImage);
    const Image = document.querySelectorAll('.grid__image');
    const ImageArray = Array.from(Image);
    for (let i = 0; i < ImageArray.length; i++) {
      const img = ImageArray[i];
      const cls = closeImageArray[i];
      const el = openImageArray[i];
      cls.addEventListener('click', function(){
        el.classList.toggle('image-popup_toggle');
      })
      img.addEventListener('click', function(){
        el.classList.toggle('image-popup_toggle');
      })
    };
    const card = document.querySelectorAll('.grid__card')
    const deletePic = document.querySelectorAll('.grid__delete');
    const deletePicArray = Array.from(deletePic);
    for (let buttons = 0; buttons < deletePicArray.length; buttons++) {
      const button = deletePicArray[buttons];
      button.addEventListener('click', function(){
        card[buttons].remove()
      })
    }
}

function appendNewImagePopup() {
  const closeImage = document.querySelectorAll('.image-popup__close');
  const closeImageArray = Array.from(closeImage);
  const openImage = document.querySelectorAll('.image-popup');
  const openImageArray = Array.from(openImage);
  const Image = document.querySelectorAll('.grid__image');
  const ImageArray = Array.from(Image);
  const lastImg = ImageArray[0];
  const lastCls = closeImageArray[0];
  const lastEl = openImageArray[0];
  lastCls.addEventListener('click', function(){
    lastEl.classList.toggle('image-popup_toggle');
  });
  lastImg.addEventListener('click', function(){
    lastEl.classList.toggle('image-popup_toggle');
  });
};

function appendActiveButton() {
  const activeButton = document.querySelectorAll('.grid__like'); 
  const activeButtonArray = Array.from(activeButton);
      activeButtonArray[0].addEventListener('click', function() {
        if (activeButtonArray[0].hasAttribute('active')) { 
          activeButtonArray[0].setAttribute('src', 'images/Like.svg');
          activeButtonArray[0].removeAttribute('active');
        } 
        else  { 
          activeButtonArray[0].setAttribute('src', 'images/buttonActive.svg');
          activeButtonArray[0].setAttribute('active', 'like_active');
      }
      })
};

function appendDeleteButton() {
  const card = document.querySelectorAll('.grid__card');
  const lastDeletePic = document.querySelectorAll('.grid__delete');
  const lastDeletePicArray = Array.from(lastDeletePic);
  const lastButton = lastDeletePicArray[0];
  lastButton.addEventListener('click', function(){
    card[0].remove()
  })
};

function renderLike() {
  const activeButtons = document.querySelectorAll('.grid__like'); 
  for (let i = 0; i <= activeButtons.length - 1; i+=1) { 
    activeButtons[i].addEventListener('click', function(){ 
        if (activeButtons[i].hasAttribute('active')) { 
            activeButtons[i].setAttribute('src', 'images/Like.svg') 
            activeButtons[i].removeAttribute('active') 
        } 
        else  { 
            activeButtons[i].setAttribute('src', 'images/buttonActive.svg') 
            activeButtons[i].setAttribute('active', 'like_active') 
        } 
    }) 
  }
};

function addPhoto(event) {
  event.preventDefault();
    initialCards.push({name: inputNamePhoto.value, link: inputLink.value});
    cardsRender();
    buttonToggleEditor();
}

function buttonTogglePopup() {
    popup.classList.toggle('popup_toggle');
    if (!popup.classList.contains('popup_toggle')) {
        inputName.value = `${nameIn.textContent}`;
        inputDescription.value = `${description.textContent}`;
    }
}
function saveChanges(event) {
    event.preventDefault();
    nameIn.textContent = `${inputName.value}`;
    description.textContent = `${inputDescription.value}`;
    buttonTogglePopup();
}

function buttonToggleEditor() {
    profile.classList.toggle('photo-editor_toggle');
}

function cardsRender() {
  if (initialCards.length <= 6) {
    appendCards();
    appendImagePopup()
  }
  else if (initialCards.length > 6) {
    appendNewCard();
    appendNewImagePopup()
    appendActiveButton();
    appendDeleteButton()
  }
};

cardsRender();
renderLike();

submitPhoto.addEventListener('submit', addPhoto);
openProfile.addEventListener('click', buttonToggleEditor);
closeProfile.addEventListener('click', buttonToggleEditor);
closePopup.addEventListener('click', buttonTogglePopup);
openPopup.addEventListener('click', buttonTogglePopup);
form.addEventListener('submit', saveChanges);
