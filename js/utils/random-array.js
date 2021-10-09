import {getRandomPositiveInteger} from './numbers.js';

const getRandomLengthArr = (array) =>{
  const randomLengthArr = [];
  const randomIndex = getRandomPositiveInteger(0, array.length);
  // eslint-disable-next-line id-length
  for (let i = 0; i < randomIndex; i++) {
    randomLengthArr.push(array[i]);
  }
  return randomLengthArr;
};

export {getRandomLengthArr};
