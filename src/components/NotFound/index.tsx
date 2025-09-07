import styles from './index.module.css';

interface NotFoundProps {
  error?: string | null;
}

export const NotFound = ({ error }: NotFoundProps) => {
  return <div className={styles.notFound}>{error ? error : 'Items not found'}</div>;
};
