"use strict";

function greet() {
  var greeting = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "ffff";
  var name = arguments[1];

  //ffff - параметр по умлчанию, в случае отсутствия 'greeting'
  console.log(greeting + " " + name);
}

function sum() {
  var sum = 0;
  Array.prototype.forEach.call(arguments, function (val___ue) {
    sum += val___ue;
  });

  console.log(sum);
}

function sum() {
  var sum = 0;

  for (var _len = arguments.length, ggg = Array(_len), _key = 0; _key < _len; _key++) {
    ggg[_key] = arguments[_key];
  }

  for (var i = 0; i < ggg.length; i++) {
    sum += parseInt(ggg[i]);
  }
  return sum;
}

function sum() {
  var sum = 0;

  for (var _len2 = arguments.length, hhh = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    hhh[_key2] = arguments[_key2];
  }

  hhh.forEach(function (val___ue) {
    sum += val___ue;
  });

  console.log(sum);
}

function sum() {
  for (var _len3 = arguments.length, ttt = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    ttt[_key3] = arguments[_key3];
  }

  console.log(ttt.reduce(function (arg_first, arg_last) {
    return arg_first + arg_last;
  }));
}

sum(6, 998, 6, 13);