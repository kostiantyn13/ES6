// Суть символов - избежать конфликтов имен свойств(см. строки 31, 32)

let symbol5 = Symbol(); //без ключевого слова "new", иначе ошибка
let symbol = Symbol("name"); // name - не обязательный параметр
let symbol2 = Symbol("name");
console.log(symbol === symbol2); //false так как внутри каждого name хранится какой-то свой код 'dfg54f564f'
// посмотреть внутреннее значение невозможно
// создать 2 одинаковых невозможно

//еще один способ создать
//при этом они заносятся в глобальный реестр -->
//можно получить из любого места в программе
// этому свойству надо давать имя, иначе оно ------ underfind
let fff = Symbol.for("name");
//пытается найти символ по имени, если не удастся - создаст новый
let hhh = Symbol.for("name");
console.log(fff === hhh); //true - это один и тот же символ

//  !!!! если fff создать первым способом ===== false, так как
//метод 'for' не может найти fff в глобальных переменных

let name = Symbol.keyFor(fff);
console.log(name); // === name - доступ к имени

// В ES6 свойства могут быть как СТРОКОВЫМИ(в ES5 только так) так и СИМВОЛАМИ

let password = Symbol();

let user = {
  username: "Woolf",
  password: "fffff",
  [password]: "hogofo", //                  свойство обязательно в квадратных скобках
  [Symbol.for("passwordy")]: "ho" //                 пустое свойство
};
// внутри функции обязательно обернуть в [], так как 'Symbol' мы не можем
//использовать как название для свойстава
console.log(user.passwordy); //underfind
console.log(Object.getOwnPropertySymbols(user)); // метод для просмотра символов у обьекта
console.log(Object.getOwnPropertyNames(user));
console.log(Object.keys(user));

let symf = user[Symbol.for("password")]; //underfind
let sym = user[Symbol.for("passwordy")];
console.log(sym);
