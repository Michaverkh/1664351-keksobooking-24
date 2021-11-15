import {makePageAviable} from './form-validation.js';
import {customPopup} from './card-creation.js';

const HOME_POSITION = {
  lat: 35.65929,
  lng: 139.78156,
};

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

const MainMarker = L.marker(
  HOME_POSITION,
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

MainMarker.addTo(map);

const adressInput = document.querySelector('#address');

const getCoordinates = (marker) => {
  const coordinates = marker.getLatLng();
  adressInput.value = `${(coordinates.lng).toFixed(5)}, ${coordinates.lat.toFixed(5)}`;
};

getCoordinates(MainMarker);

MainMarker.on('moveend', (evt) => {
  getCoordinates(evt.target);
});

//Отрисовка меток
const markerGroup = L.layerGroup().addTo(map);

//очистка карты

const ADS_COUNT = 10;
const removeMarkers = () => markerGroup.clearLayers();

const printPoints = (points) => {
  points.forEach((point) => {
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

const renderSimilarAds = (someAds) => {
  removeMarkers();
  printPoints(someAds.slice(0, ADS_COUNT));
};

//закрытие попапов

const closePopups = () => map.closePopup();

//Обнуление метки

function returnMainPin() {
  MainMarker.setLatLng(HOME_POSITION);
  getCoordinates(MainMarker);
}

export {returnMainPin};
export {closePopups};
export {renderSimilarAds};
