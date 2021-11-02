import Logo from '../logo/logo';
import {UserBlock} from '../user-block/user-block';

function Header(): JSX.Element {
  return (
    <header className="page-header user-page__head">
      <div className="logo">
        <Logo />
      </div>

      <h1 className="page-title user-page__title">My list</h1>
      <UserBlock/>
    </header>
  );
}

export default Header;
