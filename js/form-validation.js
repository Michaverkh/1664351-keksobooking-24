const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;

const adForm = document.querySelector('.ad-form');
const fieldsets = adForm.querySelectorAll('fieldset');
const mapFilters = document.querySelector('.map__filters');
const filters = mapFilters.querySelectorAll('select');

const makePageDisabled = () => {
  adForm.classList.add('ad-form--disabled');
  fieldsets.forEach((fieldset) => fieldset.setAttribute('disabled', true));
  mapFilters.classList.add('map__filters--disabled');
  filters.forEach((filter) => filter.setAttribute('disabled', true));
};

makePageDisabled();

const makePageAviable = () => {
  adForm.classList.remove('ad-form--disabled');
  fieldsets.forEach((fieldset) => fieldset.removeAttribute('disabled', true));
  mapFilters.classList.remove('map__filters--disabled');
  filters.forEach((filter) => filter.removeAttribute('disabled', true));
};

//Валидация заголовка

const titleInput = document.querySelector('#title');
const valueLength = titleInput.value.lenght;

titleInput.addEventListener('input', () => {
  if (valueLength < MIN_TITLE_LENGTH) {
    titleInput.setCustomValidity(`Ещё ${  MIN_TITLE_LENGTH - valueLength } симв.`);
  } else if (valueLength > MAX_TITLE_LENGTH) {
    titleInput.setCustomValidity(`Удалите лишнее ${ valueLength - MAX_TITLE_LENGTH  } симв.`);
  } else {
    titleInput.setCustomValidity('');
  }

  titleInput.reportValidity();
});

// Валидация цены за ночь

const houseType = document.querySelector('#type');
const priceInput = document.querySelector('#price');
let minPrice = 0;
const getMinPrice = () => {
  switch (houseType.value) {
    case 'flat':
      minPrice = 1000;
      break;
    case 'house':
      minPrice = 5000;
      break;
    case 'bungalow':
      minPrice = 0;
      break;
    case 'hotel':
      minPrice = 3000;
      break;
    case 'palace':
      minPrice = 10000;
      break;
  }
  return minPrice;
};

getMinPrice();
priceInput.setAttribute('placeholder', minPrice);
priceInput.setAttribute('min', minPrice);

houseType.addEventListener('change', () => {
  getMinPrice();
  priceInput.setAttribute('placeholder', minPrice);
  priceInput.setAttribute('min', minPrice);
});

priceInput.addEventListener('input', () => {
  if (priceInput.value < minPrice) {
    priceInput.setCustomValidity(`Минимальное значение — ${minPrice}`);
  } else {
    priceInput.setCustomValidity('');
  }

  priceInput.reportValidity();
});

//Валидация кол-во комнат и мест.

const roomQuantity = document.querySelector('#room_number');
const guestQuantity = document.querySelector('#capacity');
const getGuestsQuantity = () => {
  if (roomQuantity.value === '1' && guestQuantity.value !== '1') {
    guestQuantity.setCustomValidity('1 комната — «для 1 гостя»');

  } else if (roomQuantity.value === '2' && guestQuantity.value !== '2' && guestQuantity.value !== '1') {
    guestQuantity.setCustomValidity('2 комнаты — «для 2 гостей» или «для 1 гостя»');

  } else if (roomQuantity.value === '3' && guestQuantity.value === '0') {
    guestQuantity.setCustomValidity('3 комнаты — «для 3 гостей», «для 2 гостей» или «для 1 гостя»');

  } else if (roomQuantity.value === '100' && guestQuantity.value !== '0') {
    guestQuantity.setCustomValidity('100 комнат — «не для гостей»');

  } else {
    guestQuantity.setCustomValidity('');
  }

  guestQuantity.reportValidity();
};

guestQuantity.addEventListener('change', () => {
  getGuestsQuantity();
});
roomQuantity.addEventListener('change', () => {
  getGuestsQuantity();
});
getGuestsQuantity();

const timeIn = document.querySelector('#timein');
const timeOut = document.querySelector('#timeout');

timeIn.addEventListener('change', () => {
  timeOut.value = timeIn.value;
});

timeOut.addEventListener('change', () => {
  timeIn.value = timeOut.value;
});

export {makePageAviable};
export {adForm};
