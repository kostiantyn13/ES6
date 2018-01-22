let mass = ["Chrome", "Opera", "Safari", "Edge"];

for (let browser in mass) {
  //перечисляет КЛЮЧИ АРГУМЕНТОВ массива
  console.log(browser);
}

for (let index in mass) {
  //перечисляет КЛЮЧИ АРГУМЕНТОВ массива
  console.log(mass[index]);
}

for (let browser of mass) {
  //перечисляет АРГУМЕНТЫ массива
  console.log(browser);
}
