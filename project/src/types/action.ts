import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {AxiosInstance} from 'axios';
import {State} from './state';
import {Action} from 'redux';

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

type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Action>;

type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Action>;

export type {ThunkActionResult, ThunkAppDispatch};
export {ActionType};
