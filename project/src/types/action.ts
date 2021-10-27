import {loadFilms, requireAuthorization, requireLogout, setGenre} from '../store/action';

enum ActionType {
  ChangeGenre = 'changeGenre',
  LoadFilms = 'loadFilms',
  RequireAuthorization = 'user/requireAuthorization',
  RequireLogout = 'user/requireLogout',
}

export type Actions =
  | ReturnType<typeof setGenre>
  | ReturnType<typeof loadFilms>
  | ReturnType<typeof requireAuthorization>
  | ReturnType<typeof requireLogout>;
export {ActionType};
