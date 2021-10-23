import {Film} from './film';
import {Genres} from './genres';

export type State = {
  genre: Genres,
  filmList: Film[],
};
