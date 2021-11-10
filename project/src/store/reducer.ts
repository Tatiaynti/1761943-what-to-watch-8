import {AuthorizationStatus} from '../const';
import {Actions, ActionType} from '../types/action';
import {FilmFromServerType} from '../types/film';
import {GenreList} from '../types/genres';
import {State} from '../types/state';
import {adaptToClient} from '../utils/common';

const initialState = {
  genre: GenreList.AllGenres,
  films: [],
  promoFilm: null,
  authorizationStatus: AuthorizationStatus.Unknown,
  isDataLoaded: false,
};

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.ChangeGenre: {
      return {...state, genre: action.payload.genre};
    }
    case ActionType.LoadFilms: {
      return {...state, films: action.payload.films.map(
        (film: FilmFromServerType) => adaptToClient(film))};
    }
    case ActionType.RequireAuthorization: {
      return {...state, authorizationStatus: action.payload, isDataLoaded: true};
    }
    case ActionType.RequireLogout: {
      return {...state, authorizationStatus: AuthorizationStatus.NoAuth};
    }
    case ActionType.LoadPromoFilm: {
      return {...state, promoFilm: action.payload.film};
    }
    default: {
      return state;
    }
  }
};

export {reducer};
