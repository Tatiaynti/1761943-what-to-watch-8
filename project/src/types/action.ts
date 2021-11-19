import {loadFilms, requireAuthorization, requireLogout, setGenre, redirectToRoute, loadPromoFilm, updateFilm, setFavoritesList, loadSimilarFilms, loadComments} from '../store/action';
import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {AxiosInstance} from 'axios';
import {State} from './state';

enum ActionType {
  ChangeGenre = 'data/changeGenre',
  LoadFilms = 'data/loadFilms',
  LoadPromoFilm = 'data/loadPromoFilm',
  RequireAuthorization = 'user/requireAuthorization',
  RequireLogout = 'user/requireLogout',
  RedirectToRoute = 'redirectToRoute',
  UpdateFilm = 'data/updateFilm',
  LoadFavoritesList = 'data/loadFavoritesList',
  LoadSimilarFilms = 'data/similarFilms',
  LoadComments = 'data/loadComments'
}

type Actions =
  | ReturnType<typeof setGenre>
  | ReturnType<typeof loadFilms>
  | ReturnType<typeof requireAuthorization>
  | ReturnType<typeof requireLogout>
  | ReturnType<typeof redirectToRoute>
  | ReturnType<typeof loadPromoFilm>
  | ReturnType<typeof updateFilm>
  | ReturnType<typeof setFavoritesList>
  | ReturnType<typeof loadSimilarFilms>
  | ReturnType<typeof loadComments>;

type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Actions>;

type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Actions>;

export type {ThunkActionResult, ThunkAppDispatch, Actions};
export {ActionType};
