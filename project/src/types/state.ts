import {AuthorizationStatus} from '../const';
import {Film} from './film';
import {GenreList} from './genres';

type State = {
  genre: GenreList,
  films: Film[],
  authorizationStatus: AuthorizationStatus,
  isDataLoaded: boolean,
};

export type {State};
