import {loadFilms, requireAuthorization, requireLogout, setGenre, redirectToRoute, loadPromoFilm, updateFilm, setFavoritesList} from '../store/action';
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
}

type Actions =
  | ReturnType<typeof setGenre>
  | ReturnType<typeof loadFilms>
  | ReturnType<typeof requireAuthorization>
  | ReturnType<typeof requireLogout>
  | ReturnType<typeof redirectToRoute>
  | ReturnType<typeof loadPromoFilm>
  | ReturnType<typeof updateFilm>
  | ReturnType<typeof setFavoritesList>;

type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Actions>;

type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Actions>;

export type {ThunkActionResult, ThunkAppDispatch, Actions};
export {ActionType};
