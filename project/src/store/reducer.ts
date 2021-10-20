import {Actions, ActionType} from '../types/action';
import {State} from '../types/state';

const initialState = {
  genre: 'ALL_GENRES',
  filmList: 'FULL_LIST',
} as const;

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.ChangeGenreToAll:
      return {...state, genre: state.genre + action.payload};
    case ActionType.LoadList:
      return {...state, filmList: state.filmList};
    default:
      return state;
  }
};

export {reducer};
