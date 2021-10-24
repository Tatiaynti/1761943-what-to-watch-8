import {setGenre} from '../store/action';

enum ActionType {
  ChangeGenre = 'changeGenre',
}

export type Actions = ReturnType<typeof setGenre>;
export {ActionType};
