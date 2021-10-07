import './utils/random-array.js';
import './data.js';
import './utils/random-array.js';
import './data.js';
import './form-validation.js';
import './address-choosing.js';
import './ads-comparation.js';
import './card-creation.js';

import {createAd} from './data.js';

const ADS_COUNT = 10;
const similarAds = [];

for (let j = 0; j < ADS_COUNT; j++) {
  similarAds.push(createAd(j));
}
// eslint-disable-next-line no-console
console.log(similarAds);
