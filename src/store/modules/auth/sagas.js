import { all, takeLatest, call, put } from 'redux-saga/effects';
import { Alert } from 'react-native';

// import history from '~/services/history';
import api from '~/services/api';

import {signInSuccess, signFailure} from './actions';

export function* signIn({ payload, navigation }) {
    try 
    {
        const { email, password } = payload;

        const response = yield call(api.post, 'sessions', {
            email,
            password,
        });
        const { token, user } = response.data;
        
        api.defaults.headers.Authorization = `Bearer ${token}`;

        console.log(api.defaults.headers.Authorization);
        yield put(signInSuccess(token, user))
        
    } 
    catch(err) {
        
        Alert.alert('Erro no login', 'Verifique seus dados!');
        yield put(signFailure())
    }

}

export function setToken({payload}) {
    if (!payload) return;
    const {token} = payload.auth;

    if (payload) {
        api.defaults.headers.Authorization = `Bearer ${token}`;
    }
}

export default all([
    takeLatest('persist/REHYDRATE', setToken),
    takeLatest('@auth/SIGN_IN_REQUEST', signIn)
])