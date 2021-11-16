import { NameSpace } from '../store/root-reducer';
import { Film } from '../types/film';
import { State } from '../types/state';

const getGenre = (state: State): any => state[NameSpace.data].genre;
const getFilms = (state: State): Film[] => state[NameSpace.data].films;
const getPromoFilm = (state: State): any => state[NameSpace.data].promoFilm;
const getCurrentFilm = (state: State): any => state[NameSpace.data].currentFilm;
const getDataLoadingStatus = (state: State): boolean => state[NameSpace.data].isDataLoaded;

export {getGenre, getFilms, getPromoFilm, getCurrentFilm, getDataLoadingStatus};
