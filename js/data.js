import {getRandomPositiveFloat} from './utils/numbers.js';
import {getRandomPositiveInteger} from './utils/numbers.js';
import {getRandomLengthArr} from './utils/random-array.js';

const NUMBERS = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'];
const TYPES = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const TIME = ['12:00', '13:00', '14:00'];
const ALL_FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const ALL_PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];
const DESCRIPTIONS = ['Все по кайфу', 'Вид на море', 'Собак не селим', 'только для породистых котов', 'обед включен', 'у нас чисто',
  'у нас так-себе, зато дешево',' магаз рядом', 'кафе рядом', 'мыши в номере'];
const TITLES = ['Кошкин дом', 'У Мурки', 'cat paradise resort and SPA'];
const MAX_PRICE = 1000;
const MAX_ROOMS_QUANTITY = 5;
const MAX_GUESTS_QUANTITY = 10;

const createAd = (index) => {
  const latPoint = getRandomPositiveFloat(35.65, 35.7, 5);
  const lngPoint = getRandomPositiveFloat(139.7, 139.8, 5);

  return {
    autor: {
      avatar: `img/avatars/user${ NUMBERS[index]}.png`,
    },
    offer: {
      title: TITLES[getRandomPositiveInteger(0, TITLES.length-1)],
      address: `${latPoint}, ${lngPoint}`,
      price: getRandomPositiveInteger(0, MAX_PRICE),
      type: TYPES[getRandomPositiveInteger(0, TYPES.length-1)],
      rooms: getRandomPositiveInteger(0, MAX_ROOMS_QUANTITY),
      guests: getRandomPositiveInteger(0, MAX_GUESTS_QUANTITY),
      checkin: TIME[getRandomPositiveInteger(0, TIME.length-1)],
      checkout: TIME[getRandomPositiveInteger(0, TIME.length-1)],
      features: getRandomLengthArr(ALL_FEATURES),
      description: DESCRIPTIONS[getRandomPositiveInteger(0, DESCRIPTIONS.length-1)],
      photos: getRandomLengthArr(ALL_PHOTOS),
    },
    location: {
      lat: latPoint,
      lng: lngPoint,
    },
  };
};

export {createAd};
