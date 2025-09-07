import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';
import useIsMobile from '@hooks/useIsMobile';
import type { RootState, AppDispatch } from './store';
import { fetchCatalogItem, fetchCatalogList, fetchCatalogListMore } from './fetch';
import { selectorCatalogItem, selectorCatalogList } from './catalogSlice';

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
const useAppDispatch = () => useDispatch<AppDispatch>();

const PAGE_LIMIT_MOBILE = 3;
const PAGE_LIMIT_DESKTOP = 6;

export const useDataCatalogList = (filter: string) => {
  const isMobile = useIsMobile();
  // Dynamic page limit based on screen size
  const pageLimit = isMobile ? PAGE_LIMIT_MOBILE : PAGE_LIMIT_DESKTOP;

  const dispatch = useAppDispatch();
  const { items, page, ended, loading, error } = useAppSelector(state => selectorCatalogList(state, filter));

  useEffect(() => {
    // Dispatch an action to load items based on the filter
    // There may be some added caching logic here
    if (items.length === 0) {
      dispatch(fetchCatalogList({ limit: pageLimit, filters: filter }));
    }
  }, [filter, dispatch, pageLimit, items.length]);

  const onNextPage = () => {
    // Dispatch an action to load more items
    dispatch(fetchCatalogListMore({ limit: pageLimit, filters: filter, page: page + 1 }));
  };

  return { items, onNextPage, ended, loading, error };
};

export const useDataCatalogItem = (id: string | undefined) => {
  const dispatch = useAppDispatch();
  const { item, loading, error } = useAppSelector(state => selectorCatalogItem(state, id));
  useEffect(() => {
    // There may be some added caching logic here
    if (!item) {
      dispatch(fetchCatalogItem(Number(id)));
    }
  }, [dispatch, id, item]);

  return { item, loading, error };
};
