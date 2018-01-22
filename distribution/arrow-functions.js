"use strict";

//Со стрелочными функциями нельзя использовать методы:
//Task.bind()
//Task.call()
//Task.apply()
//нельзя использовать при создании функции конструктора

/*function add(x, y) {
  return x + y;
}*/
var add = function add(x, y) {
  return x + y;
};

/*let square = function(x) {
  return x * x;
};*/
var square = function square(x) {
  return x * x;
};

/*let giveMyAns = function() {
  return 40;
};*/
var giveMyAns = function giveMyAns() {
  return 40;
};

/*let log = function() {
  console.log('Daddy');
};*/
var log = function log() {
  return console.log("Daddy");
};

/*let multiply = function(x, y) {
  let result = x * y;
  return result;
};*/
var multiply = function multiply(x, y) {
  var result = x * y;
  return result;
};

/*let obj = function() {
  return {
    name: "Bob"
  };
};*/
//обьект необходимо обенуть в круглые скобки, если однострочный
var obj = function obj() {
  return {
    name: "Bob"
  };
};

//функция, вызывающая сама себя
/*(function() {
  console.log("IIFY");
})();*/
(function () {
  return console.log("IIFY");
})();

var numbers = [1, 2, 3, 4, 5, 6, 7];
var sum = 0;
/*numbers.forEach(function(num) {
  sum += num;
});*/
numbers.forEach(function (num) {
  return sum += num;
});

var squared = numbers.map(function (x) {
  return x * x;
});

/*значение this берется из контекста(контекст - это окружние), в котором функция объявлена
для стрелочной функции ссылка this ссылается на контекст, который перескакивает 
через ближайший объект(то-есть окружает обьект )
для обычной функции ссылка this ссылается на сам объект
*/
var person = {
  name: "Bob",

  greet: function greet() {
    var _this = this;

    // как тут заменить - хз!!!!!!!!!!!!!!!!!!!!
    //let that = this;                                           --- for ES5
    setTimeout(function () {
      console.log("Hello! My name is " + _this.name);
      console.log(_this);
    }, 2000);
  }
};
person.greet();