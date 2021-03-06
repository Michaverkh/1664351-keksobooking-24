import {renderSimilarAds} from './map.js';

const MIN_PRICE = 10000;
const MAX_PRICE = 50000;

//Выбор опций

const wiFi = document.querySelector('#filter-wifi');
const dishwasher = document.querySelector('#filter-dishwasher');
const parking = document.querySelector('#filter-parking');
const washer = document.querySelector('#filter-washer');
const elevator = document.querySelector('#filter-elevator');
const conditioner = document.querySelector('#filter-conditioner');

const getAdRank = (ad) => {

  let rank =0;

  const features = ad.offer.features;

  if(wiFi.classList.contains('desired') && features !== undefined && features.includes('wifi')) {
    rank += 1;
  }
  if(dishwasher.classList.contains('desired') && features !== undefined && features.includes('dishwasher')) {
    rank += 1;
  }
  if(parking.classList.contains('desired') && features !== undefined && features.includes('parking')) {
    rank += 1;
  }
  if(washer.classList.contains('desired') && features !== undefined && features.includes('washer')) {
    rank += 1;
  }
  if(elevator.classList.contains('desired') && features !== undefined && features.includes('elevator')) {
    rank += 1;
  }
  if(conditioner.classList.contains('desired') && features !== undefined && features.includes('conditioner')) {
    rank += 1;
  }

  return rank;
};

const compareAds = (adA, adB) => {
  const rankA = getAdRank(adA);
  const rankB = getAdRank(adB);

  return rankB - rankA;
};

const desiredFeatures = document.querySelector('.map__features');

const housingType = document.querySelector('#housing-type');
const housingPrice = document.querySelector('#housing-price');
const housingRooms = document.querySelector('#housing-rooms');
const housingGuests = document.querySelector('#housing-guests');
const mapFilter = document.querySelector('.map__filters');

const setFeatureClick = (cb) => {
  desiredFeatures.addEventListener('click', (evt) => {
    if(evt.target.matches('input[type="checkbox"]')) {
      const currentElem = evt.target;
      currentElem.classList.toggle('desired');
      cb();
    }
  });
};

const getFilteredData = (someAds) => {
  renderSimilarAds(someAds);

  mapFilter.addEventListener('change', () => {
    let filteredAds = [];

    filteredAds = someAds.sort(compareAds).filter((item) => item.offer.type === housingType.value ||
    housingType.value === 'any').filter((item) => item.offer.price <= MIN_PRICE && housingPrice.value === 'low' ||
    item.offer.price > MIN_PRICE && item.offer.price <= MAX_PRICE && housingPrice.value === 'middle' ||
    MAX_PRICE < item.offer.price && housingPrice.value === 'high' ||
    housingPrice.value === 'any').filter((item) => item.offer.rooms === Number(housingRooms.value) ||
    housingRooms.value === 'any').filter((item) => item.offer.guests >= Number(housingGuests.value) &&
    housingGuests.value !== '0' ||
    housingGuests.value === 'any');

    renderSimilarAds(filteredAds);
  });
};

export {getFilteredData};
export {setFeatureClick};
