import { BrowserRouter, Route, Routes } from 'react-router';
import routes from '@constants/routes';
import { Header } from '@pages/Header';
import { Hero } from '@pages/Hero';
import { Catalog } from '@pages/Catalog';
import { CatalogItem } from '@pages/CatalogItem';
import ViewTransitionWrapper from '@components/ViewTransitionWrapper';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <ViewTransitionWrapper>
        <Routes>
          <Route path={routes.home()} element={<Hero />} />
          <Route path={routes.catalog()} element={<Catalog />} />
          <Route path={routes.catalogItem(':id')} element={<CatalogItem />} />
        </Routes>
      </ViewTransitionWrapper>
    </BrowserRouter>
  );
}

export default App;
