//iteratable (итерируемый, перебираемый обьект) - содержание
// которого можно перебрать по одному элементу
//примеры итерируемых обьектов---
//[4,5,6]
//'String jjj'
//[div, div, div] - если это не массив, а набор

//у итерируемого обьекта есть специальный метод, который возвращает обьект(см ниже)
/*Iterable {
    [Symbol.iterator]() - —---Iterator - обьект возвращемый данным методом
}*/
/*
let iterator = {
  [Symbol.iterator]() {
    return {
      next() {
        //всего 1 метод, возвращает обьект - результат итератора
        return {
          value: "", //значение след элемента в последовательности!!!!ВНИМАНИЕ - не данного, а следующего
          done: true //если нет дальнейших свойств для перебора - true, обычно - false
        };
      }
    };
  }
};
*/
let xman = ["Syclops", "Wolverine", "Rogue"];
/*
console.info("for");
for (let index = 0; index < xman.length; index++) {
  console.log(xman[index]);
}

console.info("for...in");
for (let index in xman) {
  console.log(xman[index]);
}
console.info("forEach");
xman.forEach(x => console.log(x));
*/
console.info("for...of");
for (let index of xman) {
  console.log(index);
}

let iterator = xman[Symbol.iterator]();

//console.log(iterator.next()); //value = Syclops; done = false
//console.log(iterator.next()); //value = Wolverine; done = false
//console.log(iterator.next()); //value = Rogue; done = false
//console.log(iterator.next()); //value = underfined; done = true
//iterator.length не существует

let next = iterator.next();
while (!next.done) {
  console.log(next.value);
  next = iterator.next();
}

let idGenerator = {
  [Symbol.iterator]() {
    let id = 1;
    return {
      next() {
        let value = id > 100 ? undefined : id++;
        let done = !value;
        return { value, done }; //сократили так как value: value
      }
    };
  }
};

for (let id of idGenerator) {
  console.log(id);
}
//генератор случайных чисел
let randomGenerator = {
  [Symbol.iterator]() {
    let count = 0;
    return {
      next() {
        count++;
        let value = Math.ceil(Math.random() * 100);
        let done = count > 10;

        return { value, done }; //сократили так как value: value
      }
    };
  }
};

for (let random of randomGenerator) {
  console.log(random);
}
