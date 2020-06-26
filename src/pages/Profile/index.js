import React from 'react';
import {View,StatusBar} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Background from '~/components/Background';

export default function Profile() {
    
    
    return (
        <Background>
            <StatusBar backgroundColor="#50a45a" barStyle="dark-content"/>
            <View/>
        </Background>
    );
}

Profile.navigationOptions = {
    tabBarLabel: "Meu Perfil",
    tabBarIcon: ({tintColor}) => <Icon name="person" size={20} color={tintColor} />,
}