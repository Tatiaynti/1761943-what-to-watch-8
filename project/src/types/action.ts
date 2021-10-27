import {loadFilms, setGenre} from '../store/action';

enum ActionType {
  ChangeGenre = 'changeGenre',
  LoadFilms = 'loadFilms',
}

export type Actions = ReturnType<typeof setGenre> | ReturnType<typeof loadFilms>;
export {ActionType};
