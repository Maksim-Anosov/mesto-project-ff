import '../pages/index.css';
import { initialCards } from '../scripts/cards.js';
import { createCard } from '../scripts/cards.js';
import { deleteCard } from '../scripts/cards.js';
import { openPopup } from '../scripts/modal.js';
import { closePopup } from '../scripts/modal.js';
import { handleProfileFormSubmit } from '../scripts/modal.js';
import { like } from '../scripts/cards.js';
import { handleImageClick } from '../scripts/modal.js';

const formEditProfile = document.forms['edit-profile'];
const formNewPlace = document.forms['new-place'];
const popups = document.querySelectorAll('.popup');
const cardList = document.querySelector('.places__list');
const editButton = document.querySelector('.profile__edit-button');
const popupTypeEdit = document.querySelector('.popup_type_edit');
const profileAddButton = document.querySelector('.profile__add-button');
const popupTypeNewCard = document.querySelector('.popup_type_new-card');
const editProfileName = document.forms['edit-profile'].elements.name;
const editProfileDescription = document.forms['edit-profile'].elements.description;

// Добавить карточки

initialCards.forEach(function (item) {
  cardList.append(createCard(item.name, item.link, deleteCard, handleImageClick, like));
});

// Открыть Форму "редактировать профиль"

editButton.addEventListener('click', () => {
  openPopup(popupTypeEdit);
  
  // Значение формы по умолчанию
  
  let profileTitle = document.querySelector('.profile__title').textContent;
  let profileDescription = document.querySelector('.profile__description').textContent;

  editProfileName.value = profileTitle;
  editProfileDescription.value = profileDescription;
});

// Закрыть попапы

popups.forEach((item) => {
  item.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('popup_is-opened')) {
      closePopup(item);
    }

    else if (evt.target.classList.contains('popup__close')) {
      closePopup(item);
    }
  })
})

// Сохранить изменения формы "редактировать профиль"

formEditProfile.addEventListener('submit', (evt) => handleProfileFormSubmit(evt, popupTypeEdit, closePopup));

// Открыть Форму "добавить карточку"

profileAddButton.addEventListener('click', () => openPopup(popupTypeNewCard));

// Добавить карточку

formNewPlace.addEventListener('submit', (evt) => addNewCard(evt, popupTypeNewCard, closePopup));

// Новая карточка

// function addNewCard (evt, popup, closePopup) {
//   evt.preventDefault();
//   const formNewPlace = document.forms['new-place'];
//   const inputPlace = formNewPlace.elements['place-name'].value
//   const inputLink = formNewPlace.elements.link.value;
//   cardList.prepend(createCard(inputPlace, inputLink, deleteCard, handleImageClick, like));
//   closePopup(popup);
//   evt.target.reset();
// }

// функция принимает в вызов карточку и метод вставки
// метод по умолчанию `prepend`, но можно указать `append` 

function renderCard(item, method = "prepend") {
  const inputPlace = formNewPlace.elements['place-name'].value
  const inputLink = formNewPlace.elements.link.value;
  // создаем карточку, передавая обработчики в виде объекта `callbacks`
  const cardElement = createCard(inputPlace, inputLink, deleteCard, handleImageClick, like);

  // вставляем карточку, используя метод (вставится `prepend` или `append`)
  item[ method ](cardElement);
}

function addNewCard (evt, popup, closePopup) {
  evt.preventDefault();
  renderCard(cardList);
  closePopup(popup);
  evt.target.reset();
}


