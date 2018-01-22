function greet(greeting = "ffff", name) {
  //ffff - параметр по умлчанию, в случае отсутствия 'greeting'
  console.log(`${greeting} ${name}`);
}

function sum() {
  let sum = 0;
  Array.prototype.forEach.call(arguments, function(val___ue) {
    sum += val___ue;
  });

  console.log(sum);
}

function sum(...ggg) {
  let sum = 0;
  for (let i = 0; i < ggg.length; i++) {
    sum += parseInt(ggg[i]);
  }
  return sum;
}

function sum(...hhh) {
  let sum = 0;
  hhh.forEach(function(val___ue) {
    sum += val___ue;
  });

  console.log(sum);
}

function sum(...ttt) {
  console.log(
    ttt.reduce(function(arg_first, arg_last) {
      return arg_first + arg_last;
    })
  );
}

sum(6, 998, 6, 13);
