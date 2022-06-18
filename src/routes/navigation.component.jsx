import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as CrownLogo } from '../assets/crown.svg';
import './navigation.styles.scss';

export const Navigation = () => {
  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrownLogo />
        </Link>

        <div className="nav-links-container">
          <Link className="nav-link" to="/store">
            STORE
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};
