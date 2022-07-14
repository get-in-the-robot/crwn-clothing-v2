import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import {
  CheckoutItemContainer,
  ImageContainer,
  CheckoutImage,
  Data,
  Quantity,
  Arrow,
  Value,
  RemoveButton,
} from './checkout-item.styles';

export const CheckoutItem = ({ item }) => {
  const { imageUrl, name, quantity, price } = item;

  const { removeItemFromCart, addItemToCart } = useContext(CartContext);

  const removeItemHandler = () => {
    removeItemFromCart(item, true);
  };

  const decreaseQuantityHandler = () => {
    removeItemFromCart(item);
  };
  const increaseQuantityHandler = () => {
    addItemToCart(item);
  };

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <CheckoutImage src={imageUrl} alt={name} />
      </ImageContainer>
      <Data>{name}</Data>
      <Quantity>
        <Arrow onClick={decreaseQuantityHandler}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={increaseQuantityHandler}>&#10095;</Arrow>
      </Quantity>
      <Data>{price}</Data>
      <RemoveButton onClick={removeItemHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};
