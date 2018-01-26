/* Это вид функций в JavaScript которые могут приостанавливать свое выполнение, 
возвращать промежуточный результат и возобновлять свое выполнение позже
*/
function* generate() {
  // * - пометка мол фун-я генератор        'n * g'     'n* g'     'n *g'
  // возвращает обьект который соответсвует протоколу или интерфейсу итератора(тоесть есть метод next())
  console.log("Start");
  yield 1; // новое ключевое слово
  yield "ttttt";
  //ЗНАЧЕНИЕ 1 --- давать или производить
  //ЗНАЧЕНИЕ 2 --- уступать или отдавать контроль или ответственность
  console.log("Finish");
  yield; //это обьект со свойствами  {value: , done: }
  console.log("Finish");
}
let hhh = generate();

console.log(hhh.next());
console.log(hhh.next());
console.log(hhh.next());
console.log(hhh.next());

/*
Start
{value: 1, done: false}
{value: "ttttt", done: false}
Finish
{value: undefined, done: false}
Finish
{value: undefined, done: true}
*/

//Пробуем сделать тоже используя функцию итератора...гораздо больше код
function genero() {
  let current = 1;
  return {
    [Symbol.iterator]() {
      return {
        next() {
          let result = { value: undefined, done: true };
          if (current <= 3) {
            result.value = current;
            result.done = false;
            current++;
          } else {
            result.value = undefined;
            result.done = true;
          }
          return result;
        }
      };
    }
  };
}

let yyy = genero()[Symbol.iterator]();

console.log(yyy.next());
console.log(yyy.next());
console.log(yyy.next());
console.log(yyy.next());

/*
{value: 1, done: false}
{value: 2, done: false}
{value: 3, done: false}
{value: undefined, done: true}
*/
//                               Пример 1(генератор) - круто по написанию, хз по исп.ресурсов
function* range(start, end) {
  let current = start;
  while (current <= end) {
    yield current++;
  }
}

for (let num of range(47, 52)) {
  console.log(num);
}
//                               Пример 2(итерирование обьекта) - еще тот шлак
function range_2(start, end) {
  let current = start;
  return {
    [Symbol.iterator]() {
      return {
        next() {
          let result = { value: undefined, done: true };
          if (current <= end) {
            result.value = current;
            result.done = false;
            current++;
          } else {
            result.value = undefined;
            result.done = true;
          }
          return result;
        }
      };
    }
  };
}

for (let num of range_2(22, 29)) {
  console.log(num);
}

//если функцию генератор обьявить у обьекта - это будет метод-генератор(обычный метод обьекта)
let obj = {
  *rang(start, end) {
    let current = start;
    while (current <= end) {
      yield current++;
    }
  }
};

for (let num of obj.rang(47, 50)) {
  console.log(num);
}

//let generator = function*() {};

/*
let ob = {
  *generator() {}
};
*/

function* generatoryyy() {
  yield 1;
  yield 5;
}
let iterator2 = generatoryyy();

console.log(iterator2.next());
console.log(iterator2.next());
console.log(iterator2.next());
/*
{value: 1, done: false}
{value: 5, done: false}
{value: undefined, done: true}
*/

function* generator() {
  //let result = yield; //Result undefined если не отправить значение в iterator.next("значение")
  //в первый вызов НЕЛЬЗЯ отправит, так как он запускает генератор, начиная со 2го
  //let result = 1 + (yield); //Result NaN если не отправить значение в iterator.next("значение")
  let mas = [yield, yield, yield];
  console.log(`Result ${mas[1]}`);
}
let iterator = generator();

console.log(iterator.next()); //запускает генератор и потом передает по очериди значения yield -ам
console.log(iterator.next(1)); //yield1 = 1
console.log(iterator.next(2)); //yield2 = 2
console.log(iterator.next(3)); //yield3 = 3

function* gaha() {
  yield 5;
}

function* gener() {
  yield 42;
  //yield [56, 83, 22];
  yield* [56, 83, 22];
  yield* gaha(); //использовали внутри другой генератор, на массиве было б круче покаать
  yield 4677;
}
let iter = gener();

console.log(iter.next().value); // 42
//console.log(iter.next().value); // вернет массив [56, 83, 22]
//можно с помощью делигирования генератора вернуть каждое значение массива
console.log(iter.next().value); // вернет из массива 56
console.log(iter.next().value); // 83
console.log(iter.next().value); // 22
console.log(iter.next().value); // 4677
console.log(iter.next().value); //undefined

// внутри генератора можно вызвать еще один генератор

// у генераторов(в отличии от итератора) есть еще 2 метода способных остановить генератор

function* yoho() {
  yield 1;
  yield 2;
  yield 3;
  yield 3;
  yield 3;
}
let jojo = yoho();
console.log(jojo.next());
console.log(jojo.next());
console.log(jojo.return()); //'методом return() можно остановить генератор
//дальше не будет работать
console.log(jojo.throw()); //'методом throw() можно остановить генератор
//выдаёт ошибку
//эти ошибки возможно словить
console.log(jojo.throw(new Error("Ошибка")));
console.log(jojo.next());
/*
{value: 1, done: false}
{value: 2, done: false}
{value: undefined, done: true}
Uncaught undefined
*/

function* yo() {
  try {
    yield 1;
    yield 2;
    yield 3;
  } catch (e) {
    console.log(e);
  }
}
let jo = yo();
console.log(jo.next());
console.log(jo.next());
console.log(jo.throw(new Error("Ошибка")));
console.log(jo.next());

/*
{value: 1, done: false}
{value: 2, done: false}
Error: Ошибка
214
{value: undefined, done: true}
{value: undefined, done: true}
*/
