"use strict";

var _templateObject = _taggedTemplateLiteral(["Hello ", ""], ["Hello ", ""]);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function great(name) {
  console.log(("Hello, " + name + "!").toUpperCase());
}
great("Cos");

var people_1 = ["Costello", "Vitaliy", "Project", "non@mail"];

function fuck(to, from, subject, mail) {
  console.log("\n        From: " + from + "\n        To: " + to + "\n        Subject: " + subject + "\n        Mail: " + mail + "\n    ");
}

fuck.apply(undefined, people_1);

var name = "goho";
console.log(hohohohohohohoho(_templateObject, name));

function hohohohohohohoho(literals) {
  for (var _len = arguments.length, values = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    values[_key - 1] = arguments[_key];
  }

  /* в качестве value выступают все переменные шаблона
     вставляемые внутрь.    '...values' - так пишут если кол-во неизвестно(идет как массив данных)*/
  return literals[0] + values[0].toUpperCase();
}