import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';

function UserBlockLoggedOut(): JSX.Element {
  return (
    <div className="user-block">
      <Link to={AppRoute.SignIn} className="user-block__link">Sign in</Link>
    </div>
  );
}

export default UserBlockLoggedOut;
