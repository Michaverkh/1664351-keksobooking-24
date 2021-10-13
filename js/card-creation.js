import {similarAds} from './data.js';

console.log(similarAds);

const cardTemplate = document.querySelector('#card').content;
const map = document.querySelector('.map__canvas');
const similarAdsFragment = document.createDocumentFragment();

similarAds.forEach((Ad) => {
  const cardElement = cardTemplate.cloneNode(true);
  cardElement.querySelector('.popup__avatar').src = Ad.autor.avatar;
  similarAdsFragment.appendChild(cardElement);
});

map.appendChild(similarAdsFragment);
