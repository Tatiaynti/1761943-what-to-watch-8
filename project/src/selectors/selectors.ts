import {createSelector} from 'reselect';
import {GenreList} from '../types/genres';
import {State} from '../types/state';

const getFilms = ({DATA}: State) => DATA.films;
const getGenre = ({DATA}: State) => DATA.genre;

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
