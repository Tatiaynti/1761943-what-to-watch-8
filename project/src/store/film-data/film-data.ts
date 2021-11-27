import { createReducer } from '@reduxjs/toolkit';
import {Film, FilmFromServerType} from '../../types/film';
import {GenreList} from '../../types/genres';
import {Review} from '../../types/reviews';
import {FilmData} from '../../types/state';
import {adaptToClient} from '../../utils/common';
import { loadComments, loadFilms, loadPromoFilm, loadSimilarFilms, setFavoritesList, setGenre, updateFilm } from '../action';

const initialState: FilmData = {
  genre: GenreList.AllGenres,
  films: [],
  promoFilm: null,
  currentFilm: null,
  isDataLoaded: true,
  favoriteFilms: [],
  similarFilms: [],
  comments: [],
};

const filmData = createReducer(initialState, (builder) => {
  builder
    .addCase(setGenre, (state, action) => {
      state.genre = action.payload.genre;
    })
    .addCase(loadFilms, (state, action) => {
      state.films = action.payload.films.map(
        (film: FilmFromServerType) => adaptToClient(film));
    })
    .addCase(loadPromoFilm, (state, action) => {
      state.promoFilm = action.payload.film;
    })
    .addCase(updateFilm, (state, action) => {
      state.currentFilm = action.payload.film;
    })
    .addCase(setFavoritesList, (state, action) => {
      state.favoriteFilms = action.payload as Film[];
    })
    .addCase(loadSimilarFilms, (state, action) => {
      state.similarFilms = action.payload as Film[];
    })
    .addCase(loadComments, (state, action) => {
      state.comments = action.payload as Review[];
    });
});

export {filmData};
