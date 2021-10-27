import {createSelector} from 'reselect';
import {GenreList} from '../types/genres';
import {State} from '../types/state';

const getFilms = (state: State) => state.films;

const getGenre = (state: State) => state.genre;

const getFilteredFilms = createSelector(
  [getFilms, getGenre],
  (films, genre) => {
    if (genre === GenreList.AllGenres) {
      return films;
    }

    return films.filter((film) => film.genre === genre);
  },
);

export {getFilteredFilms};
