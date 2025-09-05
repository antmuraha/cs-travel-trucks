import { useSearchParams } from 'react-router';
import { defaultTab, tabParamName } from '@controls/QueryTabs/constants';

export const useCurrentTab = () => {
  const [searchParams] = useSearchParams();
  return searchParams.get(tabParamName) || defaultTab;
};
