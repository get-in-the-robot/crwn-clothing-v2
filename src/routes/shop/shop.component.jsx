import { ProductsContext } from '../../contexts/products.context';
import { useContext } from 'react';
import { ProductCard } from '../../components/product-card/product-card.component';
import './shop.styles.scss';

export const Shop = () => {
  const productsCtx = useContext(ProductsContext);
  const [products] = productsCtx;

  return (
    <div className="products-container">
      {products.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </div>
  );
};
