import { Link } from 'react-router-dom';
import { ProductCard } from '../product-card/product-card.component';
import {
  CategoryPreviewContainer,
  Title,
  Preview,
} from './category-preview.styles';

export const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <Title to={title}>{title.toUpperCase()}</Title>
      </h2>
      <Preview>
        {products.slice(0, 4).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Preview>
    </CategoryPreviewContainer>
  );
};