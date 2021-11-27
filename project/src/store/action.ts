import { createAction } from '@reduxjs/toolkit';
import {AppRoute, AuthorizationStatus} from '../const';
import {ActionType} from '../types/action';
import {Film, FilmFromServerType} from '../types/film';
import {GenreList} from '../types/genres';
import {Review} from '../types/reviews';

const setGenre = createAction(
  ActionType.ChangeGenre,
  (genre: GenreList) => ({
    payload: {genre},
  }),
);

const loadFilms = createAction(
  ActionType.LoadFilms,
  (films: FilmFromServerType[]) => ({
    payload: {films},
  }),
);

const loadPromoFilm = createAction(
  ActionType.LoadPromoFilm,
  (film: Film) => ({
    payload: {film},
  }),
);

const requireAuthorization = createAction(
  ActionType.RequireAuthorization,
  (authStatus: AuthorizationStatus) => ({
    payload: authStatus,
  }),
);

const requireLogout = createAction(ActionType.RequireLogout);

const redirectToRoute = createAction(
  ActionType.RedirectToRoute,
  (url: AppRoute) => ({
    payload: url,
  }),
);

const updateFilm = createAction(
  ActionType.UpdateFilm,
  (film: Film) => ({
    payload: {film},
  }),
);

const setFavoritesList = createAction(
  ActionType.LoadFavoritesList,
  (films: Film[]) => ({
    payload: films,
  }),
);

const loadSimilarFilms = createAction(
  ActionType.LoadSimilarFilms,
  (films: Film[]) => ({
    payload: films,
  }),
);

const loadComments = createAction(
  ActionType.LoadComments,
  (comments: Review[]) => ({
    payload: comments,
  }),
);

export {setGenre, loadFilms, requireAuthorization, requireLogout, redirectToRoute, loadPromoFilm, updateFilm, setFavoritesList, loadSimilarFilms, loadComments};
