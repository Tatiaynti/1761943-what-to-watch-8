import {loadFilms, requireAuthorization, requireLogout, setGenre, redirectToRoute, loadPromoFilm} from '../store/action';
import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {AxiosInstance} from 'axios';
import {State} from './state';

enum ActionType {
  ChangeGenre = 'changeGenre',
  LoadFilms = 'loadFilms',
  LoadPromoFilm = 'loadPromoFilm',
  RequireAuthorization = 'user/requireAuthorization',
  RequireLogout = 'user/requireLogout',
  RedirectToRoute = 'redirectToRoute',
}

type Actions =
  | ReturnType<typeof setGenre>
  | ReturnType<typeof loadFilms>
  | ReturnType<typeof requireAuthorization>
  | ReturnType<typeof requireLogout>
  | ReturnType<typeof redirectToRoute>
  | ReturnType<typeof loadPromoFilm>;

type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Actions>;

type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Actions>;

export type {ThunkActionResult, ThunkAppDispatch, Actions};
export {ActionType};
