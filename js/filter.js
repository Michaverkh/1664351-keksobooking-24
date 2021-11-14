import {renderSimilarAds} from './map.js';

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

    const availebleRooms = [];

    for (let i=1; i <= Number(housingRooms.value); i++) {
      availebleRooms.push(i);
    }

    const availebleGuestsQuantity = [];

    for (let i=1; i <= Number(housingGuests.value); i++) {
      availebleGuestsQuantity.push(i);
    }

    filteredAds = someAds.sort(compareAds).filter((item) => item.offer.type === housingType.value ||
    housingType.value === 'any').filter((item) => item.offer.price <= 10000 && housingPrice.value === 'low' ||
    item.offer.price > 10000 && item.offer.price <= 50000 && housingPrice.value === 'middle' ||
    50000 < item.offer.price && housingPrice.value === 'high' ||
    housingPrice.value === 'any').filter((item) => availebleRooms.includes(item.offer.rooms) ||
    housingRooms.value === 'any').filter((item) => availebleGuestsQuantity.includes(item.offer.guests) ||
    housingGuests.value === 'any');

    renderSimilarAds(filteredAds);
  });
};

export {getFilteredData};
export {setFeatureClick};
