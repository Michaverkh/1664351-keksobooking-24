import {isEscapeKey} from './utils/keys.js';
import {returnMainPin} from './map.js';
import {closePopups} from './map.js';
import {adForm} from './form-validation.js';

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
  adForm.reset();
  returnMainPin();
  closePopups();
};

export {openSuccessModule};
