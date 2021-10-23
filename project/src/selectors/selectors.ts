import { createSelector } from 'reselect';
import { Genres } from '../types/genres';
import { State } from '../types/state';

const getFilms = (state: State) => state.filmList;

const getGenre = (state: State) => state.genre;

export const getFilteredFilms = createSelector(
  [getFilms, getGenre],
  (films, genre) => {
    if (genre === Genres.AllGenres) {
      return films;
    }

    return films.filter((film) => film.genre === genre);
  },
);
