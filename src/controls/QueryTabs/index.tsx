import { useSearchParams } from 'react-router';
import { defaultTab, featureTab, reviewTab, tabParamName } from './constants';
import styles from './index.module.css';

export const QueryTabs = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const tab = searchParams.get(tabParamName) || defaultTab;

  const handleTabClick = (tabName: string) => {
    setSearchParams({ [tabParamName]: tabName });
  };

  return (
    <div className={styles.queryTabs}>
      <div
        className={`${styles.queryTab} ${tab === featureTab ? styles.active : ''}`}
        onClick={() => handleTabClick(featureTab)}
      >
        Features
      </div>
      <div
        className={`${styles.queryTab} ${tab === reviewTab ? styles.active : ''}`}
        onClick={() => handleTabClick(reviewTab)}
      >
        Reviews
      </div>
    </div>
  );
};
