class Costello {
  //свойства только в конструкторе, в 7яваскрипте возможно можно будет и вне конструктора
  constructor(title = Costello.getDefaultProperty()) {
    this.title = title;
    Costello.count += 1; //для статических переменных необходимо обращение к классу
    this._done = false; //всегда обращаемся к обьекту с помощью 'this'
    console.log("Все, сук, все попали");
  } //запятые не ставятся между методами классов

  get done() {
    //метод, связующий свойство класса с функциией
    return this._done === true ? "Выполнено" : "Не выполнено";
  }

  set done(valu_e) {
    if (valu_e !== undefined && typeof valu_e === "boolean") {
      this._done = valu_e;
    } else {
      console.error("Ошибка! Укажите значение true или false");
    }
  }

  complete() {
    this.done = true;
    console.log(`Задача "${this.title}" выполнена!`);
  }

  static getDefaultProperty() {
    //'static' - как вспомогательный метод внутри класса
    return `Задача ${this.count}`;
  }
}

Costello.count = 1;
//let cos = new Costello("Вынести ствол");
//let cos1 = new Costello("Убить Билла");
let cos2 = new Costello();

console.log(cos2.done, cos2._done);
cos2.complete();
console.log(cos2.done, cos2._done);
//console.log(typeof Costello);
//console.log(cos instanceof Costello);

let Fox = class Fox {
  //можно создавать без указания названия класса
  constructor() {
    console.log("Create class");
  }
};
let SubFox = class extends Fox {
  constructor() {
    super();
    console.log("Create a subfox");
  }
};
let fox = new Fox();
let subfox = new SubFox();
console.dir(fox);
console.dir(subfox);
