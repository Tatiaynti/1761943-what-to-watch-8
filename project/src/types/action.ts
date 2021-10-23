import {setGenre} from '../store/action';

export enum ActionType {
  ChangeGenre = 'changeGenre',
}

export type Actions = ReturnType<typeof setGenre>;
