"use strict";

//данный пример - аналог  создания класса
//и наследования класса в ES5
function Task(title) {
  //функция конструктор (с большой буквы)
  //сразу создается пустой обьект и вконце уже возвращается с методами и свойствами
  //this - ссылка на этот пустой обьект

  this._title = title;
  this.done = false;
  Task.count += 1;
}

//ниже - это СТАТИЧЕСКОЕ свойство
Task.count = 1;

//свойства для функции конструктора создаются так:
Object.defineProperty(Task, "title", {
  get: function get() {
    return this._title;
  },
  set: function set(val_ue) {
    this._title = val_ue;
  }
});

//методы для функции конструктора
//определяют в прототипе чтоб была один и тот же метод
//для всех экземпляров, а не у каждого экземпляра
//своя индивидуальная(это занимает место)
Task.prototype.complete = function () {
  this.done = true;
};

//ниже - это СТАТИЧЕСКИЙ метод
Task.getDefaultTitle = function () {
  return "\u0417\u0430\u0434\u0430\u0447\u0430 " + Task.count;
};

//создали подкласс, наследуем свойства и методы у родительского
//this - создаваемый обьект
function SubTask(title, parent) {
  Task.call(this, title);
  this._parent = parent;
}

/*прототипом класса SubTask конструкторо является
прототип класса Task*/
SubTask.prototype = Object.create(Task.prototype);
/*у прототипа SubTask конструктором является
функция SubTask*/
SubTask.prototype.constructor = SubTask;

var task = new Task("Изучение JavaScript");
var subtask = new SubTask("Изучение библиотеки React", task);

console.log(task);
console.log(subtask);