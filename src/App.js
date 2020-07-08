import React from 'react';

import { useSelector } from 'react-redux'

import createRouter from './routes';

import '~/config/ReactotronConfig';

export default function App() {

    const signed = useSelector(state => state.auth.signed);
    const admin  = useSelector(state => state.auth.admin);
    const Routes = createRouter(signed, admin);
    return <Routes />
}