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
