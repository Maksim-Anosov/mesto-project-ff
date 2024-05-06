export function openPopup (popup) {
  popup.classList.add('popup_is-opened');
  document.addEventListener('keydown', () => closePopupEsc(popup));
  popup.addEventListener('click', () => closePopupOverlay(popup));
}

export function closePopup (popup) {
  popup.classList.remove('popup_is-opened');
  
  // Значения форм по умолчанию при закрытии попапа
  const editProfileName = document.forms['edit-profile'].elements.name;
  const profileTitle = document.querySelector('.profile__title').textContent;
  const profileDescription = document.querySelector('.profile__description').textContent;
  const editProfileDescription = document.forms['edit-profile'].elements.description;

  editProfileName.value = profileTitle;
  editProfileDescription.value = profileDescription;
}

export function closePopupEsc (popup) {
  if (event.key === 'Escape') {
    closePopup(popup);
  }
}

export function closePopupOverlay(popup) {
  if (event.target === event.currentTarget) {
    closePopup(popup);
  }
}

export function popupImage (popup) {
  const image = document.querySelector('.popup__image');
  
    if (event.target.classList.contains('card__image')) {
      openPopup(popup);
      console.log(event.target)
      image.src = event.target.src;
    }
  }

  export function saveChanges (popup, closePopup) {
    event.preventDefault();
  
    const nameInput = document.querySelector('.popup__input_type_name');
    const jobInput = document.querySelector('.popup__input_type_description');
    const nameInputValue = nameInput.value;
    const jobInputValue = jobInput.value;
    const profileTitle = document.querySelector('.profile__title');
    const profileDescription = document.querySelector('.profile__description');
  
    profileTitle.textContent = nameInputValue;
    profileDescription.textContent = jobInputValue;
    
    closePopup(popup);
  }