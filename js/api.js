import { showAlert } from './alert-message.js';
import {getFilteredData} from './filter.js';
import {setFeatureClick} from './filter.js';
import {debounce} from './utils/debounce.js';

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

const RERENDER_DELAY = 500;

getData((ads) => {
  getFilteredData(ads);
  setFeatureClick(debounce(() => getFilteredData(ads)), RERENDER_DELAY);
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
