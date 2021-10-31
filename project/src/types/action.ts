import {loadFilms, requireAuthorization, requireLogout, setGenre, redirectToRoute} from '../store/action';
import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {AxiosInstance} from 'axios';
import {State} from './state';

enum ActionType {
  ChangeGenre = 'changeGenre',
  LoadFilms = 'loadFilms',
  RequireAuthorization = 'user/requireAuthorization',
  RequireLogout = 'user/requireLogout',
  RedirectToRoute = 'game/redirectToRoute',
}

type Actions =
  | ReturnType<typeof setGenre>
  | ReturnType<typeof loadFilms>
  | ReturnType<typeof requireAuthorization>
  | ReturnType<typeof requireLogout>
  | ReturnType<typeof redirectToRoute>;

type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Actions>;

type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Actions>;

export type {ThunkActionResult, ThunkAppDispatch, Actions};
export {ActionType};
