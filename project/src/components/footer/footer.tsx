import Logo from '../logo/logo';

function Footer(): JSX.Element {
  return (
    <footer className="page-footer">
      <div className="logo">
        <Logo />
      </div>

      <div className="copyright">
        <p>© 2021 What to watch Ltd.</p>
      </div>
    </footer>
  );
}

export default Footer;
