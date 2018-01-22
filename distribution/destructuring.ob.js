"use strict";

var person = {
  firstname: "Bob",
  lastname: "Goh"
};

//let firstname = person.firstname;
//let lastname = person.lastname;

var firstname = person.firstname,
    lastname = person.lastname; //названия переменных и свойств должны совпадать!!!

var hohhoho = person.firstname,
    hahaha = person.lastname; //если вы хотите обьявить свои имена переменных

var _firstname$lastname = {
  firstname: "Bob",
  lastname: "Goh"
},
    hohoho = _firstname$lastname.firstname,
    hahhaha = _firstname$lastname.lastname;
var _firstname$lastname2 = {
  //можно добавить переменную(свойство обьекта не добавится)
  firstname: "Bob",
  lastname: "Goh"
},
    hohoeho = _firstname$lastname2.firstname,
    hahiaha = _firstname$lastname2.lastname,
    _firstname$lastname2$ = _firstname$lastname2.age,
    age = _firstname$lastname2$ === undefined ? 25 : _firstname$lastname2$;

//можно и так записать firstname(динамически)
//let { ["first" + "name"]: hohoho, lastname: hahaha, age = 25 } = {};

var user = {
  firstname: "Bob",
  lastname: "Goh",
  social: {
    facebook: "bojo",
    twitter: "boj"
  }
};
var ttt = user.firstname,
    nnn = user.social.facebook;

console.log(nnn); //    = bojo

/*function post(url, config) {
  config.data;
  config.cache;
}*/
//function post(url, { data, cache }) {} //вместо функции выше

function post(url, _ref) {
  var _ref$data = _ref.data,
      ggg = _ref$data.firstname,
      hhh = _ref$data.lastname,
      cache = _ref.cache;
}
//переменной data не существует, мы используем чтоб добраться к 'firstname' and 'lastname' or 'user'

var result = post("api/users", { data: user, cache: false });

function getUserInfo() {
  return {
    firstname: "Bob",
    lastname: "Goh",
    social: {
      facebook: "bojo",
      twitter: "boj"
    }
  };
}

var _getUserInfo = getUserInfo(),
    fn = _getUserInfo.firstname,
    ln = _getUserInfo.lastname,
    tw = _getUserInfo.social.twitter;