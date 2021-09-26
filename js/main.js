const getRandomNumber = function(min, max) {
  if (max <= min) {
    // eslint-disable-next-line no-console
    console.log('максимальное значение должно быть больше минимального');
  }

  if (max < 0 || min < 0) {
    // eslint-disable-next-line no-console
    console.log('диапазон должен быть положительным');
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// eslint-disable-next-line no-console
console.log(getRandomNumber(1, 3));

const getFractionalNumber = function(from, to, signs) {
  if (to <= from) {
    // eslint-disable-next-line no-console
    console.log('максимальное значение должно быть больше минимального');
  }

  if (from < 0 || to < 0) {
    // eslint-disable-next-line no-console
    console.log('диапазон должен быть положительным');
  }

  const result = Math.random() * (to - from) + from;
  const fixedResult = result.toFixed(signs);

  return fixedResult;
};

// eslint-disable-next-line no-console
console.log(getFractionalNumber(1.15, 3.468486, 2));
