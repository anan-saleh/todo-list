import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/assets/css/normalize.css';
import '../src/assets/css/global.css';
import { Provider } from 'react-redux';
import { store } from './store/store.tsx';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);
