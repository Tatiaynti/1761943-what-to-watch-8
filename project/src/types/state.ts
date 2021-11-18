import {AuthorizationStatus} from '../const';
import {RootState} from '../store/root-reducer';
import {Film} from './film';
import {GenreList} from './genres';

type UserProcess = {
  authorizationStatus: AuthorizationStatus,
};

type FilmData = {
  genre: GenreList,
  films: Film[],
  promoFilm: Film | null,
  currentFilm: Film,
  isDataLoaded: boolean,
};

export type {UserProcess, FilmData};
export type State = RootState;
