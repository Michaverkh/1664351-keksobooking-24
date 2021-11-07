import {renderSimilarAds} from './map.js';
import {removeMarkers} from './map.js';
import { showAlert } from './alert-message.js';
// import {houseTypeChange} from './filter.js';

/*
const houseTypeChange = (cb) => {
  housingType.addEventListener('change', () => {
    const filteredAds = ads.filter((item) => item.offer.type === housingType.value)
    cb();
  });
};
*/

const housingType = document.querySelector('#housing-type');
const housingPrice = document.querySelector('#housing-price');
const housingRooms = document.querySelector('#housing-rooms');
const housingGuests = document.querySelector('#housing-guests');
// const mapFilters = document.querySelectorAll('.map__filter');

const getData = () => {
  const ADS_COUNT = 10;

  fetch('https://24.javascript.pages.academy/keksobooking/data')
    .then((response) => response.json())
    .then((ads) => {

      renderSimilarAds(ads.slice(0, ADS_COUNT));

      housingType.addEventListener('change', () => {
        const filteredAdsHousingType = ads.filter((item) => item.offer.type === housingType.value ||
        housingType.value === 'any');

        removeMarkers();
        renderSimilarAds(filteredAdsHousingType.slice(0, ADS_COUNT));

        ads = filteredAdsHousingType;
      });

      housingPrice.addEventListener('change', () => {
        const filteredAdsHousingPrice = ads.filter((item) => item.offer.price <= 10000 && housingPrice.value === 'low' ||
        item.offer.price > 10000 && item.offer.price <= 50000 && housingPrice.value === 'middle' ||
        50000 < item.offer.price && housingPrice.value === 'high' ||
        housingPrice.value === 'any');

        removeMarkers();
        renderSimilarAds(filteredAdsHousingPrice.slice(0, ADS_COUNT));

        ads = filteredAdsHousingPrice;
      });

      housingRooms.addEventListener('change', () => {
        const filteredAdsHousingRooms = ads.filter((item) => item.offer.rooms === Number(housingRooms.value) ||
        housingRooms.value === 'any');

        removeMarkers();
        renderSimilarAds(filteredAdsHousingRooms.slice(0, ADS_COUNT));

        ads = filteredAdsHousingRooms;
      });

      housingGuests.addEventListener('change', () => {
        const filteredAdsHousingGuests = ads.filter((item) => item.offer.guests === Number(housingGuests.value) ||
        housingGuests.value === 'any');

        removeMarkers();
        renderSimilarAds(filteredAdsHousingGuests.slice(0, ADS_COUNT));

        ads = filteredAdsHousingGuests;
      });
    })
    .catch(() => {
      showAlert('произошла ошибка загрузки данных');
    });
};

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
export {getData};
