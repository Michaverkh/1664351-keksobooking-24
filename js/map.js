import {makePageAviable} from './form-validation.js';
import {customPopup} from './card-creation.js';

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

const renderSimilarAds = (someAds) => {
  someAds.forEach((point) => {
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

//закрытие попапов

const closePopups = () => map.closePopup(marker);

//Обнуление метки

function returnMainPin() {
  marker.setLatLng({
    lat: 35.65929,
    lng: 139.78156,
  });
}

//очистка карты

const removeMarkers = () => markerGroup.clearLayers();

export {removeMarkers};
export {returnMainPin};
export {closePopups};
export {renderSimilarAds};
