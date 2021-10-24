import {Film} from './film';
import {GenreList} from './genres';

type State = {
  genre: GenreList,
  filmList: Film[],
};

export type {State};
