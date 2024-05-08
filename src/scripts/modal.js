const image = document.querySelector('.popup__image');
const caption = document.querySelector('.popup__caption');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_description');
const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');

function openPopup (popup) {
  popup.classList.add('popup_is-opened');
  document.addEventListener('keydown', handleEscape); 
}

function closePopup (popup) {
  popup.classList.remove('popup_is-opened');
  document.removeEventListener('keydown', handleEscape);
}

function handleEscape(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_is-opened');
    closePopup(openedPopup);
  }
}

function handleImageClick (evt, popup) {
    if (evt.target.classList.contains('card__image')) {
      openPopup(popup);
      image.src = evt.target.src;
      caption.textContent = evt.target.alt;
    }
  }

function handleProfileFormSubmit (evt, popup, closePopup) {
  evt.preventDefault();

  const nameInputValue = nameInput.value;
  const jobInputValue = jobInput.value;
  profileTitle.textContent = nameInputValue;
  profileDescription.textContent = jobInputValue;
  
  closePopup(popup);
  }

  export {openPopup, closePopup, handleEscape, handleImageClick, handleProfileFormSubmit}