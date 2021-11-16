import {Actions, ActionType} from '../../types/action';
import {FilmFromServerType} from '../../types/film';
import {GenreList} from '../../types/genres';
import {FilmData} from '../../types/state';
import {adaptToClient} from '../../utils/common';

const initialState: FilmData = {
  genre: GenreList.AllGenres,
  films: [],
  promoFilm: null,
  currentFilm: null,
  isDataLoaded: true,
};

const filmData = (state = initialState, action: Actions): FilmData => {
  switch (action.type) {
    case ActionType.ChangeGenre: {
      return {...state, genre: action.payload.genre};
    }
    case ActionType.LoadFilms: {
      return {...state, films: action.payload.films.map(
        (film: FilmFromServerType) => adaptToClient(film))};
    }
    case ActionType.LoadPromoFilm: {
      return {...state, promoFilm: action.payload.film};
    }
    case ActionType.UpdateFilm: {
      return {...state, currentFilm: action.payload.film};
    }
    default: {
      return state;
    }
  }
};

export {filmData};
