import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from '@redux/store.ts';
import './styles/index.css';
import App from './App.tsx';

// Custom Web Components
import '@controls/ClickSpark';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
