function getRandomPositiveFloat (a, b, digits = 1) {

  const lower = Math.min(Math.abs(a), Math.abs(b));
  const upper = Math.max(Math.abs(a), Math.abs(b));

  const result = Math.random() * (upper - lower) + lower;

  return result.toFixed(digits);
}

function getRandomPositiveInteger (a, b) {

  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));

  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
}

let numbers = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'];
let types = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
let time = ['12:00', '13:00', '14:00'];
let allFeatures = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
let allPhotos = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
];
const maxPrice = 1000;
const maxRoomsQuantity = 5;
const maxGuestsQuantity = 10;

const createAd = (index) => {
  const getRandomLengthArr = (array) =>{
    let RandomLengthArr = [];
    let randomIndex = getRandomPositiveInteger(0, array.length);
    for (let i = 0; i < randomIndex; i++) {
      RandomLengthArr.push(array[i]);
    }
    return RandomLengthArr;
  }

  let latPoint = getRandomPositiveFloat (35.65, 35.7, 5);
  let lngPoint = getRandomPositiveFloat (139.7, 139.8, 5);

  return {
    autor: {
      avatar: 'img/avatars/user'+numbers[index]+'.png'
    },
    offer: {
      title: 'Квартира',
      address: [latPoint, lngPoint],
      price: getRandomPositiveInteger (0, maxPrice),
      type: types[getRandomPositiveInteger (0, types.length-1)],
      rooms: getRandomPositiveInteger (0, maxRoomsQuantity),
      guests: getRandomPositiveInteger (0, maxGuestsQuantity),
      checkin: time[getRandomPositiveInteger (0, time.length-1)],
      checkout: time[getRandomPositiveInteger (0, time.length-1)],
      features: getRandomLengthArr(allFeatures),
      description: 'Все по-кайфу!',
      photos: getRandomLengthArr(allPhotos),
    },
    location: {
      lat: latPoint,
      lng: lngPoint,
    }
  }
}

const adsCount = 10;
const similarAds = [];
for (let j = 0; j < adsCount; j++) {
  similarAds.push(createAd(j));
}

console.log(similarAds);
