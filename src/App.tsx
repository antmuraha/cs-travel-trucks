import { BrowserRouter, Route, Routes } from 'react-router';
import routes from '@constants/routes';
import { Header } from '@layout/Header';
import { Catalog } from '@layout/Catalog';
import { CatalogItem } from '@layout/CatalogItem';
import ViewTransitionWrapper from '@components/ViewTransitionWrapper';
import { Hero } from '@controls/Hero';

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
