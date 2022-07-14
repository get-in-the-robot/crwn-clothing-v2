import { useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { signOutUser } from '../../utils/firebase.utils';

import { ReactComponent as CrownLogo } from '../../assets/crown.svg';
import { CartIcon } from '../../components/cart-icon/cart-icon.component';

import { UserContext } from '../../contexts/user.context';
import { CartContext } from '../../contexts/cart.context';
import { CartDropdown } from '../../components/cart-dropdown/cart-dropdown.component';
import {
  NavLink,
  NavLinksContainer,
  NavigationContainer,
  LogoContainer,
} from './navigation.styles';

export const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { cartOpen } = useContext(CartContext);

  const signOutHandler = async () => signOutUser();

  return (
    <>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrownLogo />
        </LogoContainer>

        <NavLinksContainer>
          <NavLink to="/store">STORE</NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={signOutHandler}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">SIGN IN</NavLink>
          )}

          <CartIcon />
        </NavLinksContainer>
        {cartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </>
  );
};
