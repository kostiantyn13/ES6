//Со стрелочными функциями нельзя использовать методы:
//Task.bind()
//Task.call()
//Task.apply()
//нельзя использовать при создании функции конструктора

/*function add(x, y) {
  return x + y;
}*/
let add = (x, y) => x + y;

/*let square = function(x) {
  return x * x;
};*/
let square = x => x * x;

/*let giveMyAns = function() {
  return 40;
};*/
let giveMyAns = () => 40;

/*let log = function() {
  console.log('Daddy');
};*/
let log = () => console.log("Daddy");

/*let multiply = function(x, y) {
  let result = x * y;
  return result;
};*/
let multiply = (x, y) => {
  let result = x * y;
  return result;
};

/*let obj = function() {
  return {
    name: "Bob"
  };
};*/
//обьект необходимо обенуть в круглые скобки, если однострочный
let obj = () => ({
  name: "Bob"
});

//функция, вызывающая сама себя
/*(function() {
  console.log("IIFY");
})();*/
(() => console.log("IIFY"))();

let numbers = [1, 2, 3, 4, 5, 6, 7];
let sum = 0;
/*numbers.forEach(function(num) {
  sum += num;
});*/
numbers.forEach(num => sum += num);

let squared = numbers.map(x => x * x);

/*значение this берется из контекста(контекст - это окружние), в котором функция объявлена
для стрелочной функции ссылка this ссылается на контекст, который перескакивает 
через ближайший объект(то-есть окружает обьект )
для обычной функции ссылка this ссылается на сам объект
*/
let person = {
  name: "Bob",

  greet: function() {
    // как тут заменить - хз!!!!!!!!!!!!!!!!!!!!
    //let that = this;                                           --- for ES5
    setTimeout(() => {
      console.log(`Hello! My name is ${this.name}`);
      console.log(this);
    }, 2000);
  }
};
person.greet();
