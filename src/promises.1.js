"use strict";

let movieList = document.getElementById("movies");

function addMovieToList(movie) {
  let img = document.createElement("img");
  img.src = movie.Poster;
  movieList.appendChild(img);
}

function getDate(url) {
  return new Promise(function(resolve, reject) {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onload = function() {
      if (xhr.status === 200) {
        let json = JSON.parse(xhr.response);
        resolve(json.Search);
      } else {
        reject(xhr.statusText);
      }
    };
    xhr.onerror = function(error) {
      reject(error);
    };
    xhr.send();
  });
}

let batman = getDate(
  "http://www.omdbapi.com/?i=tt3896198&apikey=9450f321&s=batman"
);
let superman = getDate(
  "http://www.omdbapi.com/?i=tt3896198&apikey=9450f321&s=superman"
);
/*
//какая из функций поиска выполнится первой в таком порядке и будут выведены фото batman and superman
batman
  .then(movies => movies.forEach(movie => addMovieToList(movie)))
  .catch(error => console.error(error));
superman
  .then(movies => movies.forEach(movie => addMovieToList(movie)))
  .catch(error => console.error(error));*/
Promise.race([batman, superman])
  .then(movies => movies.forEach(movie => addMovieToList(movie)))
  .catch(error => console.error(error));
/*
function go(num) {
  return new Promise(function(resolve, reject) {
    let delay = Math.ceil(Math.random() * 3000);
    console.log(num, delay);
    setTimeout(() => {
      if (delay > 2000) {
        reject(num);
      } else resolve(num);
    }, delay);
  });
}

let [p1, p2, p3] = [go(1), go(2), go(3)];
//Promise.race([p2, p1, p3]); //какое первое выполнится, с аргументом того и работаем, нет так нет
Promise.all([p2, p1, p3]) //должны выполнится все условия(работаем с аргументом последнего)
  .then(value => console.log(value))
  .catch(error => console.error(error));
*/
