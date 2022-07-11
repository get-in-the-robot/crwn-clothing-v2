import { useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { signOutUser } from '../../utils/firebase.utils';

import { ReactComponent as CrownLogo } from '../../assets/crown.svg';
import { CartIcon } from '../../components/cart-icon/cart-icon.component';

import { UserContext } from '../../contexts/user.context';
import { CartContext } from '../../contexts/cart.context';
import { CartDropdown } from '../../components/cart-dropdown/cart-dropdown.component';
import './navigation.styles.scss';

export const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { cartOpen } = useContext(CartContext);

  const signOutHandler = async () => signOutUser();

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
          {currentUser ? (
            <span className="nav-link" onClick={signOutHandler}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}

          <CartIcon />
        </div>
        {cartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </>
  );
};
