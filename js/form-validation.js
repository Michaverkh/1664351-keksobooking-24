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

makePageAviable();

//Валидация заголовка

const titleInput = document.querySelector('#title');
const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;
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

let minPrice = 0;
const houseType = document.querySelector('#type');

houseType.addEventListener('change', () => {
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
});

const priceInput = document.querySelector('#price');

priceInput.addEventListener('input', () => {
  if (priceInput.value < minPrice) {
    priceInput.setCustomValidity(`Минимальное значение — ${minPrice}`);
  } else {
    priceInput.setCustomValidity('');
  }

  priceInput.reportValidity();
});

/*Валидация кол-во комнат и мест.
Кол-во комнат влияет на кол-во гостей!
1 комната — «для 1 гостя»;
2 комнаты — «для 2 гостей» или «для 1 гостя»;
3 комнаты — «для 3 гостей», «для 2 гостей» или «для 1 гостя»;
100 комнат — «не для гостей».
*/

const roomQuantity = document.querySelector('#room_number');
const guestQuantity = document.querySelector('#capacity');

guestQuantity.addEventListener('change', () => {
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
});
