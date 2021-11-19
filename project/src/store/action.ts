import {AppRoute, AuthorizationStatus} from '../const';
import {ActionType} from '../types/action';
import {Film, FilmFromServerType} from '../types/film';
import {GenreList} from '../types/genres';

const setGenre = (genre: GenreList) => ({
  type: ActionType.ChangeGenre,
  payload: {genre},
} as const);

const loadFilms = (films: FilmFromServerType[]) => ({
  type: ActionType.LoadFilms,
  payload: {films},
} as const);

const loadPromoFilm = (film: Film) => ({
  type: ActionType.LoadPromoFilm,
  payload: {film},
} as const);

const requireAuthorization = (authStatus: AuthorizationStatus) => ({
  type: ActionType.RequireAuthorization,
  payload: authStatus,
} as const);

const requireLogout = () => ({
  type: ActionType.RequireLogout,
} as const);

const redirectToRoute = (url: AppRoute) => ({
  type: ActionType.RedirectToRoute,
  payload: url,
} as const);

const updateFilm = (film: Film) => ({
  type: ActionType.UpdateFilm,
  payload: {film},
} as const);

const setFavoritesList = (films: Film[])  => ({
  type: ActionType.LoadFavoritesList,
  payload: films,
} as const);

const loadSimilarFilms = (films: Film[]) => ({
  type: ActionType.LoadSimilarFilms,
  payload: films,
} as const);


export {setGenre, loadFilms, requireAuthorization, requireLogout, redirectToRoute, loadPromoFilm, updateFilm, setFavoritesList, loadSimilarFilms};
