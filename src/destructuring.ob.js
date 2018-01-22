let person = {
  firstname: "Bob",
  lastname: "Goh"
};

//let firstname = person.firstname;
//let lastname = person.lastname;

let { firstname, lastname } = person; //названия переменных и свойств должны совпадать!!!

let { firstname: hohhoho, lastname: hahaha } = person; //если вы хотите обьявить свои имена переменных

let { firstname: hohoho, lastname: hahhaha } = {
  firstname: "Bob",
  lastname: "Goh"
};

let { firstname: hohoeho, lastname: hahiaha, age = 25 } = {
  //можно добавить переменную(свойство обьекта не добавится)
  firstname: "Bob",
  lastname: "Goh"
};

//можно и так записать firstname(динамически)
//let { ["first" + "name"]: hohoho, lastname: hahaha, age = 25 } = {};

let user = {
  firstname: "Bob",
  lastname: "Goh",
  social: {
    facebook: "bojo",
    twitter: "boj"
  }
};
let { firstname: ttt, social: { facebook: nnn } } = user;
console.log(nnn); //    = bojo

/*function post(url, config) {
  config.data;
  config.cache;
}*/
//function post(url, { data, cache }) {} //вместо функции выше

function post(url, { data: { firstname: ggg, lastname: hhh }, cache }) {}
//переменной data не существует, мы используем чтоб добраться к 'firstname' and 'lastname' or 'user'

let result = post("api/users", { data: user, cache: false });

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
let { firstname: fn, lastname: ln, social: { twitter: tw } } = getUserInfo();
