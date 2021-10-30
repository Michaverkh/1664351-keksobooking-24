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

import {renderSimilarAds} from './map.js';
import {setUserFormSubmit} from './form-validation.js';
import {openSuccessModule} from './success-modal.js';

const ADS_COUNT = 10;

fetch('https://24.javascript.pages.academy/keksobooking/data')
  .then((response) => response.json())
  .then((ads) => {
    renderSimilarAds(ads.slice(0, ADS_COUNT));
  })
  .catch(() => {
    console.log('произошла ошибка загрузки данных');
  });

setUserFormSubmit(openSuccessModule);
