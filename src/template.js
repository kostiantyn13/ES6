function great(name) {
  console.log(`Hello, ${name}!`.toUpperCase());
}
great("Cos");

let people_1 = ["Costello", "Vitaliy", "Project", "non@mail"];

function fuck(to, from, subject, mail) {
  console.log(`
        From: ${from}
        To: ${to}
        Subject: ${subject}
        Mail: ${mail}
    `);
}

fuck(...people_1);

let name = "goho";
console.log(hohohohohohohoho`Hello ${name}`);

function hohohohohohohoho(literals, ...values) {
  /* в качестве value выступают все переменные шаблона
     вставляемые внутрь.    '...values' - так пишут если кол-во неизвестно(идет как массив данных)*/
  return literals[0] + values[0].toUpperCase();
}
