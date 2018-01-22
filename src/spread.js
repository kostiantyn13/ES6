let staticLanguage = ["C", "C++", "Java"];
let dinamicLanguage = ["JavaScript", "PHP", "Ruby"];

let language = [...staticLanguage, "C#", ...dinamicLanguage, "Python"];

console.log(language);

function add(z, x, c) {
  console.log(z + x + c);
}

let ggg = [1, 4, 6];

add(...ggg); //ибо как нельзя просто add(ggg);
