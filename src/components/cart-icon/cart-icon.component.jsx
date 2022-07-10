import { useContext } from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { CartContext } from '../../contexts/cart-dropdown.context';
import './cart-icon.styles.scss';

export const CartIcon = () => {
  const { setCartOpen } = useContext(CartContext);

  const cartOpenToggle = () => setCartOpen((prevState) => !prevState);

  return (
    <div onClick={cartOpenToggle} className="cart-icon-container">
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};
