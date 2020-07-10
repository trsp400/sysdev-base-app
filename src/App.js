import React, {useEffect} from 'react';
import {Platform, StatusBar} from 'react-native';
import {useSelector} from 'react-redux';

import createRouter from './routes';

import SplashScreen from 'react-native-splash-screen';

import '~/config/ReactotronConfig';

export default function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  const signed = useSelector(state => state.auth.signed);
  const admin = useSelector(state => state.auth.admin);
  const Routes = createRouter(signed, admin);
  return (
    <>
      <Routes />
    </>
  );
}
