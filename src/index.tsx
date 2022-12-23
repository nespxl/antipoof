import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { reducerToolkit } from './store'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const store = reducerToolkit()

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
