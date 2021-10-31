import {AuthorizationStatus} from '../const';
import {ActionType} from '../types/action';
import {FilmFromServerType} from '../types/film';
import {GenreList} from '../types/genres';

const setGenre = (genre: GenreList) => ({
  type: ActionType.ChangeGenre,
  payload: {genre},
} as const);

const loadFilms = (films: FilmFromServerType[]) => ({
  type: ActionType.LoadFilms,
  payload: {films},
} as const);

const requireAuthorization = (authStatus: AuthorizationStatus) => ({
  type: ActionType.RequireAuthorization,
  payload: authStatus,
} as const);

const requireLogout = () => ({
  type: ActionType.RequireLogout,
} as const);

export {setGenre, loadFilms, requireAuthorization, requireLogout};
