"use strict";

function applyForVisa(documents) {
  console.log("Обработка заявления....");
  var promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      Math.random() > 0.5 ? resolve({}) : reject("В визе отказано: нехватка документов");
    }, 2000);
  });
  return promise;
}

function getVisa(visa) {
  console.info("Visa получена");
  return new Promise(function (resol_ve, reje_ct) {
    resol_ve(visa);
  });
}

function bookHotel(vis) {
  console.log("Бронируем номер");
  return new Promise(function (resolv_e, rejec_t) {
    resolv_e(vis);
    //rejec_t("Нет мест"); - тогда цыкл закончится
  }); //можно использовать сразу Promise.resolve(vis) или Promise.reject(vis) если только один вывод будет верен
}

function buyTickets(booking) {
  console.log("Покупаем билеты");
  console.log("Бронь ", booking);
}

applyForVisa({}).then(getVisa)
//, reason => console.error(reason))---можно убрать если определить в конце ф-ию ".catch"
.then(bookHotel).then(buyTickets).catch(function (error) {
  return console.error(error);
}).then(function () {
  return console.log("Цыкл закончен");
}); //сработает в любом случае после ".catch"