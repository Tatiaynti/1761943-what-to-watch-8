import {Actions, ActionType} from '../../types/action';
import {Film, FilmFromServerType} from '../../types/film';
import {GenreList} from '../../types/genres';
import {Review} from '../../types/reviews';
import {FilmData} from '../../types/state';
import {adaptToClient} from '../../utils/common';

const initialState: FilmData = {
  genre: GenreList.AllGenres,
  films: [],
  promoFilm: null,
  currentFilm: {} as Film,
  isDataLoaded: true,
  favoriteFilms: [],
  similarFilms: [],
  comments: [],
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
    case ActionType.LoadFavoritesList: {
      return {...state, favoriteFilms: action.payload as Film[]};
    }
    case ActionType.LoadSimilarFilms: {
      return {...state, similarFilms: action.payload as Film[]};
    }
    case ActionType.LoadComments:
      return {...state, comments: action.payload as Review[]};
    default: {
      return state;
    }
  }
};

export {filmData};
