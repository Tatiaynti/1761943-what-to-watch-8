import {SyntheticEvent, useRef, useState} from 'react';
import {useSelector} from 'react-redux';
import {generatePath, useHistory, useParams} from 'react-router';
import {AppRoute} from '../../const';
import {State} from '../../types/state';
import {convertSecondsToHours, getCurrentFilm} from '../../utils/common';
import Spinner from '../spinner/spinner';

function PlayerScreen(): JSX.Element {
  const films = useSelector(({DATA}: State) => DATA.films);
  const {id} = useParams<{ id: string }>();
  const history = useHistory();

  const videoRef = useRef<HTMLVideoElement>(null);
  const currentFilm = getCurrentFilm(films, id);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isVideoLoading, setIsVideoLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [time, setTime] = useState('00:00');

  const waitingHandler = () => {
    setIsVideoLoading(true);
  };

  const loadedDataHandler = () => {
    setIsVideoLoading(false);
  };

  const playingHandler = () => {
    setIsVideoLoading(false);
  };

  const timeUpdateHandler = (evt: SyntheticEvent<HTMLVideoElement>) => {
    const {currentTarget} = evt;
    const percentage = currentTarget.currentTime * 100 / currentTarget.duration;
    const timeElapsed = convertSecondsToHours(currentTarget.duration - currentTarget.currentTime);

    setTime(timeElapsed);
    setProgress(percentage);
  };

  const playButtonClickHandler = () => {
    if (videoRef && videoRef.current) {
      const player = videoRef.current;

      if (videoRef.current.paused) {
        player.play();
        setIsPlaying(true);
      } else {
        player.pause();
        setIsPlaying(false);
      }
    }
  };

  const fullScreenClickHandler = () => {
    if (videoRef && videoRef.current) {
      videoRef.current.requestFullscreen();
    }
  };

  const exitClickHandler = () => {
    history.push(generatePath(AppRoute.Film, {id: currentFilm.id}));
  };

  const playHandler = () => {
    setIsPlaying(true);
  };

  const pauseHandler = () => {
    setIsPlaying(false);
  };

  return (
    <div className="player">
      {(isVideoLoading) && <Spinner />}
      {
        currentFilm &&
  <video
    ref={videoRef}
    src={currentFilm.videoLink}
    className="player__video"
    poster={currentFilm.image}
    autoPlay
    onPlay={playHandler}
    onPause={pauseHandler}
    onTimeUpdate={timeUpdateHandler}
    onWaiting={waitingHandler}
    onPlaying={playingHandler}
    onLoadedData={loadedDataHandler}
  />
      }

      <button type="button" className="player__exit" onClick={exitClickHandler}>Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={progress} max="100" ></progress>
            <div className="player__toggler" style={{ left: `${progress}%`}}>Toggler</div>
          </div>
          <div className="player__time-value">{time}</div>
        </div>

        <div className="player__controls-row">
          <button type="button" className="player__play" onClick={playButtonClickHandler}>
            <svg viewBox="0 0 19 19" width="19" height="19">
              { isPlaying ? <use xlinkHref="#pause"></use> : <use xlinkHref="#play-s"/>}
            </svg>
            <span>Play</span>
          </button>
          <div className="player__name">{currentFilm.title}</div>

          <button type="button" className="player__full-screen" onClick={fullScreenClickHandler}>
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default PlayerScreen;
