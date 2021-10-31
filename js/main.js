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

import {setUserFormSubmit} from './api.js';
import {openSuccessModule} from './success-modal.js';
import {openErrorModule} from './error-modal.js';
import {getData} from './api.js';

getData();
setUserFormSubmit(openSuccessModule, openErrorModule);
