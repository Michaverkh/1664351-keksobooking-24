import {isEscapeKey} from './utils/keys.js';

const errorModalTemplate = document.querySelector('#error').content.querySelector('.error');
const errorModalElement = errorModalTemplate.cloneNode(true);
const footerElement = document.querySelector('.footer');

const onPopupEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeErrorModule();
  }
};

const onPopupClick = (evt) => {
  evt.preventDefault();
  closeErrorModule();
};

function openErrorModule () {
  footerElement.after(errorModalElement);
  document.addEventListener('keydown', onPopupEscKeydown);
  document.addEventListener('click', onPopupClick);
}

function closeErrorModule () {
  errorModalElement.remove();

  document.removeEventListener('keydown', onPopupEscKeydown);
  document.removeEventListener('click', onPopupClick);
}

export {openErrorModule};
