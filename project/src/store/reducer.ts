import {films} from '../mocks/films';
import {Actions, ActionType} from '../types/action';
import {Genres} from '../types/genres';
import {State} from '../types/state';

const initialState = {
  genre: Genres.AllGenres,
  filmList: films,
} as const;

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.ChangeGenre:
      return {...state, genre: action.payload.genre};
    default:
      return state;
  }
};

export {reducer};
