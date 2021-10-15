import {similarAds} from './data.js';

const CARD_TEMPLATE = document.querySelector('#card').content;
const MAP = document.querySelector('.map__canvas');
const SIMILAR_ADS_FRAGMENT = document.createDocumentFragment();
const TRANSLATE = {
  palace: 'Дворец',
  flat: 'Квартира',
  house: 'Дом',
  bungalow: 'Бунгало',
  hotel: 'Отель',
};

// Функция для фильтрации элементов шаблона, согласно данным из объекта

const getFiltredElements = (template, features) => {
  template.forEach((item) => {
    const isExist = features.some((feature) =>
      item.classList.contains(`popup__feature--${feature}`),
    );
    if(!isExist) {
      item.remove();
    }
  });
};

similarAds.forEach((ad) => {
  const CARD_ELEMENT = CARD_TEMPLATE.cloneNode(true);

  CARD_ELEMENT.querySelector('.popup__avatar').src = ad.author.avatar;
  CARD_ELEMENT.querySelector('.popup__title').textContent = ad.offer.title;
  CARD_ELEMENT.querySelector('.popup__text--address').textContent = ad.offer.address;
  CARD_ELEMENT.querySelector('.popup__text--price').textContent = `${ad.offer.price}₽/ночь`;
  CARD_ELEMENT.querySelector('.popup__type').textContent = TRANSLATE[ad.offer.type];
  CARD_ELEMENT.querySelector('.popup__text--capacity').textContent = `${ad.offer.rooms} комнаты для ${ad.offer.guests} гостей`;
  CARD_ELEMENT.querySelector('.popup__text--time').textContent = `Заезд после ${ad.offer.checkin}, выезд до ${ad.offer.checkout}`;

  const POPUP_FEATURES = CARD_ELEMENT.querySelector('.popup__features');
  const popupFeatureItems = POPUP_FEATURES.querySelectorAll('.popup__feature');

  getFiltredElements(popupFeatureItems, ad.offer.features);

  CARD_ELEMENT.querySelector('.popup__description').textContent = ad.offer.description;
  const POPUP_PHOTOS = CARD_ELEMENT.querySelector('.popup__photos'); //Блок с фотографиями
  const POPUP_PHOTO_ITEM = CARD_ELEMENT.querySelector('.popup__photo'); //сама фотография
  const {photos} = ad.offer;

  if (photos.length === 0) {
    POPUP_PHOTO_ITEM.remove();
  } else {
    photos.forEach((photo) => {
      const newPhoto = POPUP_PHOTO_ITEM.cloneNode(true);
      newPhoto.src = photo;
      POPUP_PHOTOS.appendChild(newPhoto);
    });
    POPUP_PHOTO_ITEM.remove();
  }

  SIMILAR_ADS_FRAGMENT.appendChild(CARD_ELEMENT);
});

MAP.appendChild(SIMILAR_ADS_FRAGMENT);
