import axios from "axios";

const KEY = '915249618afd956764505d155ff11f97';
const LANGUAGE = 'uk';

export const contentURL = `https://image.tmdb.org/t/p/w500`;
const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
});

export async function getTrendFilms(page = 1) {
    try {
        const data = await instance.get(
            `/trending/movie/week?api_key=${KEY}&page=${page}&language=${LANGUAGE}`
        );
        if (data.status === 200) return data;
        throw new Error(data.statusText);
    } catch (error) {
        console.log(error);
    }
};

export async function getFindFilm(searchQ, page = 1) {
    try {
        const data = await instance.get(
            `/search/movie?api_key=${KEY}&query=${searchQ}&page=${page}&language=${LANGUAGE}`
        );
        if (data.status === 200) return data;
        throw new Error(data.statusText);
    } catch (error) {
        console.log(error);
    }
};

export async function getFilmInfo(idFilm) {
    try {
        const data = await instance.get(
            `/movie/${idFilm}?api_key=${KEY}&language=${LANGUAGE}`
        );
        if (data.status === 200) return data;
        throw new Error(data.statusText);
    } catch (error) {
        console.log(error)
    }
};

export async function getFilmCredits(idFilm) {
    try {
        const data = await instance.get(
            `/movie/${idFilm}/credits?api_key=${KEY}`
        );
        if (data.status === 200) return data;
        throw new Error(data.statusText);
    } catch (error) {
        console.log(error);
    }
};

export async function getFilmReviews(idFilm) {
    try {
        const data = await instance.get(
            `/movie/${idFilm}/reviews?api_key=${KEY}`
        );
        if (data.status === 200) return data;
        throw new Error(data.statusText);
    } catch (error) {
        console.log(error);
    }
}