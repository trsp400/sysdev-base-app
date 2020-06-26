import React from 'react';

import { useSelector } from 'react-redux'

import createRouter from './routes';

import '~/config/ReactotronConfig';
import AsyncStorage from '@react-native-community/async-storage';

export default function App() {

    const signed = useSelector(state => state.auth.signed);
    const admin  = useSelector(state => state.auth.admin);
    const Routes = createRouter(signed, admin);
    console.log(admin);
    return <Routes />
}