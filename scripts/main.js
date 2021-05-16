let popup = document.querySelector('.popup')
let openPopup = document.querySelector('.menu__edit');
let closePopup = document.querySelector('.popup__close');
let pageOpacity = document.querySelector('.page');
function buttonToggle() {
    popup.classList.toggle('popup_toggle');
    inputName.value = `${nameIn.textContent}`;
    inputDescription.value = `${description.textContent}`;
}

let nameIn = document.querySelector('.menu__name');
let description = document.querySelector('.menu__description');
let inputName = document.querySelector('#name');
let inputDescription = document.querySelector('#description')
let save = document.querySelector('.popup__button');
function saveChanges() {
    nameIn.textContent = `${inputName.value}`;
    description.textContent = `${inputDescription.value}`;
    buttonToggle();
}

let activeButton = document.querySelectorAll('.grid__like');
for (let i = 0; i <= activeButton.length - 1; i+=1) {
    activeButton[i].addEventListener('click', function(){
        if (activeButton[i].hasAttribute('active')) {
            activeButton[i].setAttribute('src', 'images/Like.svg')
            activeButton[i].removeAttribute('active')
        }
        else  {
            activeButton[i].setAttribute('src', 'images/buttonActive.svg')
            activeButton[i].setAttribute('active', 'like_active')
        }
    })
};
closePopup.addEventListener('click', buttonToggle);
openPopup.addEventListener('click', buttonToggle);
save.addEventListener('click', saveChanges);

