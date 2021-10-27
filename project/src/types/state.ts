import {Film} from './film';
import {GenreList} from './genres';

type State = {
  genre: GenreList,
  films: Film[],
};

export type {State};
