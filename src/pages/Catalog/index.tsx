import routes from '@constants/routes';
import { useDataCatalogList } from '@redux/useData';
import useCatalogFiltersAsString from '@hooks/useCatalogFiltersAsString';
import { CardTruck } from '@components/CardTruck';
import { Loader } from '@components/Loader';
import { NotFound } from '@components/NotFound';
import { Filters } from '@controls/Filters';
import { Button } from '@controls/Button';

import styles from './index.module.css';

export const Catalog = () => {
  const filters = useCatalogFiltersAsString();
  const { items, onNextPage, ended, loading, error } = useDataCatalogList(filters);

  return (
    <main className={styles.catalog}>
      <Filters />
      <div className={styles.catalogContent}>
        <div className={styles.catalogItems}>
          {items.map(item => (
            <CardTruck
              key={item.id}
              id={item.id}
              to={routes.catalogItem(item.id)}
              title={item.name}
              image={item.gallery[0]?.thumb}
              description={item.description}
              price={item.price}
              location={item.location}
              rating={item.rating}
              reviews={item.reviews.length}
              features={item}
            />
          ))}
        </div>
        {items.length === 0 ? (
          <>
            {loading && <Loader />}
            {!loading && <NotFound error={error} />}
          </>
        ) : (
          <>
            {!ended && (
              <Button variant="secondary" onClick={onNextPage} disabled={loading}>
                {loading ? 'Loading...' : 'Load more'}
              </Button>
            )}
          </>
        )}
      </div>
    </main>
  );
};
