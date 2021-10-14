import {similarAds} from './data.js';

const cardTemplate = document.querySelector('#card').content;
const map = document.querySelector('.map__canvas');
const similarAdsFragment = document.createDocumentFragment();
const translate = {
  palace: 'Дворец',
  flat: 'Квартира',
  house: 'Дом',
  bungalow: 'Бунгало',
  hotel: 'Отель',
};


similarAds.forEach((Ad) => {
  const cardElement = cardTemplate.cloneNode(true);

  cardElement.querySelector('.popup__avatar').src = Ad.autor.avatar;
  cardElement.querySelector('.popup__title').textContent = Ad.offer.title;
  cardElement.querySelector('.popup__text--address').textContent = Ad.offer.address;
  cardElement.querySelector('.popup__text--price').textContent = `${Ad.offer.price}₽/ночь`;
  cardElement.querySelector('.popup__type').textContent = translate[Ad.offer.type];
  cardElement.querySelector('.popup__text--capacity').textContent = `${Ad.offer.rooms} комнаты для ${Ad.offer.guests} гостей`;
  cardElement.querySelector('.popup__text--time').textContent = `Заезд после ${Ad.offer.checkin}, выезд до ${Ad.offer.checkout}`;

  const popupFeatures = cardElement.querySelector('.popup__features');
  const popupFeatureItems = popupFeatures.querySelectorAll('.popup__feature');
  const featureClass = 'popup__feature--';

  // Функция для фильтрации элементов шаблона, согласно данным из объекта

  const getFiltredElements = (templateColection, objectItems, className) => {
    templateColection.forEach((templateItem) => {
      const isExisting = objectItems.some((objectItem) =>
        templateItem.classList.contains(`${className}${objectItem}`),
      );
      if(!isExisting) {
        templateItem.remove();
      }
    });
  };

  getFiltredElements(popupFeatureItems, Ad.offer.features, featureClass);

  cardElement.querySelector('.popup__description').textContent = Ad.offer.description;
  const popupPhotos = cardElement.querySelector('.popup__photos'); //Блок с фотографиями
  const popupPhotoItem = cardElement.querySelector('.popup__photo'); //сама фотография
  const collectionPhotos = Ad.offer.photos;

  if (collectionPhotos.length === 0) {
    popupPhotoItem.remove();
  } else {
    collectionPhotos.forEach((collectionPhoto) => {
      const newPhoto = popupPhotoItem.cloneNode(true);
      newPhoto.src = collectionPhoto;
      popupPhotos.appendChild(newPhoto);
      popupPhotoItem.remove();
    });
  }

  similarAdsFragment.appendChild(cardElement);
});

map.appendChild(similarAdsFragment);
