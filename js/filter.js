import {renderSimilarAds} from './map.js';

const housingType = document.querySelector('#housing-type');
const housingPrice = document.querySelector('#housing-price');
const housingRooms = document.querySelector('#housing-rooms');
const housingGuests = document.querySelector('#housing-guests');
const mapFilter = document.querySelector('.map__filters');
const ADS_COUNT = 10;

const getFilteredData = (someAds) => {
  mapFilter.addEventListener('change', () => {

    let filteredAds = [];

    filteredAds = someAds.filter((item) => item.offer.type === housingType.value ||
    housingType.value === 'any').filter((item) => item.offer.price <= 10000 && housingPrice.value === 'low' ||
    item.offer.price > 10000 && item.offer.price <= 50000 && housingPrice.value === 'middle' ||
    50000 < item.offer.price && housingPrice.value === 'high' ||
    housingPrice.value === 'any').filter((item) => item.offer.rooms === Number(housingRooms.value) ||
    housingRooms.value === 'any').filter((item) => item.offer.guests === Number(housingGuests.value) ||
    housingGuests.value === 'any');

    renderSimilarAds(filteredAds.slice(0, ADS_COUNT));
  });
};

/*
  const getFilteredData = (someAds) => {
  mapFilter.addEventListener('change', () => {

    let filteredAds = [];

    filteredAds = someAds.filter((item) => item.offer.type === housingType.value ||
    housingType.value === 'any');

    renderSimilarAds(filteredAds.slice(0, ADS_COUNT));

    filteredAds = someAds.filter((item) => item.offer.price <= 10000 && housingPrice.value === 'low' ||
    item.offer.price > 10000 && item.offer.price <= 50000 && housingPrice.value === 'middle' ||
    50000 < item.offer.price && housingPrice.value === 'high' ||
    housingPrice.value === 'any');

    filteredAds = someAds.filter((item) => item.offer.rooms === Number(housingRooms.value) ||
    housingRooms.value === 'any');

    filteredAds = someAds.filter((item) => item.offer.guests === Number(housingGuests.value) ||
    housingGuests.value === 'any');

    renderSimilarAds(filteredAds.slice(0, ADS_COUNT));
  });
};
*/

export {getFilteredData};
export {ADS_COUNT};
