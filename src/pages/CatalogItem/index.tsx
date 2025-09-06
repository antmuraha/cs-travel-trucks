import routes from '@constants/routes';
import { CardTruckDetails } from '@components/CardTruckDetails';
import { QueryTabs } from '@controls/QueryTabs';
import { FeaturesBlock } from '@components/FeaturesBlock';
import { ReviewsBlock } from '@components/ReviewsBlock';
import { useCurrentTab } from '@hooks/useCurrentTab';

import styles from './index.module.css';
import { featureTab, reviewTab } from '@controls/QueryTabs/constants';
import { FormBook } from '../../forms/FormBook';

export const CatalogItem = () => {
  const tab = useCurrentTab();

  return (
    <main className={styles.catalogItem}>
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
          <FeaturesBlock className={tab === featureTab ? styles.active : ''} options={item} />
          <ReviewsBlock className={tab === reviewTab ? styles.active : ''} reviews={item.reviews} />
        </div>
        <FormBook className={styles.bookForm} />
      </div>
    </main>
  );
};

const item = {
  id: '4',
  name: 'Mighty Class C Large [MT]',
  price: 12000,
  rating: 4.4,
  location: 'Ukraine, Odesa',
  description:
    'Embark on a grand adventure with the Mighty Class C Large [MT], a spacious and powerful alcove-style motorhome designed for larger groups and families. This RV is not just a mode of transportation but a mobile haven with ample space and premium amenities to ensure a comfortable and enjoyable journey through picturesque landscapes and charming destinations.',
  form: 'alcove',
  length: '8.2m',
  width: '3.04m',
  height: '3.65m',
  tank: '208l',
  consumption: '25l/100km',
  transmission: 'automatic',
  engine: 'hybrid',
  AC: true,
  bathroom: true,
  kitchen: true,
  TV: true,
  radio: true,
  refrigerator: true,
  microwave: true,
  gas: true,
  water: true,
  gallery: [
    {
      thumb: 'https://ftp.goit.study/img/campers-test-task/4-1.webp',
      original: 'https://ftp.goit.study/img/campers-test-task/4-1.webp',
    },
    {
      thumb: 'https://ftp.goit.study/img/campers-test-task/4-2.webp',
      original: 'https://ftp.goit.study/img/campers-test-task/4-2.webp',
    },
    {
      thumb: 'https://ftp.goit.study/img/campers-test-task/4-3.webp',
      original: 'https://ftp.goit.study/img/campers-test-task/4-3.webp',
    },
  ],
  reviews: [
    {
      reviewer_name: 'Alice',
      reviewer_rating: 5,
      comment:
        'The Mighty Class C Large [MT] provided an exceptional experience for our family road trip. Spacious interiors, well-equipped kitchen, and comfortable beds made our journey memorable. Highly recommended for larger groups looking for a premium RV.',
    },
    {
      reviewer_name: 'Bob',
      reviewer_rating: 3,
      comment:
        'Decent motorhome, but had some issues with functionality. The kitchen facilities were good, but the gas supply seemed insufficient. Overall, a satisfactory experience for our group.',
    },
  ],
};
