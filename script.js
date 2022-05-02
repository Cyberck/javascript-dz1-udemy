"use strict";


const numberOfFilms = +prompt('Skolko video filmi vi videli?', '');


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Odin is prosmotrennih filmov?', ''),
    b = +prompt('Na skolko osenite ego?', ''),
    c = prompt('Odin is prosmotrennih filmov?', ''),
    d = +prompt('Na skolko osenite ego?', '');

    personalMovieDB.movies[a] = b;
    personalMovieDB.movies[c] = d;

    console.log(personalMovieDB);