import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import SplashScreen from 'react-native-splash-screen';
import createRouter from './routes';

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
