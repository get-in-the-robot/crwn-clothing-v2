import {
  BackgroundImage,
  DirectoryItemContainer,
  DirectoryBodyContainer,
} from './directory-item.styles.jsx';
import { useNavigate } from 'react-router-dom';

export const DirectoryItem = ({ directory }) => {
  const { imageUrl, title, route } = directory;
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);

  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <DirectoryBodyContainer>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </DirectoryBodyContainer>
    </DirectoryItemContainer>
  );
};
