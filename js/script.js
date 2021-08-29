"use strict";

prompt("Сколько фильмов вы уже смотрели?","6");
const numberOfFilms = prompt("Сколько фильмов вы уже смотрели?","6");

const personalMuvieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	private: false
};

const a = prompt("Один из последних просмотренных фильмов?", "Logan"),
	b = prompt('На сколько оцените его?','8.1'),
	c = prompt("Один из последних просмотренных фильмов?", "Logan"),
	d = prompt('На сколько оцените его?','8.1');

personalMuvieDB.movies[a] = b;
personalMuvieDB.movies[c] = d;

console.log(personalMuvieDB);
