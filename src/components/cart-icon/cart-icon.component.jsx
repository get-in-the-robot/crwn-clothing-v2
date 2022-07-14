import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import { CartIconContainer, ShoppingIcon, ItemCount } from './cart-icon.styles';

export const CartIcon = () => {
  const { setCartOpen, totalQuantity } = useContext(CartContext);

  const cartOpenToggle = () => setCartOpen((prevState) => !prevState);

  return (
    <CartIconContainer onClick={cartOpenToggle}>
      <ShoppingIcon />
      <ItemCount>{totalQuantity}</ItemCount>
    </CartIconContainer>
  );
};
