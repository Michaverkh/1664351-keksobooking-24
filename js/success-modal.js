import {isEscapeKey} from './utils/keys.js';
import {returnMainPin} from './map.js';
import {closePopups} from './map.js';
import {adForm} from './form-validation.js';
import {blockScroll} from './utils/scroll.js';
import {unblockScroll} from './utils/scroll.js';

const successModalTemplate = document.querySelector('#success').content.querySelector('.success');
const successModalElement = successModalTemplate.cloneNode(true);
const footerElement = document.querySelector('.footer');

const onPopupEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeSuccessModule();
  }
};

const onPopupClick = (evt) => {
  evt.preventDefault();
  closeSuccessModule();
};

function openSuccessModule () {
  footerElement.after(successModalElement);
  blockScroll();

  document.addEventListener('keydown', onPopupEscKeydown);
  document.addEventListener('click', onPopupClick);
}

function closeSuccessModule () {
  adForm.reset();
  returnMainPin();
  closePopups();
  unblockScroll();
  successModalElement.remove();

  document.removeEventListener('keydown', onPopupEscKeydown);
  document.removeEventListener('click', onPopupClick);
}

export {openSuccessModule};

