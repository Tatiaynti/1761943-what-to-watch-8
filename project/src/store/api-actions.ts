import {APIRoute, AuthorizationStatus, AppRoute} from '../const';
import {dropToken, setToken, Token} from '../services/token';
import {ThunkActionResult} from '../types/action';
import {AuthData} from '../types/auth-data';
import {FilmFromServerType} from '../types/film';
import {Review, ReviewForm} from '../types/reviews';
import {loadFilms, requireAuthorization, requireLogout, redirectToRoute, loadPromoFilm, updateFilm, setFavoritesList, loadSimilarFilms} from './action';
import {api as apiSettled} from '../index';
import {adaptToClient} from '../utils/common';

const fetchFilmAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get<FilmFromServerType[]>(APIRoute.Films);
    dispatch(loadFilms(data));
  };

const fetchComments = async (filmId: string): Promise<Review[]> => {
  const {data} = await apiSettled.get<Review[]>(APIRoute.Comments(filmId));
  return data;
};

const postComments = async (filmId: string, comment: ReviewForm): Promise<void> => {
  await apiSettled.post<Review[]>(APIRoute.Comments(filmId), comment);
};

const fetchRelatedFilms = (filmId: string): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get<FilmFromServerType[]>(APIRoute.RelatedFilms(filmId));
    const adaptedFilms = data.map((film) => adaptToClient(film));
    dispatch(loadSimilarFilms(adaptedFilms));
  };

const fetchFavorites = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get<FilmFromServerType[]>(APIRoute.Favorite);
    const adaptedFilms = data.map((film) => adaptToClient(film));
    dispatch(setFavoritesList(adaptedFilms));
  };

const fetchPromoFilm = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get<FilmFromServerType>(APIRoute.PromoFilm);
    dispatch(loadPromoFilm(adaptToClient(data)));
  };

const checkAuthAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    await api.get(APIRoute.Login)
      .then(() => {
        dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
      });
  };

const loginAction = ({login: email, password}: AuthData): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    const {data: {token}} = await api.post<{token: Token}>(APIRoute.Login, {email, password});
    setToken(token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(redirectToRoute(AppRoute.Main));
  };

const logoutAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireLogout());
  };

const changeFavoriteStatus = (id: number, status: number): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    const {data} = await api.post<FilmFromServerType>(APIRoute.FavoriteStatus(id, status));
    dispatch(updateFilm(adaptToClient(data)));
  };

export {fetchFilmAction, checkAuthAction, loginAction, logoutAction, fetchComments, fetchRelatedFilms, postComments, fetchPromoFilm, changeFavoriteStatus, fetchFavorites};
