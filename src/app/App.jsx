import { Route, Routes } from 'react-router';

import { HomePage } from '../pages/Home';
import { FavoritesPage } from '../pages/Favorites';
import { NotFound } from '../pages/NotFound';

import { Header } from '../widgets/header';

import './styles/index.css';

const App = () => {
  return (
    <>
      <Header />
      <main>
        <div className="main__inner container">
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="favorites" element={<FavoritesPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </main>
    </>
  );
};

export default App;
