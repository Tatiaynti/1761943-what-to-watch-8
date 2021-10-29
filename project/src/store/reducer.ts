import {AuthorizationStatus} from '../const';
import {Actions, ActionType} from '../types/action';
import {GenreList} from '../types/genres';
import {State} from '../types/state';

const initialState = {
  genre: GenreList.AllGenres,
  films: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  isDataLoaded: false,
};

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.ChangeGenre: {
      return {...state, genre: action.payload.genre};
    }
    case ActionType.LoadFilms: {
      return {...state, films: action.payload.films};
    }
    case ActionType.RequireAuthorization: {
      return {...state, authorizationStatus: action.payload, isDataLoaded: true};
    }
    case ActionType.RequireLogout: {
      return {...state, authorizationStatus: AuthorizationStatus.NoAuth};
    }
    default: {
      return state;
    }
  }
};

export {reducer};
