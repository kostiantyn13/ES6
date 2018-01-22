"use strict";

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Task = function () {
  function Task() {
    var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Task.getDefaultTitle();

    _classCallCheck(this, Task);

    console.log("Создание задачи");
    this._title = title;
    this.done = false;
    Task.count += 1;
  }

  _createClass(Task, [{
    key: "complete",
    value: function complete() {
      this.done = true;
      console.log("\u0417\u0430\u0434\u0430\u0447\u0430 \"" + this._title + "\" \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0430");
    }
  }, {
    key: "title",
    get: function get() {
      //===Task.title      -----ВНИМАНИЕ
      //будет вызываться при обращении к свойству 'title'
      //свойство get связывает свойство объекта с функцией, которая (см выше)
      if (this._title === undefined) {
        this._title = getDefaultTitle();
      } else {
        return this._title; //===Task._title         -----ВНИМАНИЕ
      }
    },
    set: function set(val_ue) {
      //отличие только в том что ПРИНИМАЕТ ПАРАМЕТР(можно сделать проверку принимаемых параметров)
      this._title = val_ue;
    }
  }], [{
    key: "getDefaultTitle",
    value: function getDefaultTitle() {
      //статический метод
      return "\u0417\u0430\u0434\u0430\u0447\u0430 " + Task.count;
    }
  }]);

  return Task;
}();

Task.count = 0; //статическое свойство

var SubTask = function (_Task) {
  _inherits(SubTask, _Task);

  function SubTask(title, parent) {
    _classCallCheck(this, SubTask);

    var _this = _possibleConstructorReturn(this, (SubTask.__proto__ || Object.getPrototypeOf(SubTask)).call(this, title));
    /*конструктор не обязательно вызывать, тогда 
    он наследуется с родительского. Если вызывать - необходимо сделать 
    ссылку на родительский с помощью комманды 'super'.
    Внутри комманды и аргумента функции конструкора передаем свойства, 
    которые хотим позаимствовать у родительского конструктора*/


    _this.parent = parent;
    console.log("Создание подконструктора задачи");
    return _this;
  }

  _createClass(SubTask, [{
    key: "complete",
    value: function complete() {
      //если необходимо переопределить метод - работаем))
      /*this.done = true;*/
      /*можно дополнить метод родительского класса,
       тогда закоментируем предыдущую строку и напишем следующую*/
      _get(SubTask.prototype.__proto__ || Object.getPrototypeOf(SubTask.prototype), "complete", this).call(this);
      console.log("\u0417\u0430\u0434\u0430\u0447\u0430 \u043F\u043E\u0434\u043A\u043B\u0430\u0441\u0441\u0430 \"" + this.title + "\" \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0430");
    }
  }]);

  return SubTask;
}(Task);

var task = new Task("Изучение JavaScript");
var subtask = new SubTask("Изучение библиотеки React", task);
var task2 = new Task();
subtask.complete();
console.log(task2);