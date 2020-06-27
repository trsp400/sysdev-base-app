import React from 'react';
import { View, StatusBar, Text } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import UserPicture from '../../components/UserPicture';
import {Container, DescriptionName} from './styles';
export default function DashboardUser()  {

    return (
        <Container>
            <StatusBar backgroundColor="#FFF" barStyle="dark-content"/>
                   
            <UserPicture/>
            <View style={{backgroundColor: "#FFF"}}/>
        </Container>
    );
};

DashboardUser.navigationOptions = {
    tabBarLabel: 'Dashboard',
    tabBarIcon : ({tintColor}) => <Icon name="dashboard" size={20} color={tintColor} /> ,
  
};
