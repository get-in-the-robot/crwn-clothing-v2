import { useContext } from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { CartContext } from '../../contexts/cart.context';
import './cart-icon.styles.scss';

export const CartIcon = () => {
  const { setCartOpen, totalQuantity } = useContext(CartContext);

  const cartOpenToggle = () => setCartOpen((prevState) => !prevState);

  return (
    <div onClick={cartOpenToggle} className="cart-icon-container">
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{totalQuantity}</span>
    </div>
  );
};
