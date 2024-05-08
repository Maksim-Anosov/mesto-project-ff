const initialCards = [
    {
      name: "Спасибо!",
      link: "https://t3.ftcdn.net/jpg/04/15/67/06/360_F_415670627_Os1pwzaAVHpUiwmUs5Y19ocwIUrGQUmf.jpg",
    },
    {
      name: "Архыз",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
    },
    {
      name: "Челябинская область",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
    },
    {
      name: "Иваново",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
    },
    {
      name: "Камчатка",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
    },
    {
      name: "Холмогорский район",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
    },
    {
      name: "Байкал",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
    },
];

const cardTemplate = document.querySelector('#card-template');
const imagePopup = document.querySelector('.popup_type_image');

function createCard(name, link, deleteCard, handleImageClick, like) {
  const listItemCopy = cardTemplate.content.cloneNode(true);
  const deleteButton = listItemCopy.querySelector('.card__delete-button');
  const cardImage = listItemCopy.querySelector('.card__image');
  const likeButton = listItemCopy.querySelector('.card__like-button');
  const cardTitle = listItemCopy.querySelector('.card__title');

  cardTitle.textContent = name;
  cardImage.src = link;
  cardImage.alt = name;

  deleteButton.addEventListener('click', deleteCard);
  cardImage.addEventListener('click', (evt) => handleImageClick(evt, imagePopup));
  likeButton.addEventListener('click', (evt) => like(evt));
  
  return listItemCopy
}

function deleteCard (evt) {
  const card = evt.target.closest('.card');
  card.remove();
}

function like (evt) {
  evt.target.classList.toggle('card__like-button_is-active');
}

export {initialCards, createCard, deleteCard, like}