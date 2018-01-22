//let languages = ["JavaScript", "PHP", "Pyton", "Ruby"];

/*let js = languages[0];
let php = languages[1];
let py = languages[2];
let rb = languages[3];*/

//let js, php, py, rb;
//обьявили переменные и '[js, php, py, rb]' - диструктивное выражение(присвоили значения)
//let [js, php, py, rb] = languages;

let [js, php, py, rb] = ["JavaScript", "PHP", "Pyton", "Ruby"]; //ДИСТРУКТИВНОЕ ПРИСВАИВАНИЕ

console.log(js, php, py, rb);

let ggg = [1, 4, 6];

let [aa, ss, dd, ff] = ggg; // ff - присвоится underfind
let [hh, ...nn] = ggg; // ...nn - присвоится массив [4, 6]

let [tt, yy, uui] = [1, , 6]; // yy - присвоится underfind

let [tg, yry, uu = 8888] = [1, 88]; // uu = 888

let [tgj, yty, uuu] = [1, 88, [5, 7]]; // uuu = [5, 7]

let [th, yyy, [hgh, jj]] = [1, 88, [5, 7]]; // hgh = 5

function kkk([lo, ho]) {
  console.log(lo, ho);
}
kkk([55, 777]);

function mas() {
  return [4, 6, 8];
}
let [vv, bb, mm] = mas(); //присвоили значения функции (vv = 4...)

let yes = "yes";
let no = "no";
[yes, no] = [no, yes]; // присвоили множеству переменных новые значения
