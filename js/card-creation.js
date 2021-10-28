const CARD_TEMPLATE = document.querySelector('#card').content.querySelector('.popup');
// const MAP = document.querySelector('.map__canvas');

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

const customPopup = (ad) => {
  const cardElement = CARD_TEMPLATE.cloneNode(true);

  cardElement.querySelector('.popup__avatar').src = ad.author.avatar;
  cardElement.querySelector('.popup__title').textContent = ad.offer.title;
  cardElement.querySelector('.popup__text--address').textContent = ad.offer.address;
  cardElement.querySelector('.popup__text--price').textContent = `${ad.offer.price}₽/ночь`;
  const houseType = cardElement.querySelector('.popup__type');

  houseType.textContent = TRANSLATE[ad.offer.type];

  cardElement.querySelector('.popup__text--capacity').textContent = `${ad.offer.rooms} комнаты для ${ad.offer.guests} гостей`;
  cardElement.querySelector('.popup__text--time').textContent = `Заезд после ${ad.offer.checkin}, выезд до ${ad.offer.checkout}`;

  const popupFeatures = cardElement.querySelector('.popup__features');
  const popupFeatureItems = popupFeatures.querySelectorAll('.popup__feature');

  getFiltredElements(popupFeatureItems, ad.offer.features);

  cardElement.querySelector('.popup__description').textContent = ad.offer.description;
  const popupPhotos = cardElement.querySelector('.popup__photos'); //Блок с фотографиями
  const popupPhotoItem = cardElement.querySelector('.popup__photo'); //сама фотография
  const {photos} = ad.offer;

  if (photos.length === 0) {
    popupPhotoItem.remove();
  } else {
    photos.forEach((photo) => {
      const newPhoto = popupPhotoItem.cloneNode(true);
      newPhoto.src = photo;
      popupPhotos.appendChild(newPhoto);
    });
    popupPhotoItem.remove();
  }
  return cardElement;
};

export {customPopup};
