import {renderSimilarAds} from './map.js';
import { showAlert } from './alert-message.js';
import {returnMainPin} from './map.js';
import {closePopups} from './map.js';
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
  adForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const formData = new FormData(evt.target);

    fetch(
      'https://24.javascript.pages.academy/keksobooking',
      {
        method: 'POST',
        body: formData,
      },
    ).then((response) => {
      if (response.ok) {
        onSuccess();
        evt.target.reset();
        returnMainPin();
        closePopups();
      } else {
        onError();
      }
    })
      .catch(() => {
        onError();
      });
  });
};

export {setUserFormSubmit};
export {getData};
