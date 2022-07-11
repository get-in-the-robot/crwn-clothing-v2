import './product-card.styles.scss';
import { Button } from '../button/button.component';
import { CartContext } from '../../contexts/cart.context';
import { useContext } from 'react';

export const ProductCard = ({ product }) => {
  const { name, imageUrl, price } = product;
  const { addItemToCart } = useContext(CartContext);

  const addItemHandler = () => addItemToCart(product);

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button onClick={addItemHandler} buttonType="inverted">
        Add to cart
      </Button>
    </div>
  );
};
