import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../button/button.component';
import { CartItem } from '../cart-item/cart-item.component';
import { CartContext } from '../../contexts/cart.context';
import {
  CartDropdownContainer,
  CartItemsContainer,
  EmptyMessage,
} from './cart-dropdown.styles';
import { BUTTON_TYPE_CLASSES } from '../button/button.component';

export const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate('/checkout');
  };

  return (
    <CartDropdownContainer>
      <CartItemsContainer>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <EmptyMessage>Empty</EmptyMessage>
        )}
      </CartItemsContainer>
      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </CartDropdownContainer>
  );
};
