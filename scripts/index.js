const list = document.querySelector('.places__list');

function addCard (name, link, deleteCard) {
  const listItem = document.querySelector('#card-template');
  const listItemCopy = listItem.content.cloneNode(true);
  const deleteButton = listItemCopy.querySelector('.card__delete-button');
  listItemCopy.querySelector('.card__title').textContent = name;
  listItemCopy.querySelector('.card__image').src = link;
  deleteButton.addEventListener('click', (event) => deleteCard(event));
  return listItemCopy
}

function deleteCard () {
  const card = event.target.closest('.card');
  card.remove();
}

initialCards.forEach(function (item) {
  list.append(addCard(item.name, item.link, deleteCard));
});

// ---------------------------------------------------------------------------------------------

// // @todo: Темплейт карточки

// const listItem = document.querySelector('#card-template').content;

// // @todo: DOM узлы

// const list = document.querySelector('.places__list');

// // @todo: Функция создания карточки

// function addCard (name, link, deleteCard) {
//   const listItemCopy = listItem.querySelector('.card').cloneNode(true);
//   const deleteButton = listItemCopy.querySelector('.card__delete-button');
//   listItemCopy.querySelector('.card__title').textContent = name;
//   listItemCopy.querySelector('.card__image').src = link;
//   deleteButton.addEventListener('click',(event) => deleteCard(event));
//   list.append(listItemCopy);
// }

// // @todo: Функция удаления карточки

// function deleteCard () {
//   const card = event.target.closest('.card');
//   card.remove();
// }

// // @todo: Вывести карточки на страницу

// initialCards.forEach(function (item) {
//   addCard(item.name, item.link, deleteCard);
// });

// ---------------------------------------------------------------------------------------------

// function addCard (name, link) {
//   const listItem = document.querySelector('#card-template');
//   const listItemCopy = listItem.content.cloneNode(true);
//   const list = document.querySelector('.places__list');
//   const deleteButton = listItemCopy.querySelector('.card__delete-button');
//   listItemCopy.querySelector('.card__title').textContent = name;
//   listItemCopy.querySelector('.card__image').src = link;
//   deleteButton.addEventListener('click', () => {
//     const card = deleteButton.closest('.card');
//     card.remove();
//   });
//   list.append(listItemCopy);
// }

// initialCards.forEach(function (item) {
//   addCard(item.name, item.link);
// });