const initialCards = [
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
    }
];

export { initialCards };

export function addCard(name, link, deleteCard) {
  const listItem = document.querySelector('#card-template');
  const listItemCopy = listItem.content.cloneNode(true);
  const deleteButton = listItemCopy.querySelector('.card__delete-button');
  listItemCopy.querySelector('.card__title').textContent = name;
  listItemCopy.querySelector('.card__image').src = link;
  deleteButton.addEventListener('click', deleteCard);
  return listItemCopy
}

export function deleteCard () {
  const card = event.target.closest('.card');
  card.remove();
}

export function like () {
  if (event.target.classList.contains('card__like-button')) {
  event.target.classList.toggle('card__like-button_is-active');
  }
}

export function addNewCard (popup, closePopup) {
  event.preventDefault();
  const list = document.querySelector('.places__list');
  const formNewPlace = document.forms['new-place'];
  const inputPlace = formNewPlace.elements['place-name'].value
  const inputLink = formNewPlace.elements.link.value;
  list.prepend(addCard(inputPlace, inputLink, deleteCard));
  closePopup(popup);
  event.target.reset();
}