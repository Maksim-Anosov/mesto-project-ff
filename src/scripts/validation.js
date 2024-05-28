function showInputError (config, formElement, inputElement, errorMessage) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(config.inputErrorClass);
  errorElement.classList.add(config.errorClass);
  errorElement.textContent = errorMessage;
}

function hideInputError (config, formElement, inputElement) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(config.inputErrorClass);
  errorElement.classList.remove(config.errorClass);
  errorElement.textContent = ""; 
}

// const regex = /^[a-zа-яё\s\-]+$/i

function isValid (config, formElement, inputElement) {
  if(inputElement.validity.patternMismatch) {
    inputElement.setCustomValidity(inputElement.dataset.errorMessage);
  } else {
    inputElement.setCustomValidity("");
  }

  // if(!regex.test(inputElement.value)) {
  //   inputElement.setCustomValidity(inputElement.dataset.errorMessage);
  // } else {
  //   inputElement.setCustomValidity("");
  // }
  
  if(!inputElement.validity.valid) {
    showInputError(config, formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(config, formElement, inputElement);
  }
}

function setEventListeners (config, formElement) {
  const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
  const buttonElement = formElement.querySelector(config.submitButtonSelector);

  inputList.forEach((item) => {
    item.addEventListener('input', () => {
      isValid(config, formElement, item);
      toggleButtonState(config, inputList, buttonElement);
    })
  })
}

function hasInvalidInput (inputList) {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  })
}

function toggleButtonState (config, inputList, buttonElement) {
  if (hasInvalidInput(inputList)) {
    buttonElement.disabled = true;
    buttonElement.classList.add(config.inactiveButtonClass);
  } else {
    buttonElement.disabled = false;
    buttonElement.classList.remove(config.inactiveButtonClass);
  }
}

function enableValidation (config, forms) {
  forms.forEach((item) => {
    setEventListeners(config, item);
  })
}

function clearValidation (config, inputList, buttonElement, form) {
  inputList.forEach((item) => {
    hideInputError(config, form, item);
    item.value = "";
  });
  toggleButtonState(config, inputList, buttonElement);
}

export {enableValidation, clearValidation}