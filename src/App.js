import React from 'react';

import { useSelector } from 'react-redux'

import createRouter from './routes';

import '~/config/ReactotronConfig';
import AsyncStorage from '@react-native-community/async-storage';

export default function App() {

    

    const signed = useSelector(state => state.auth.signed);
    const Routes = createRouter(signed)

    return <Routes />
}