import {AuthorizationStatus} from '../const';
import {Film, FilmFromServerType} from '../types/film';

function adaptToClient(film: FilmFromServerType): Film {

  const adaptedFilm =
    {
      'rate': film.rating,
      'releaseYear': film.released,
      'title': film.name,
      'poster': film.poster_image,
      'image': film.background_image,
      'backgroundColor': film.background_color,
      'videoLink': film.video_link,
      'preview': film.preview_video_link,
      'runtime': film.run_time,
      'isFavorite': film.is_favorite,
      'id': film.id,
      'genre': film.genre,
      'description': film.description,
      'director': film.director,
      'starring': film.starring,
    };
  return adaptedFilm;
}

const isCheckedAuth = (authorizationStatus: AuthorizationStatus): boolean =>
  authorizationStatus === AuthorizationStatus.Unknown;

const getCurrentFilm = (filmsArray: Film[], id: string): any =>
  filmsArray.find((filmItem) => filmItem.id === Number(id)) || ({} as Film);

export {adaptToClient, isCheckedAuth, getCurrentFilm};
