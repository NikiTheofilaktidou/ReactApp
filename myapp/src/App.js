import { Routes, Route } from 'react-router-dom'
import AllCitiesPage from './pages/AllCities';
import FavoritesPage from './pages/Favorites';
import NewCitiesPage from './pages/NewCities';
import MainNavigation from './components/layout/MainNavigation';
import Layout from './components/layout/Layout';

function App() {
  return (
    <div>

      <Layout>
        <Routes>
          <Route path='/' element={<AllCitiesPage />} />
          <Route path='/new-cities' element={<NewCitiesPage />} />
          <Route path='/favorites' element={<FavoritesPage />} />
        </Routes>
      </Layout>

    </div>

  );
}

export default App;
