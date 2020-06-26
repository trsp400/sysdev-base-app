import React from 'react';
import { View, StatusBar } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Background from '~/components/Background';

export default function DashboardUser()  {

    // AsyncStorage.clear();

    return (
        <>
            <StatusBar backgroundColor="white" barStyle="dark-content"/>
            <View/>
        </>
    );
};

DashboardUser.navigationOptions = {
    tabBarLabel: 'Dashboard',
    tabBarIcon : ({tintColor}) => <Icon name="dashboard" size={20} color={tintColor} /> ,
  
};
