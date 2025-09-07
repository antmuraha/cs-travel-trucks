import routes from '@constants/routes';
import { useCurrentTab } from '@hooks/useCurrentTab';
import { CardTruckDetails } from '@components/CardTruckDetails';
import ScrollToTop from '@components/ScrollToTop';
import { FeaturesBlock } from '@components/FeaturesBlock';
import { ReviewsBlock } from '@components/ReviewsBlock';
import { QueryTabs } from '@controls/QueryTabs';
import { featureTab, reviewTab } from '@controls/QueryTabs/constants';
import { FormBook } from '../../forms/FormBook';

import styles from './index.module.css';
import { useDataCatalogItem } from '@redux/useData';
import { useParams } from 'react-router';
import { Loader } from '@components/Loader';
import { NotFound } from '@components/NotFound';

export const CatalogItem = () => {
  const { id } = useParams();
  const { item, loading, error } = useDataCatalogItem(id);
  const tab = useCurrentTab();

  return (
    <main className={styles.catalogItem}>
      <ScrollToTop />
      {item ? (
        <>
          <CardTruckDetails
            key={item.id}
            id={item.id}
            to={routes.catalogItem(item.id)}
            title={item.name}
            images={item.gallery.map(img => img.thumb)}
            description={item.description}
            price={item.price}
            location={item.location}
            rating={item.rating}
            reviews={item.reviews.length}
          />
          <QueryTabs className={styles.tabs} />
          <div className={styles.itemDetails}>
            <div className={styles.detailsContent}>
              <FeaturesBlock
                className={tab === featureTab ? styles.active : ''}
                options={item}
                form={item.form}
                length={item.length}
                width={item.width}
                height={item.height}
                tank={item.tank}
                consumption={item.consumption}
              />
              <ReviewsBlock className={tab === reviewTab ? styles.active : ''} reviews={item.reviews} />
            </div>
            <FormBook className={styles.bookForm} />
          </div>
        </>
      ) : (
        <>
          {loading && <Loader />}
          {!loading && <NotFound error={error} />}
        </>
      )}
    </main>
  );
};
