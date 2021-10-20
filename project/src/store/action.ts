import {ActionType, ChangeGenreToAllAction, LoadListAction} from '../types/action';

export const incrementGenre = (genre: string): ChangeGenreToAllAction => ({
  type: ActionType.ChangeGenreToAll,
  payload: genre,
});

export const IncrementList = (): LoadListAction => ({
  type: ActionType.LoadList,
});
