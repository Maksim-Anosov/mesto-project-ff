import '../pages/index.css';
import { initialCards } from '../scripts/cards.js';
import { addCard } from '../scripts/cards.js';
import { deleteCard } from '../scripts/cards.js';
import { openPopup } from '../scripts/modal.js';
import { closePopup } from '../scripts/modal.js';
import { saveChanges } from '../scripts/modal.js';
import { addNewCard } from '../scripts/cards.js';
import { like } from '../scripts/cards.js';
import { popupImage } from '../scripts/modal.js';

// Добавить карточки

const list = document.querySelector('.places__list');

initialCards.forEach(function (item) {
  list.append(addCard(item.name, item.link, deleteCard));
});

// Открыть Форму "редактировать профиль"

const editButton = document.querySelector('.profile__edit-button');
const popupTypeEdit = document.querySelector('.popup_type_edit');

editButton.addEventListener('click', () => openPopup(popupTypeEdit));

// Закрыть форму "редактировать профиль"

const closeButtonPopupTypeEdit = document.querySelector('.popup_type_edit .popup__close');

closeButtonPopupTypeEdit.addEventListener('click', () => closePopup(popupTypeEdit));

// Значения формы "редактировать профиль" по умолчанию

const editProfileName = document.forms['edit-profile'].elements.name;
const editProfileDescription = document.forms['edit-profile'].elements.description;
const profileTitle = document.querySelector('.profile__title').textContent;
const profileDescription = document.querySelector('.profile__description').textContent;

editProfileName.value = profileTitle;
editProfileDescription.value = profileDescription;

// Сохранить изменения формы "редактировать профиль"

const formEditProfile = document.forms['edit-profile'];

formEditProfile.addEventListener('submit', () => saveChanges(popupTypeEdit, closePopup));

// Открыть Форму "добавить карточку"

const profileAddButton = document.querySelector('.profile__add-button');
const popupTypeNewCard = document.querySelector('.popup_type_new-card');

profileAddButton.addEventListener('click', () => openPopup(popupTypeNewCard));

// Закрыть форму "добавить карточку"

const closeButtonPopupTypeNewCard = document.querySelector('.popup_type_new-card .popup__close');

closeButtonPopupTypeNewCard.addEventListener('click', () => closePopup(popupTypeNewCard));

// Добавить карточку

const formNewPlace = document.forms['new-place'];

formNewPlace.addEventListener('submit', () => addNewCard(popupTypeNewCard, closePopup));

// Поставить лайк

list.addEventListener('click', like);

// Открыть попап с картинкой

const imagePopup = document.querySelector('.popup_type_image');

list.addEventListener('click', () => popupImage(imagePopup));

// Закрыть попап с картинкой 

const closeButtonePopupImage = document.querySelector('.popup_type_image .popup__close')

closeButtonePopupImage.addEventListener('click', () => closePopup(imagePopup));

