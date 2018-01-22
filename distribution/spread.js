"use strict";

var staticLanguage = ["C", "C++", "Java"];
var dinamicLanguage = ["JavaScript", "PHP", "Ruby"];

var language = [].concat(staticLanguage, ["C#"], dinamicLanguage, ["Python"]);

console.log(language);

function add(z, x, c) {
  console.log(z + x + c);
}

var ggg = [1, 4, 6];

add.apply(undefined, ggg); //ибо как нельзя просто add(ggg);