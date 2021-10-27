import {ActionType} from '../types/action';
import {Film} from '../types/film';
import {GenreList} from '../types/genres';

const setGenre = (genre: GenreList) => ({
  type: ActionType.ChangeGenre,
  payload: {genre},
} as const);

const loadFilms = (films: Film[]) => ({
  type: ActionType.LoadFilms,
  payload: {films},
} as const);

export {setGenre, loadFilms};
