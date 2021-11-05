import {useSelector} from 'react-redux';
import {useParams} from 'react-router';
import {State} from '../../types/state';
import {getCurrentFilm} from '../../utils/common';

const styles = {left: '30%'};

function PlayerScreen(): JSX.Element {
  const films = useSelector((state: State) => state.films);

  const {id} = useParams<{ id: string }>();
  const currentFilm = getCurrentFilm(films, id);

  return (
    <div className="player">
      <video src={currentFilm.videoLink} className="player__video" poster={currentFilm.image}></video>

      <button type="button" className="player__exit">Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value="30" max="100"></progress>
            <div className="player__toggler" style={styles}>Toggler</div>
          </div>
          <div className="player__time-value">1:30:29</div>
        </div>

        <div className="player__controls-row">
          <button type="button" className="player__play">
            <svg viewBox="0 0 19 19" width="19" height="19">
              <use xlinkHref="#play-s"></use>
            </svg>
            <span>Play</span>
          </button>
          <div className="player__name">{currentFilm.title}</div>

          <button type="button" className="player__full-screen">
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
