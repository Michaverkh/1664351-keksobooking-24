import {isEscapeKey} from './utils/keys.js';

const errorModalTemplate = document.querySelector('#error').content.querySelector('.error');
const errorModalElement = errorModalTemplate.cloneNode(true);
const footerElement = document.querySelector('.footer');

const onPopupEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    errorModalElement.remove();
  }
};

const onPopupClick = (evt) => {
  evt.preventDefault();
  errorModalElement.remove();
};

const openErrorModule = () => {
  footerElement.after(errorModalElement);
  document.addEventListener('keydown', onPopupEscKeydown);
  document.addEventListener('click', onPopupClick);
};

export {openErrorModule};
