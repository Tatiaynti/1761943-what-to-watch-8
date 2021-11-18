import {SyntheticEvent, useRef, useState} from 'react';
import {useSelector} from 'react-redux';
import {generatePath, useHistory, useParams} from 'react-router';
import {AppRoute} from '../../const';
import { getFilms } from '../../selectors/film-data-selectors';
import {State} from '../../types/state';
import {convertSecondsToHours, getCurrentFilm} from '../../utils/common';
import Spinner from '../spinner/spinner';

function PlayerScreen(): JSX.Element {
  const films = useSelector((state: State) => getFilms(state));
  const {id} = useParams<{ id: string }>();
  const history = useHistory();

  const videoRef = useRef<HTMLVideoElement>(null);
  const currentFilm = getCurrentFilm(films, id);

  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isVideoLoading, setIsVideoLoading] = useState<boolean>(true);
  const [progress, setProgress] = useState<number>(0);
  const [time, setTime] = useState<string>('00:00');

  const handleWaitLoading = () => {
    setIsVideoLoading(true);
  };

  const handleLoadedData = () => {
    setIsVideoLoading(false);
  };

  const handlePlaying = () => {
    setIsVideoLoading(false);
  };

  const handleTimeUpdate = (evt: SyntheticEvent<HTMLVideoElement>) => {
    const {currentTarget} = evt;
    const percentage = currentTarget.currentTime * 100 / currentTarget.duration;
    const timeElapsed = convertSecondsToHours(currentTarget.duration - currentTarget.currentTime);

    setTime(timeElapsed);
    setProgress(percentage);
  };

  const handlePlayButtonClick = () => {
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

  const handleFullScreenClick = () => {
    if (videoRef && videoRef.current) {
      videoRef.current.requestFullscreen();
    }
  };

  const handleExitClick = () => {
    history.push(generatePath(AppRoute.Film, {id: currentFilm.id}));
  };

  const handlPlayButton = () => {
    setIsPlaying(true);
  };

  const handlePauseButton = () => {
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
    onPlay={handlPlayButton}
    onPause={handlePauseButton}
    onTimeUpdate={handleTimeUpdate}
    onWaiting={handleWaitLoading}
    onPlaying={handlePlaying}
    onLoadedData={handleLoadedData}
  />
      }

      <button type="button" className="player__exit" onClick={handleExitClick}>Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={progress} max="100" ></progress>
            <div className="player__toggler" style={{ left: `${progress}%`}}>Toggler</div>
          </div>
          <div className="player__time-value">{time}</div>
        </div>

        <div className="player__controls-row">
          <button type="button" className="player__play" onClick={handlePlayButtonClick}>
            <svg viewBox="0 0 19 19" width="19" height="19">
              { isPlaying ? <use xlinkHref="#pause"></use> : <use xlinkHref="#play-s"/>}
            </svg>
            <span>Play</span>
          </button>
          <div className="player__name">{currentFilm.title}</div>

          <button type="button" className="player__full-screen" onClick={handleFullScreenClick}>
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
