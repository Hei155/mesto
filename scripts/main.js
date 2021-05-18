let popup = document.querySelector('.popup')
let openPopup = document.querySelector('.menu__edit');
let closePopup = document.querySelector('.popup__close');
let form = document.querySelector('.profile__info');
let nameIn = document.querySelector('.menu__name');
let description = document.querySelector('.menu__description');
let inputName = document.querySelector('#name');
let inputDescription = document.querySelector('#description')

function buttonToggle() {
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
    buttonToggle();
}

closePopup.addEventListener('click', buttonToggle);
openPopup.addEventListener('click', buttonToggle);
form.addEventListener('submit', saveChanges);
