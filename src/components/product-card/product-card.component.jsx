import { Image, ProductCardContainer, Footer } from './product-card.styles.jsx';
import { Button } from '../button/button.component';
import { CartContext } from '../../contexts/cart.context';
import { useContext } from 'react';

export const ProductCard = ({ product }) => {
  const { name, imageUrl, price } = product;
  const { addItemToCart } = useContext(CartContext);

  const addItemHandler = () => addItemToCart(product);

  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={name} />
      <Footer>
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </Footer>
      <Button onClick={addItemHandler} buttonType="inverted">
        Add to cart
      </Button>
    </ProductCardContainer>
  );
};
