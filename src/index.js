import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import {  StatusBar, Alert } from 'react-native';

import '~/config/ReactotronConfig';
import { store, persistor} from './store';

import App from './App';

export default function Index() {

  return ( 
    <Provider store={store}>
      { console.log(store.getState()) }
        <PersistGate persistor={persistor}>
            <StatusBar barStyle="dark-content" backgroundColor="#50a45a" />            
            <App/>
        </PersistGate>
    </Provider>

  );
};


