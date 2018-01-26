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

for (let num of range(47, 66)) {
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

for (let num of range_2(22, 30)) {
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

for (let num of obj.rang(47, 66)) {
  console.log(num);
}
