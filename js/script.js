"use strict";


const numberOfFilms = +prompt("Сколько фильмов вы уже смотрели?","");

const personalMuvieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	private: false
};

/*const a = prompt("Один из последних просмотренных фильмов?", "Logan"),
	b = prompt('На сколько оцените его?','8.1'),
	c = prompt("Один из последних просмотренных фильмов?", "Logan"),
	d = prompt('На сколько оцените его?','8.1');

personalMuvieDB.movies[a] = b;
personalMuvieDB.movies[c] = d;*/
let i = 0;
while (i < 2) {
	const a = prompt("Один из последних просмотренных фильмов?", "Logan"),
		b = prompt('На сколько оцените его?','8.1');
		i++; 
		if (a != null && b != null && a != '' && b != '' && a.length < 50 && b.length < 50) {
			personalMuvieDB.movies[a] = b;
			console.log('done');
		} else {
			console.log('error');
			i--;
		}
}
console.log(personalMuvieDB);


if (personalMuvieDB.count < 10) {
	console.log('Просмотренно мало фильмов');
} else if (personalMuvieDB.count >= 10 && personalMuvieDB.count < 30) {
	console.log('Вы классный зритель!');
} else if (personalMuvieDB.count >= 30) {
	console.log('Вы киноман!');
} else {
	console.log('Произошла ошибка!');
}