import React from 'react';
navigator.geolocation = require('@react-native-community/geolocation');
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import {  StatusBar } from 'react-native';

import '~/config/ReactotronConfig';
import { store, persistor} from './store';

import App from './App';

export default function Index() {

  return ( 
    <Provider store={store}>
        <PersistGate persistor={persistor}>
            <StatusBar barStyle="dark-content" backgroundColor="#50a45a" />            
            <App/>
        </PersistGate>
    </Provider>

  );
};


