import {
  CartImage,
  CartItemContainer,
  ItemDetails,
  Name,
} from './cart-item.styles';

export const CartItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <CartItemContainer>
      <CartImage src={imageUrl} alt={name} />
      <ItemDetails>
        <Name>{name}</Name>
        <span>
          {quantity} x ${price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};
