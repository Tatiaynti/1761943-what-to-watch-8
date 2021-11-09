import {AuthorizationStatus} from '../const';
import {Film, FilmFromServerType} from '../types/film';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';

dayjs.extend(duration);

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
      'scoresCount': film.scores_count,
    };
  return adaptedFilm;
}

const isCheckedAuth = (authorizationStatus: AuthorizationStatus): boolean =>
  authorizationStatus === AuthorizationStatus.Unknown;

const getCurrentFilm = (filmsArray: Film[], id: string): any =>
  filmsArray.find((filmItem) => filmItem.id === Number(id)) || ({} as Film);

const getFilmRatingDescription = (rating: number): string => {
  if (rating >= 0 && rating < 3) {
    return 'Bad';
  }

  if (rating >= 3 && rating < 5) {
    return 'Normal';
  }

  if (rating >= 5 && rating < 8) {
    return 'Good';
  }

  if (rating >= 8 && rating < 10) {
    return 'Very good';
  }

  if (rating === 10) {
    return 'Awesome';
  }

  return 'Unknown';
};

const formatDate = (date: Date, format: string): string =>
  dayjs(date).format(format).toString();

const convertMinutesToHours = (period: number): string => {
  if (period === 0) {
    return '00m';
  }

  const [hours, minutes] = dayjs
    .duration(period, 'minutes')
    .format('HH-mm')
    .split('-');

  const hoursOutput = parseInt(hours, 10) > 0 ? `${hours}h` : '';
  const minutesOutput = parseInt(minutes, 10) > 0 ? `${minutes}m` : '';

  return `${hoursOutput} ${minutesOutput}`;
};

export {adaptToClient, isCheckedAuth, getCurrentFilm, getFilmRatingDescription, convertMinutesToHours, formatDate};
