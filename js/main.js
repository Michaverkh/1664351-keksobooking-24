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

let types = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
let checkinTime = ['12:00', '13:00', '14:00'];
let checkoutTime = ['12:00', '13:00', '14:00'];
let allFeatures = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
let allPhotos = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
];
let testObj = {
  autor: '',
  avatar: 'img/avatars/user{{xx}}.png', //{{xx}} — это число от 01 до 10
  offer: {
    title: 'Квартира',
    address: '', //составляется из географических координат {{location.lat}}, {{location.lng}}
    price: '', //Случайное целое положительное число
    type: '', //см массив types
    rooms: '', //Случайное целое положительное число
    guests: '', //Случайное целое положительное число
    checkin: '', //см массив checkinTime
    checkout: '', //см массив checkoutTime
    features: '', //массив строк — массив случайной длины
    description: 'Все по-кайфу!',
    photos: '', //— массив случайной длины
  },
  location: {
    lat: 0, //число с плавающей точкой — широта, случайное значение от 35.65000 до 35.70000
    lng: 0, //число с плавающей точкой — долгота, случайное значение от 139.70000 до 139.80000
  },
};
