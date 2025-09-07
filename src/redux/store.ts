import { configureStore, combineReducers } from '@reduxjs/toolkit';
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

import catalogReducer from './catalogSlice';
// import filtersReducer from './filtersSlice';

// const contactsPersistConfig = {
//   key: 'contacts',
//   storage,
//   whitelist: ['items'],
// };

const rootReducer = combineReducers({
  catalog: catalogReducer,
  // filters: filtersReducer,
});

export const store = configureStore({
  devTools: import.meta.env.MODE !== 'production',
  reducer: rootReducer,
  // middleware: getDefaultMiddleware =>
  //   getDefaultMiddleware({
  //     serializableCheck: {
  //       ignoredActions: [
  //         'persist/PERSIST',
  //         'persist/REHYDRATE',
  //         'persist/REGISTER',
  //         'persist/PURGE',
  //         'persist/FLUSH',
  //         'persist/PAUSE',
  //         'persist/RESUME',
  //       ],
  //     },
  //   }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// export const persistor = persistStore(store);
