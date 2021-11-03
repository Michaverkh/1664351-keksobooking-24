import {returnMainPin} from './map.js';
import {closePopups} from './map.js';
import {adForm} from './form-validation.js';

const clearButton = document.querySelector('.ad-form__reset');

clearButton.addEventListener('click', () => {
  returnMainPin();
  closePopups();
  adForm.reset();
});
