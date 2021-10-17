import {Film} from '../../types/film';
import {AppRoute} from '../../const';
import {useHistory} from 'react-router';
import VideoPlayer from '../video-player/video-player';
import {useEffect, useRef, useState} from 'react';

const TIMER_DELAY = 1000;

type FilmCardProps = {
  film: Film;
  onMouseEnter: (id: string) => void;
}

function FilmCardScreen(props: FilmCardProps): JSX.Element {
  const {film, onMouseEnter} = props;
  const history = useHistory();

  const [play, setPlay] = useState(false);
  const [hover, setHover] = useState(false);

  const timer = useRef<NodeJS.Timeout | null>(null);
  const clearTimer = () => {
    if (timer.current) {
      clearTimeout(timer.current);
      timer.current = null;
    }
  };

  useEffect(() => {
    clearTimer();
    if (!hover) {
      setPlay(false);
    }
    if (hover) {
      timer.current = setTimeout(() => setPlay(true), TIMER_DELAY);
    }
    return clearTimer;
  }, [hover]);

  return (
    <article className="small-film-card catalog__films-card" id={`film-${film.id}`}  onMouseEnter={() => {
      onMouseEnter(film.id);
      setHover(true);
    }}
    onMouseLeave={() => setHover(false)}
    >
      <div className="small-film-card__image">
        {
          play ?
            <VideoPlayer
              previewSrc={film.preview}
            /> :
            <img src={film.image} alt="Johnny English" width="280" height="175" />
        }
      </div>
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" onClick={() => history.push(AppRoute.Film.replace(':id', film.id))}>{film.title}</a>
      </h3>
    </article>
  );
}

export default FilmCardScreen;
