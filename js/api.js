import { showAlert } from './alert-message.js';
import {getFilteredData} from './filter.js';
import {setFeatureCick} from './filter.js';
// import {renderSimilarAds} from './map.js';

const getData = (onSuccess) => {
  fetch('https://24.javascript.pages.academy/keksobooking/data')
    .then((response) => response.json())
    .then((data) => {
      onSuccess(data);
    })
    .catch(() => {
      showAlert('произошла ошибка загрузки данных');
    });
};

getData((ads) => {
  getFilteredData(ads);
  setFeatureCick(() => getFilteredData(ads));
});

const setUserFormSubmit = (data, onSuccess, onError) => {
  fetch(
    'https://24.javascript.pages.academy/keksobooking',
    {
      method: 'POST',
      body: data,
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
