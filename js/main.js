import './utils/random-array.js';
import './data.js';
import './utils/random-array.js';
import './data.js';
import './form-validation.js';
import './error-modal.js';
import './success-modal.js';
import './card-creation.js';
import './map.js';
import './utils/keys.js';
import './alert-message.js';
import './api.js';
import './reset-form-button.js';
import './filter.js';
import './utils/debounce.js';
import './avatar.js';

import {setUserFormSubmit} from './api.js';
import {openSuccessModule} from './success-modal.js';
import {openErrorModule} from './error-modal.js';
// import {getData} from './api.js';
import {adForm} from './form-validation.js';

// getData();

adForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const formData = new FormData(adForm);
  setUserFormSubmit(formData, openSuccessModule, openErrorModule);
});

window.addEventListener('scroll', () => {
  document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
});
