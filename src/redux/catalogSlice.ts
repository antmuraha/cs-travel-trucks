import { createSlice, createSelector } from '@reduxjs/toolkit';
// import type { PayloadAction } from '@reduxjs/toolkit';
import { fetchCatalogItem, fetchCatalogList, fetchCatalogListMore } from './fetch';

export interface CatalogItem {
  id: string;
  name: string;
  price: number;
  rating: number;
  location: string;
  description: string;
  form: string;
  length: string;
  width: string;
  height: string;
  tank: string;
  consumption: string;
  transmission: string;
  engine: string;
  AC: boolean;
  bathroom: boolean;
  kitchen: boolean;
  TV: boolean;
  radio: boolean;
  refrigerator: boolean;
  microwave: boolean;
  gas: boolean;
  water: boolean;
  gallery: {
    thumb: string;
    original: string;
  }[];
  reviews: {
    reviewer_name: string;
    reviewer_rating: number;
    comment: string;
  }[];
}

interface CatalogState {
  // itemIds: string[];
  itemsById: { [id: string]: CatalogItem };
  itemsByFilter: { [filter: string]: { ids: string[]; page: number; ended: boolean } };
  loading: boolean;
  error: string | null;
}

const initialState: CatalogState = {
  // itemIds: [],
  itemsById: {},
  itemsByFilter: {},
  loading: false,
  error: null,
};

const catalogSlice = createSlice({
  name: 'catalog',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchCatalogList.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCatalogList.fulfilled, (state, action) => {
        state.loading = false;
        const { filters } = action.meta.arg;
        const { items } = action.payload;
        const newIds = items.map(item => item.id);
        state.itemsByFilter[filters] = { ids: newIds, page: 1, ended: items.length === 0 };
        items.forEach(item => {
          state.itemsById[item.id] = item;
        });
      })
      .addCase(fetchCatalogList.rejected, (state, action) => {
        state.loading = false;
        // @ts-expect-error TODO fix error type
        state.error = action.payload;
      })
      .addCase(fetchCatalogListMore.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCatalogListMore.fulfilled, (state, action) => {
        state.loading = false;
        const { filters } = action.meta.arg;
        const { items } = action.payload;
        if (!state.itemsByFilter[filters]) {
          state.itemsByFilter[filters] = { ids: [], page: 1, ended: false };
        }
        const newIds = [...state.itemsByFilter[filters].ids, ...items.map(item => item.id)];
        // state.itemIds = newIds;
        state.itemsByFilter[filters] = {
          ids: newIds,
          page: (state.itemsByFilter[filters]?.page || 1) + 1,
          ended: items.length === 0,
        };
        items.forEach(item => {
          state.itemsById[item.id] = item;
        });
      })
      .addCase(fetchCatalogListMore.rejected, (state, action) => {
        state.loading = false;
        // @ts-expect-error TODO fix error type
        state.error = action.payload;
      })
      .addCase(fetchCatalogItem.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCatalogItem.fulfilled, (state, action) => {
        state.loading = false;
        const item = action.payload;
        state.itemsById[item.id] = item;
      })
      .addCase(fetchCatalogItem.rejected, (state, action) => {
        state.loading = false;
        // @ts-expect-error TODO fix error type
        state.error = action.payload;
      });
  },
});

// Define RootState type if not already defined elsewhere
interface RootState {
  catalog: CatalogState;
}

export const selectorLoading = (state: RootState) => state.catalog.loading;
export const selectorError = (state: RootState) => state.catalog.error;

export const selectorCatalogList = createSelector(
  [
    (state: RootState) => state.catalog.itemsById,
    (state: RootState) => state.catalog.itemsByFilter,
    (_: RootState, filter: string) => filter,
    selectorLoading,
    selectorError,
  ],
  (itemsById, itemsByFilter, filter, loading, error) => {
    const meta = itemsByFilter[filter] || { ids: [], page: 1, ended: false };
    const items = (meta.ids || []).map((id: string) => itemsById[id]);
    return {
      items,
      page: meta.page,
      ended: meta.ended,
      loading,
      error,
    };
  }
);

export const selectorCatalogItem = createSelector(
  [
    (state: RootState) => state.catalog.itemsById,
    (_: RootState, id: string | undefined) => id,
    selectorLoading,
    selectorError,
  ],
  (itemsById, id, loading, error) => ({
    item: (itemsById[`${id}`] || null) as CatalogItem | null,
    loading,
    error,
  })
);

export default catalogSlice.reducer;
