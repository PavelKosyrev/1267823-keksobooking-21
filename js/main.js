'use strict';

var type = ['palace', 'flat', 'house', 'bungalow'];
var time = ['12:00', '13:00', '14:00'];
var photos = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];
var features = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];


// Удаляет повторяющиеся значения
function getUnique(arr) {
  var result = [];

  for (let str of arr) {
    if (!result.includes(str)) {
      result.push(str);
    }
  }

  return result;
}

// Рандомное число в от min до max
var getRandom = function (min, max) {
  var rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

// Массив строк случайной длинны
var getArray = function (arr) {
  var result = [];
  result.length = getRandom(1, arr.length);

  for (var i = 0; i <= result.length - 1; i++) {
    result[i] = arr[getRandom(0, arr.length - 1)];
  }

  return getUnique(result);
};

// Создает объект
var getResult = function (i) {

  var object = {
    location: {
      x: Math.floor(Math.random() * (630 - 131)) + 130,
      y: Math.floor(Math.random() * (630 - 131)) + 130
    },
    author: {
      avatar: 'img/avatars/user0' + i + '.png'
    },
    offer: {
      title: 'title',
      address: location.x + ', ' + location.y,
      type: type[getRandom(0, type.length - 1)],
      rooms: getRandom(1, 4),
      guests: getRandom(1, 8),
      checkin: time[getRandom(0, time.length - 1)],
      checkout: time[getRandom(0, time.length - 1)],
      features: getArray(features),
      description: 'description',
      photos: getArray(photos)
    }
  };

  return object;
};

// Создает массив объектов
var getObject = function () {
  var arrayObject = [];

  for (var i = 0; i <= 7; i++) {
    arrayObject[i] = getResult(i);
  }

  return arrayObject;
};

getObject();
