import { useNavigate } from 'react-router';
import routes from '@constants/routes';
import useViewTransition from '@hooks/useViewTransition';
import { Button } from '../../controls/Button';

import styles from './index.module.css';

export const Hero = () => {
  const navigate = useNavigate();
  const startTransition = useViewTransition(() => {
    navigate(routes.catalog());
  });

  return (
    <div className={styles.hero}>
      <h1>Campers of your dreams</h1>
      <p>You can find everything you want in our catalog</p>
      <Button asNavLink to={routes.catalog()} className={styles.button} onClick={startTransition}>
        View Now
      </Button>
    </div>
  );
};
