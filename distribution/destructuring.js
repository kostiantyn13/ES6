"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

//let languages = ["JavaScript", "PHP", "Pyton", "Ruby"];

/*let js = languages[0];
let php = languages[1];
let py = languages[2];
let rb = languages[3];*/

//let js, php, py, rb;
//обьявили переменные и '[js, php, py, rb]' - диструктивное выражение(присвоили значения)
//let [js, php, py, rb] = languages;

var js = "JavaScript",
    php = "PHP",
    py = "Pyton",
    rb = "Ruby"; //ДИСТРУКТИВНОЕ ПРИСВАИВАНИЕ

console.log(js, php, py, rb);

var ggg = [1, 4, 6];

var aa = ggg[0],
    ss = ggg[1],
    dd = ggg[2],
    ff = ggg[3]; // ff - присвоится underfind

var hh = ggg[0],
    nn = ggg.slice(1); // ...nn - присвоится массив [4, 6]

var tt = 1,
    yy,
    uui = 6; // yy - присвоится underfind

var _ref = [1, 88],
    tg = _ref[0],
    yry = _ref[1],
    _ref$ = _ref[2],
    uu = _ref$ === undefined ? 8888 : _ref$; // uu = 888

var tgj = 1,
    yty = 88,
    uuu = [5, 7]; // uuu = [5, 7]

var th = 1,
    yyy = 88,
    hgh = 5,
    jj = 7; // hgh = 5

function kkk(_ref2) {
  var _ref3 = _slicedToArray(_ref2, 2),
      lo = _ref3[0],
      ho = _ref3[1];

  console.log(lo, ho);
}
kkk([55, 777]);

function mas() {
  return [4, 6, 8];
}

var _mas = mas(),
    _mas2 = _slicedToArray(_mas, 3),
    vv = _mas2[0],
    bb = _mas2[1],
    mm = _mas2[2]; //присвоили значения функции (vv = 4...)

var yes = "yes";
var no = "no";
// присвоили множеству переменных новые значения
var _ref4 = [no, yes];
yes = _ref4[0];
no = _ref4[1];
_ref4;