"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Costello = function () {
  //свойства только в конструкторе, в 7яваскрипте возможно можно будет и вне конструктора
  function Costello() {
    var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Costello.getDefaultProperty();

    _classCallCheck(this, Costello);

    this.title = title;
    Costello.count += 1; //для статических переменных необходимо обращение к классу
    this._done = false; //всегда обращаемся к обьекту с помощью 'this'
    console.log("Все, сук, все попали");
  } //запятые не ставятся между методами классов

  _createClass(Costello, [{
    key: "complete",
    value: function complete() {
      this.done = true;
      console.log("\u0417\u0430\u0434\u0430\u0447\u0430 \"" + this.title + "\" \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0430!");
    }
  }, {
    key: "done",
    get: function get() {
      //метод, связующий свойство класса с функциией
      return this._done === true ? "Выполнено" : "Не выполнено";
    },
    set: function set(valu_e) {
      if (valu_e !== undefined && typeof valu_e === "boolean") {
        this._done = valu_e;
      } else {
        console.error("Ошибка! Укажите значение true или false");
      }
    }
  }], [{
    key: "getDefaultProperty",
    value: function getDefaultProperty() {
      //'static' - как вспомогательный метод внутри класса
      return "\u0417\u0430\u0434\u0430\u0447\u0430 " + this.count;
    }
  }]);

  return Costello;
}();

Costello.count = 1;
//let cos = new Costello("Вынести ствол");
//let cos1 = new Costello("Убить Билла");
var cos2 = new Costello();

console.log(cos2.done, cos2._done);
cos2.complete();
console.log(cos2.done, cos2._done);
//console.log(typeof Costello);
//console.log(cos instanceof Costello);

var Fox =
//можно создавать без указания названия класса
function Fox() {
  _classCallCheck(this, Fox);

  console.log("Create class");
};
var SubFox = function (_Fox) {
  _inherits(SubFox, _Fox);

  function SubFox() {
    _classCallCheck(this, SubFox);

    var _this = _possibleConstructorReturn(this, (SubFox.__proto__ || Object.getPrototypeOf(SubFox)).call(this));

    console.log("Create a subfox");
    return _this;
  }

  return SubFox;
}(Fox);
var fox = new Fox();
var subfox = new SubFox();
console.dir(fox);
console.dir(subfox);