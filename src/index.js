import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App';
import  storeData  from 'redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={storeData.store}>
      <PersistGate loading={null} persistor={storeData.persistor}>
    <App />
    </PersistGate>
    </Provider>
  </React.StrictMode>
);
