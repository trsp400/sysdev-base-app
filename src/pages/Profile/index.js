import React from 'react';
import {View,StatusBar} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Background from '~/components/Background';

export default function Profile() {
    
    
    return (
        <>
            <View/>
        </>
    );
}

Profile.navigationOptions = {
    tabBarLabel: "Meu Perfil",
    tabBarIcon: ({tintColor}) => <Icon name="person" size={20} color={tintColor} />,
}