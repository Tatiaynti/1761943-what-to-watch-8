import {Link} from 'react-router-dom';

function Logo(): JSX.Element {
  return (
    <Link className="logo__link" to="/">
      <a className="logo__link" href="/">
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </a>
    </Link>
  );
}

export default Logo;
