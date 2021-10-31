import {useSelector} from 'react-redux';
import { AuthorizationStatus } from '../../const';
import {State} from '../../types/state';
import Logo from '../logo/logo';
import UserBlockLoggedIn from '../user-block/user-block-logged-in';
import UserBlockLoggedOut from '../user-block/user-block-logged-out';

function Header(): JSX.Element {
  const auth = useSelector((state: State) => state.authorizationStatus);

  return (
    <header className="page-header user-page__head">
      <div className="logo">
        <Logo />
      </div>

      <h1 className="page-title user-page__title">My list</h1>
      {auth === AuthorizationStatus.Auth ? <UserBlockLoggedIn /> : <UserBlockLoggedOut />}
    </header>
  );
}

export default Header;
