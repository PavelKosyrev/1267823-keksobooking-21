'use strict';

var OFFERS_COUNT = 8;

var pinMetrics = {
  width: 50,
  height: 70
};

var map = document.querySelector('.map');
var pinTemplate = document.querySelector('#pin').content;
var mapPin = pinTemplate.querySelector('.map__pin');
var mapPins = document.querySelector('.map__pins');

var type = ['palace', 'flat', 'house', 'bungalow'];
var time = ['12:00', '13:00', '14:00'];
var photos = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];
var features = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];


// Рандомное число в от min до max
var getRandom = function (min, max) {
  var rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

// Массив строк случайной длины
function createCloneArray(lgth, target) {
  var length = getRandom(1, target.length);
  var result = [];
  for (var i = 0; i < length; i++) {
    let tmp = target[i];
    let index = getRandom(i, length - 1);
    let item = target[index];
    target[i] = item;
    target[index] = tmp;
    result.push(item);
  }
  return result;
}

// Создает объект
var createPinModel = function (iterator) {
  var location = {
    x: getRandom(0, mapPins.offsetWidth),
    y: getRandom(130, 630)
  };

  return {
    location: location,
    author: {
      avatar: 'img/avatars/user0' + iterator + '.png'
    },
    offer: {
      title: 'заголовок предложения',
      address: location.x + ', ' + location.y,
      type: type[getRandom(0, type.length - 1)],
      rooms: getRandom(1, 4),
      guests: getRandom(1, 8),
      checkin: time[getRandom(0, time.length - 1)],
      checkout: time[getRandom(0, time.length - 1)],
      features: createCloneArray(getRandom(1, features.length), features), // getArray(features),
      description: 'описание',
      photos: createCloneArray(getRandom(1, photos.length), photos) // getArray(photos)
    }
  };
};

// Создает массив объектов
var createPins = function () {
  var result = [];
  for (var i = 1; i <= OFFERS_COUNT; i++) {
    result.push(createPinModel(i));
  }
  return result;
};


map.classList.remove('map--faded');


var createPinNode = function (model) {
  var template = mapPin.cloneNode(true);
  var image = template.querySelector('img');
  image.src = model.author.avatar;
  image.alt = model.offer.title;
  template.style.left = model.location.x + (pinMetrics.width / 2) + 'px';
  template.style.top = model.location.y + pinMetrics.height + 'px';
  return template;
};

var renderPins = function () {
  var fragment = document.createDocumentFragment();
  createPins().forEach(function (pin) {
    fragment.appendChild(createPinNode(pin));
  });
  mapPins.appendChild(fragment);
};

renderPins();
