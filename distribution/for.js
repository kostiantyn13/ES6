"use strict";

var mass = ["Chrome", "Opera", "Safari", "Edge"];

for (var browser in mass) {
  //перечисляет КЛЮЧИ АРГУМЕНТОВ массива
  console.log(browser);
}

for (var index in mass) {
  //перечисляет КЛЮЧИ АРГУМЕНТОВ массива
  console.log(mass[index]);
}

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = mass[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var _browser = _step.value;

    //перечисляет АРГУМЕНТЫ массива
    console.log(_browser);
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator.return) {
      _iterator.return();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}