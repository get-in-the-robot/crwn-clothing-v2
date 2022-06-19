import { Routes, Route } from 'react-router-dom';
import { Navigation } from './routes/navigation/navigation.component';
import { Home } from './routes/home/home.component';
import { Shop } from './components/shop.component';
import { SignIn } from './routes/sign-in/siginIn.component';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="store" element={<Shop />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
