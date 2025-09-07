import { createAsyncThunk } from '@reduxjs/toolkit';
import type { CatalogItem } from './catalogSlice';
import client from './client';

const fetchCatalogList = createAsyncThunk(
  'catalog/fetchAll',
  async (options: { limit: number; filters: string }, thunkAPI) => {
    try {
      const { filters, limit } = options;
      const url = filters ? `/campers?page=1&limit=${limit}&${filters}` : `/campers?page=1&limit=${limit}`;
      const response = await client.get(url);
      console.log('response', response);
      return response as { items: CatalogItem[]; total: number };
    } catch (error: unknown) {
      if (error && typeof error === 'object' && 'message' in error) {
        return thunkAPI.rejectWithValue((error as { message: string }).message);
      }
      return thunkAPI.rejectWithValue('Unknown error');
    }
  }
);

const fetchCatalogListMore = createAsyncThunk(
  'catalog/fetchMore',
  async (options: { limit: number; filters: string; page: number }, thunkAPI) => {
    try {
      const { filters, limit, page } = options;
      const url = filters ? `/campers?page=${page}&limit=${limit}&${filters}` : `/campers?page=${page}&limit=${limit}`;
      const response = await client.get(url);
      return response as { items: CatalogItem[]; total: number };
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const fetchCatalogItem = createAsyncThunk('catalog/fetchById', async (id: string | number, thunkAPI) => {
  try {
    const response = await client.get(`/campers/${id}`);
    console.log('111111111ERRRRRRRr', response);
    return response as CatalogItem;
  } catch (error: unknown) {
    console.log('111111111error', error);
    if (error && typeof error === 'object' && 'message' in error) {
      return thunkAPI.rejectWithValue((error as { message: string }).message);
    }
    return thunkAPI.rejectWithValue('Unknown error');
  }
});

export { fetchCatalogList, fetchCatalogListMore, fetchCatalogItem };
