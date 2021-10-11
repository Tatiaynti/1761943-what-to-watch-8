import Logo from '../logo/logo';

function Header(): JSX.Element {
  return (
    <header className="page-header user-page__head">
      <div className="logo">
        <Logo />
      </div>

      <h1 className="page-title user-page__title">My list</h1>

      <ul className="user-block">
        <li className="user-block__item">
          <div className="user-block__avatar">
            <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
          </div>
        </li>
        <li className="user-block__item">
          <a className="user-block__link" href="/">Sign out</a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
