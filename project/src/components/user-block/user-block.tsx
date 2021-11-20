import {memo} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AuthorizationStatus} from '../../const';
import {logoutAction} from '../../store/api-actions';
import {State} from '../../types/state';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';
import { getAuthorizationStatus } from '../../selectors/user-process-selectors';

function UserBlock(): JSX.Element {
  const auth = useSelector((state: State) => getAuthorizationStatus(state));

  const dispatch = useDispatch();
  const handleLogoutClick = (evt: React.MouseEvent) => {
    evt.preventDefault();
    dispatch(logoutAction());
  };
  return (
    <ul className="user-block" style={{ minHeight: 63 }}>
      {auth === AuthorizationStatus.Auth ?
        (
          <>
            <li className="user-block__item">
              <Link to={AppRoute.MyList}>
                <div className="user-block__avatar">
                  <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
                </div>
              </Link>
            </li>
            <li className="user-block__item">
              <span className="user-block__link" onClick={handleLogoutClick}>Sign out</span>
            </li>
          </>
        )  : (
          <li className="user-block__item">
            <Link to={AppRoute.SignIn} className="user-block__link">Sign In</Link>
          </li>
        )}
    </ul>);
}

export default memo(UserBlock);
