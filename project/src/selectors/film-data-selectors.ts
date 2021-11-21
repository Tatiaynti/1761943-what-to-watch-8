import { NameSpace } from '../store/root-reducer';
import { Film } from '../types/film';
import { GenreList } from '../types/genres';
import { State } from '../types/state';

const getGenre = (state: State): GenreList => state[NameSpace.Data].genre;
const getFilms = (state: State): Film[] => state[NameSpace.Data].films;
const getPromoFilm = (state: State): any => state[NameSpace.Data].promoFilm;
const getCurrentFilm = (state: State): Film | null => state[NameSpace.Data].currentFilm;
const getDataLoadingStatus = (state: State): boolean => state[NameSpace.Data].isDataLoaded;

export {getGenre, getFilms, getPromoFilm, getCurrentFilm, getDataLoadingStatus};
