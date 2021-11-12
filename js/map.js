import {makePageAviable} from './form-validation.js';
import {customPopup} from './card-creation.js';
import {getFilteredData} from './filter.js';

const map = L.map('map-canvas')
  .on('load', () => {
    makePageAviable();
  })
  .setView({
    lat: 35.65929,
    lng: 139.78156,
  }, 12);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: 'img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const pinIcon = L.icon({
  iconUrl: 'img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const marker = L.marker(
  {
    lat: 35.65929,
    lng: 139.78156,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

marker.addTo(map);

const adressInput = document.querySelector('#address');
marker.on('moveend', (evt) => {
  const coordinates = evt.target.getLatLng();
  adressInput.value = `${(coordinates.lng).toFixed(5)}, ${coordinates.lat.toFixed(5)}`;
});

//Отрисовка меток
const markerGroup = L.layerGroup().addTo(map);

//Выбор опций

const getAdRank = (ad) => {
  const wiFi = document.querySelector('#filter-wifi');
  const dishwasher = document.querySelector('#filter-dishwasher');
  const parking = document.querySelector('#filter-parking');
  const washer = document.querySelector('#filter-washer');
  const elevator = document.querySelector('#filter-elevator');
  const conditioner = document.querySelector('#filter-conditioner');

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

//очистка карты

const ADS_COUNT = 10;
const removeMarkers = () => markerGroup.clearLayers();

const renderSimilarAds = (someAds) => {
  removeMarkers();
  someAds
    .slice()
    .sort(compareAds)
    .slice(0, ADS_COUNT)
    .forEach((point) => {
      // eslint-disable-next-line no-shadow
      const marker = L.marker({
        lat: point.location.lat,
        lng: point.location.lng,
      },
      {
        icon: pinIcon,
      });
      marker
        .addTo(markerGroup)
        .bindPopup(customPopup(point));
    });
  return someAds;
};

const renderOriginalAds = (someAds) => {
  removeMarkers();
  someAds
    .slice(0, ADS_COUNT)
    .forEach((point) => {
      // eslint-disable-next-line no-shadow
      const marker = L.marker({
        lat: point.location.lat,
        lng: point.location.lng,
      },
      {
        icon: pinIcon,
      });
      marker
        .addTo(markerGroup)
        .bindPopup(customPopup(point));
    });
};

const desiredFeatures = document.querySelector('.map__features');

const setFeatureCick = (cb) => {
  desiredFeatures.addEventListener('click', (evt) => {
    if(evt.target.matches('input[type="checkbox"]')) {
      const currentElem = evt.target;
      currentElem.classList.toggle('desired');
      const sortData = cb();
      getFilteredData(sortData);
    }
  });
};

//закрытие попапов

const closePopups = () => map.closePopup(marker);

//Обнуление метки

function returnMainPin() {
  marker.setLatLng({
    lat: 35.65929,
    lng: 139.78156,
  });
}

export {returnMainPin};
export {closePopups};
export {renderSimilarAds};
export {setFeatureCick};
export {renderOriginalAds};
