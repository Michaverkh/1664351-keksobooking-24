import {renderSimilarAds} from './map.js';

const housingType = document.querySelector('#housing-type');
const housingPrice = document.querySelector('#housing-price');
const housingRooms = document.querySelector('#housing-rooms');
const housingGuests = document.querySelector('#housing-guests');
const mapFilter = document.querySelector('.map__filters');

const getFilteredData = (someAds) => {
  mapFilter.addEventListener('change', (evt) => {
    if(evt.target.matches('.map__filter')) {
      let filteredAds = [];

      filteredAds = someAds.filter((item) => item.offer.type === housingType.value ||
      housingType.value === 'any').filter((item) => item.offer.price <= 10000 && housingPrice.value === 'low' ||
      item.offer.price > 10000 && item.offer.price <= 50000 && housingPrice.value === 'middle' ||
      50000 < item.offer.price && housingPrice.value === 'high' ||
      housingPrice.value === 'any').filter((item) => item.offer.rooms === Number(housingRooms.value) ||
      housingRooms.value === 'any').filter((item) => item.offer.guests === Number(housingGuests.value) ||
      housingGuests.value === 'any');

      renderSimilarAds(filteredAds);
    }
  });
};

// //Выбор опций

// const desiredFeatures = document.querySelector('.map__features');

// const setFeatureCick = (cb) => {
//   desiredFeatures.addEventListener('click', (evt) => {
//     if(evt.target.matches('input[type="checkbox"]')) {
//       const currentElem = evt.target;
//       currentElem.classList.add('desired');
//       cb();
//     }
//   });
// };

// const getAdRank = (ad) => {
//   const wiFi = document.querySelector('#filter-wifi');
//   const dishwasher = document.querySelector('#filter-dishwasher');
//   const parking = document.querySelector('#filter-parking');
//   const washer = document.querySelector('#filter-washer');
//   const elevator = document.querySelector('#filter-elevator');
//   const conditioner = document.querySelector('#filter-conditioner');

//   let rank =0;

//   if(wiFi.classList.contains('desired') && ad.offer.features.includes('wifi')) {
//     rank += 1;
//   }
//   if(dishwasher.classList.contains('desired') && ad.offer.features.includes('dishwasher')) {
//     rank += 1;
//   }
//   if(parking.classList.contains('desired') && ad.offer.features.includes('parking')) {
//     rank += 1;
//   }
//   if(washer.classList.contains('desired') && ad.offer.features.includes('washer')) {
//     rank += 1;
//   }
//   if(elevator.classList.contains('desired') && ad.offer.features.includes('elevator')) {
//     rank += 1;
//   }
//   if(conditioner.classList.contains('desired') && ad.offer.features.includes('conditioner')) {
//     rank += 1;
//   }
//   return rank;
// };

// const compareAds = (adA, adB) => {
//   const rankA = getAdRank(adA);
//   const rankB = getAdRank(adB);

//   return rankB - rankA;
// };

export {getFilteredData};
