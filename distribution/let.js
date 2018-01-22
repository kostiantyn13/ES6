"use strict";

var buttons = document.querySelectorAll("button");

var _loop = function _loop(i) {
  button = buttons[i];

  button.innerText = i;
  button.onclick = function () {
    console.log(i);
  };
};

for (var i = 0; i < buttons.length; i++) {
  var button;

  _loop(i);
}