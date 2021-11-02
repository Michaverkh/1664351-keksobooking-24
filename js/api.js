import {renderSimilarAds} from './map.js';
import { showAlert } from './alert-message.js';
import {adForm} from './form-validation.js';

const getData = () => {
  const ADS_COUNT = 10;

  fetch('https://24.javascript.pages.academy/keksobooking/data')
    .then((response) => response.json())
    .then((ads) => {
      renderSimilarAds(ads.slice(0, ADS_COUNT));
    })
    .catch(() => {
      showAlert('произошла ошибка загрузки данных');
    });
};

const setUserFormSubmit = (onSuccess, onError) => {
  const formData = new FormData(adForm);

  fetch(
    'https://24.javascript.pages.academy/keksobooking',
    {
      method: 'POST',
      body: formData,
    },
  ).then((response) => {
    if (response.ok) {
      onSuccess();
    } else {
      onError();
    }
  })
    .catch(() => {
      onError();
    });
};

export {setUserFormSubmit};
export {getData};
