//нельзя использовать класс до обьявления(только в ES6)
//классы не засоряют глобальное пространство имен
//а именно отсутствует window.Task(только для ЕS6)
class Task {
  constructor(title = Task.getDefaultTitle()) {
    console.log("Создание задачи");
    this._title = title;
    this.done = false;
    Task.count += 1;
  }

  static getDefaultTitle() {
    //статический метод
    return `Задача ${Task.count}`;
  }

  complete() {
    this.done = true;
    console.log(`Задача "${this._title}" выполнена`);
  }

  get title() {
    //===Task.title      -----ВНИМАНИЕ
    //будет вызываться при обращении к свойству 'title'
    //свойство get связывает свойство объекта с функцией, которая (см выше)
    if (this._title === undefined) {
      this._title = getDefaultTitle();
    } else {
      return this._title; //===Task._title         -----ВНИМАНИЕ
    }
  }

  set title(val_ue) {
    //отличие только в том что ПРИНИМАЕТ ПАРАМЕТР(можно сделать проверку принимаемых параметров)
    this._title = val_ue;
  }
}
Task.count = 0; //статическое свойство
class SubTask extends Task {
  constructor(title, parent) {
    /*конструктор не обязательно вызывать, тогда 
    он наследуется с родительского. Если вызывать - необходимо сделать 
    ссылку на родительский с помощью комманды 'super'.
    Внутри комманды и аргумента функции конструкора передаем свойства, 
    которые хотим позаимствовать у родительского конструктора*/
    super(title);
    this.parent = parent;
    console.log("Создание подконструктора задачи");
  }

  complete() {
    //если необходимо переопределить метод - работаем))
    /*this.done = true;*/
    /*можно дополнить метод родительского класса,
     тогда закоментируем предыдущую строку и напишем следующую*/
    super.complete();
    console.log(`Задача подкласса "${this.title}" выполнена`);
  }
}

let task = new Task("Изучение JavaScript");
let subtask = new SubTask("Изучение библиотеки React", task);

console.log(task);
console.log(subtask);
