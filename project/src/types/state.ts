import {AuthorizationStatus} from '../const';
import {RootState} from '../store/root-reducer';
import {Film} from './film';
import {GenreList} from './genres';
import {Review} from './reviews';

type UserProcess = {
  authorizationStatus: AuthorizationStatus,
};

type FilmData = {
  genre: GenreList,
  films: Film[],
  promoFilm: Film | null,
  currentFilm: Film,
  isDataLoaded: boolean,
  favoriteFilms: Film[],
  similarFilms: Film[],
  comments: Review[],
};

export type {UserProcess, FilmData};
export type State = RootState;
