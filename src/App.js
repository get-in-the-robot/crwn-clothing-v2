import { Routes, Route } from 'react-router-dom';
import { Navigation } from './routes/navigation.component';
import { Home } from './routes/home.component';
import { Shop } from './components/shop.component';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="store" element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default App;
