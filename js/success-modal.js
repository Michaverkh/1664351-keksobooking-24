import {isEscapeKey} from './utils/keys.js';

const successModalTemplate = document.querySelector('#success').content.querySelector('.success');
const successModalElement = successModalTemplate.cloneNode(true);
const footerElement = document.querySelector('.footer');

const onPopupEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    successModalElement.remove();
  }
};

const onPopupClick = (evt) => {
  evt.preventDefault();
  successModalElement.remove();
};

const openSuccessModule = () => {
  footerElement.after(successModalElement);
  document.addEventListener('keydown', onPopupEscKeydown);
  document.addEventListener('click', onPopupClick);
};

export {openSuccessModule};
