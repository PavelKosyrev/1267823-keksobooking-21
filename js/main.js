'use strict';

// Находим карту
var map = document.querySelector('.map');
// Находим кнопкку отправить
var submit = document.querySelector('.ad-form__submit');
// Ищем шаблон
var pinTemplate = document.querySelector('#pin').content;
// Находим кнопку в шаблоне
var mapPin = pinTemplate.querySelector('.map__pin');
// Находим список меток
var mapPins = document.querySelector('.map__pins');

map.classList.remove('map--faded');

var getResult = function (title, address, type, rooms, guests, checkin, checkout, features, description, photos, maxWidth) {
  var result = [];

  for (var i = 1; i <= 8; i++) {
    result[i] =
    {
      "author": {
        "avatar": 'img/avatars/user0' + i + '.png'
      },
      "offer": {
        "title": title,
        "address": location.x + ', ' + location.y,
        "type": type,
        "rooms": rooms,
        "guests": guests,
        "checkin": checkin,
        "checkout": checkout,
        "features": features,
        "description": description,
        "photos": photos
      },
      "location": {
        "x": Math.floor(Math.random() * maxWidth) + 1,
        "y": Math.floor(Math.random() * (630 - 131)) + 130
      }
    };
  }

  return result;
};

var result = getResult(1, 2, 3, 4, 6, 7, 8, 9, 10);


submit.addEventListener('click', function (evt) {
  evt.preventDefault();

  for (var i = 1; i <= result.length; i++) {
    var item = mapPin.cloneNode(true);
    // mapPins.querySelector('.map__pin').style = ;
    mapPin.querySelector('img').src = result[i].avatar;
    mapPins.appendChild(item);
  }
});
