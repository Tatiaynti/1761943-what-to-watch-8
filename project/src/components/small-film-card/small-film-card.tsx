import {Film} from '../../types/film';
import {AppRoute} from '../../const';
import VideoPlayer from '../player/small-video-player';
import {useEffect, useRef, useState} from 'react';
import {generatePath} from 'react-router';
import { Link } from 'react-router-dom';

const TIMER_DELAY = 1000;

type FilmCardProps = {
  film: Film;
  onMouseEnter: (id: string) => void;
}

function FilmCardScreen(props: FilmCardProps): JSX.Element {
  const {film, onMouseEnter} = props;

  const [isPlay, setIsPlay] = useState<boolean>(false);
  const [isHover, setIsHover] = useState<boolean>(false);

  function handleFilmCardActive() {
    onMouseEnter(film.id.toString());
    setIsHover(true);
  }

  const timer = useRef<NodeJS.Timeout | null>(null);
  const clearTimer = () => {
    if (timer.current) {
      clearTimeout(timer.current);
      timer.current = null;
    }
  };

  useEffect(() => {
    clearTimer();
    if (!isHover) {
      setIsPlay(false);
    }
    if (isHover) {
      timer.current = setTimeout(() => setIsPlay(true), TIMER_DELAY);
    }
    return clearTimer;
  }, [isHover]);

  return (
    <article className="small-film-card catalog__films-card" id={`film-${film.id}`}
      onMouseEnter={() => handleFilmCardActive()}
      onMouseLeave={() => setIsHover(false)}
    >
      <div className="small-film-card__image">
        {
          isPlay ?
            <VideoPlayer
              previewSrc={film.preview}
            /> :
            <img src={film.image} alt="Johnny English" width="280" height="175" />
        }
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={generatePath(AppRoute.Film, {id: film.id})}>{film.title}</Link>
      </h3>
    </article>
  );
}

export default FilmCardScreen;
